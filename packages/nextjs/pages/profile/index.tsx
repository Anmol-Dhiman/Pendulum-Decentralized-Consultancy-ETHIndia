import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
// import Profile from "~~/components/Profile";
import { readContract } from '@wagmi/core'
import { useDeployedContractInfo, useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import type { NextPage } from "next";
import Link from "next/link";
import { GrAdd } from "react-icons/gr";


const Profile: NextPage = () => {


  const account = useAccount();
  // const [isExpert, setIsExpert] = useState(true);
  // const { data: pendulumContract } = useDeployedContractInfo("Pendulum");

  const { data: isExpert } = useScaffoldContractRead({
    contractName: "Pendulum",
    functionName: "isExpert",
    args: [account.address],
    account: account.address
  });



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
        <div className=" font-bold text-2xl  " >{heading}</div>
        {
          orbList.length === 0 ? <div className=" font-normal text-4xl text-[#bfc7c1]  " >N/A</div> :
            orbList.map((value, index) => {
              return (
                <div key={index} >
                  hello world
                </div>
              )
            })
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
      <OrbList heading="ORBs Created" orbList={[]} />




    </div>
  );
};

export default Profile;
