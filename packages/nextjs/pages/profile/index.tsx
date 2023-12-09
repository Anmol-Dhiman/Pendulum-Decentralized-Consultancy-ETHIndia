"use client"

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
// import Profile from "~~/components/Profile";
import { readContract } from '@wagmi/core'
import { useDeployedContractInfo, useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import type { NextPage } from "next";
import Link from "next/link";
import { GrAdd } from "react-icons/gr";

import OrbABI from "../../../foundry/out/PendulumOrb.sol/PendulumOrb.json"

const Profile: NextPage = () => {


  const account = useAccount();
  const [orbsCreated, setOrbsCreated] = useState<any>([])
  const [orbAddress, setOrbAddress] = useState([])
  // const [isExpert, setIsExpert] = useState(true);
  const { data: pendulumContract } = useDeployedContractInfo("PendulumFactory");

  const { data: isExpert } = useScaffoldContractRead({
    contractName: "PendulumFactory",
    functionName: "isExpert",
    args: [account.address],
    account: account.address
  });


  useEffect(() => {
    // here we have to fetch orbs owned 
    const getOrbsCreated = async () => {
      try {
        if (!isExpert) return
        if (account.address === undefined) return
        const createdOrbsArray = await readContract({
          address: pendulumContract?.address!,
          abi: pendulumContract?.abi!,
          functionName: 'getExpertOwnedOrbs',
          account: account.address
        })
        console.log(JSON.stringify(createdOrbsArray))
        setOrbAddress(createdOrbsArray)
        const _orbDetails: any[] = []
        for (var i = 0; i < createdOrbsArray.length; i++) {
          const orbData = await readContract({
            address: createdOrbsArray[i],
            abi: OrbABI.abi,
            functionName: 'getOrbDetails',
            account: account.address
          })
          console.log(orbData)
          _orbDetails.push(orbData)
        }

        setOrbsCreated(_orbDetails)



      } catch (e) { console.log(e) }

    }
    getOrbsCreated()
  }, [isExpert])



  function unixToDateString(unixTime: number): string {
    if (typeof unixTime !== 'number') {
      throw new Error('Invalid input: Unix timestamp must be a number');
    }
    const date = new Date(unixTime * 1000);
    return date.toISOString().split('T')[0]; // Extract date portion from ISO string
  }

  // useEffect(() => {
  //   // fetch that user have exper profile or not 
  //   const isExpertData = async () => {

  //     if (account.address === undefined) return
  //     if (account.isConnected) {
  //       console.log("reading contract")
  //       const data = await readContract({
  //         address: pendulumContract?.address!,
  //         abi: pendulumContract?.abi!,
  //         functionName: 'isExpert',
  //         args: [account.address],
  //         account: account.address
  //       })
  //       console.log("finished")
  //       console.log(data)
  //       setIsExpert(data)
  //     }

  //   }
  //   try {
  //     isExpertData()
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }, [])

  const OrbList = ({ heading, orbList }: { heading: string, orbList: any[] }) => {
    return (
      <div className="mb-12" >
        <div className=" font-bold text-2xl mb-2 " >{heading}</div>
        {
          orbList.length === 0 ? <div className=" font-normal text-4xl text-[#bfc7c1]  " >N/A</div> :
            <div className="grid grid-cols-3  " >
              {
                orbList.map((value, index) => {
                  return (
                    <>
                      <div key={index} className="rounded-lg px-4 pb-4   bg-slate-300"  >

                        <div className="flex flex-row justify-between  " >
                          <p>Created At</p>
                          <p>{unixToDateString(value.createdAt)}</p>
                        </div>
                        <div className="flex flex-row justify-between  " >
                          <p>Auction At</p>
                          <p>{unixToDateString(Number(value.auctionTime))}</p>
                        </div>
                        <div className="flex flex-row justify-between  " >
                          <p>Base Price</p>
                          <p>{Number(value.priceInUSD)}</p>
                        </div>
                        <div className="flex flex-row justify-between  " >
                          <p>Cool Down Time</p>
                          <p>{Number(value.coolDownTime) / (60 * 60 * 24)}</p>
                        </div>
                        <div className="flex flex-row justify-between  " >
                          <p>Tax Rate</p>
                          <p>{Number(value.taxRate)}</p>
                        </div>
                        <div className="flex flex-row justify-between  " >
                          <p>Owned By</p>
                          <p>{Number(value.owner) === 0 ? "N/A" : String(value.owner)}</p>
                        </div>


                        {
                          Number(value.owner) === 0 &&
                          < div className="mb-4 text-white bg-[#0e76fd] w-[100%] rounded-lg py-2 px-2  text-center   font-bold "  >
                            {/* /${value.auctionTime}/${value.priceInUSD}/${value.coolDownTime}/${value.taxRate} */}
                            <Link href={`/profile/orb/${orbAddress[index]}/${value.auctionTime}/${value.priceInUSD}/${value.coolDownTime}/${value.taxRate}`}   >Update ORB</Link>
                          </div>
                        }





                      </div>

                    </>
                  )
                })
              }
            </div>
        }

      </div >
    )
  }

  if (!account.isConnected) {
    return (
      <div className="container ">

        {
          !account.isConnected &&
          <div className=' font-semibold text-2xl  text-center mt-12 '  >
            Connect Your Wallet First
          </div>
        }
      </div>
    )
  }

  return (
    <div className="container ">

      {
        !account.isConnected &&
        <div className=' font-semibold text-2xl  text-center mt-12 '  >
          Connect Your Wallet First
        </div>
      }

      {
        isExpert ?
          <>
            <div className="w-fit self-end  flex flex-row  items-center  " >

              <Link href="/profile/updateExpertProfile" className="text-white bg-[#0e76fd] rounded-lg py-2 px-2     font-bold" >
                Update Expert Profile
              </Link>
              <Link href="/profile/orb/create" className="ml-4 rounded-full p-3 bg-[#0e76fd]  hover:rotate-[-15deg] transition-transform duration-500 ease-in-out "  >
                <GrAdd color=" white " />
              </Link>
            </div>


          </> :
          <Link href="/profile/createExpertProfile" className="text-white bg-[#0e76fd] rounded-lg py-2 px-2  w-fit  self-end      font-bold" >
            Create Expert Profile
          </Link>
      }


      <OrbList heading="ORBs Owned" orbList={[]} />
      <OrbList heading="ORBs Created" orbList={orbsCreated} />




    </div>
  );
};

export default Profile;
