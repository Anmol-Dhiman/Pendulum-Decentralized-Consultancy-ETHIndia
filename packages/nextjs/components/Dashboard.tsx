import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaTwitter } from "react-icons/fa";
import {CiTwitter } from 'react-icons/ci'
const Dashboard = () => {
  const ORBdetails = {
    imgURL: "",
    Slot: "",
    transactionrRate: "",
    biddingPrice: "",
  };

  return (
    <div className="">
      <div className="grid grid-cols-3  px-40 py-10 ">
        <div className="shadow-lg bg-white rounded-xl p-4 w-[350px]">
          <div className=" w-full flex items-center justify-between">
            <div className="flex items-center gap-2 ">
              <h1 className="text-[24px] text-center">Anmol's ORB</h1>
              <Link className="hover:text-blue-600" href="https://twitter.com/sherlockvarm">
                <CiTwitter  className="text-xl" />
              </Link>
            </div>
            <div>
              <Image
                className="rounded-md m-auto"
                width={80}
                height={80}
                src="/avatar-icon0002_750950-43.webp"
                alt="avatar-img"
              />
            </div>
          </div>
          <div className="text-[14px] text-gray-400 ">
            <div className="flex justify-between">
              <p>Slot</p>
              <p>1 month</p>
            </div>
            <div className="flex justify-between">
              <p>Harberger Tax</p>
              <p> 180%</p>
            </div>
            <div className="flex justify-between">
              <p>Auction Base Price</p>
              <p>0.15 ETH</p>
            </div>
            <div className="flex justify-between">
              <p>Created At</p>
              <p>2023-12-09 15:55:59</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex w-4/5 bg-blue-500 font-bold text-lg  text-white justify-center gap-5 rounded-xl ">
              <p>Ends In</p>
              <p>12:45:00</p>
            </div>

            <div className="border-2 border-blue-500 rounded-xl hover:bg-blue-500 text-white">
              <Link href={`/orbs`} className="text-blue-500 text-lg  w-full">
                <div className="p-4 hover:text-white">
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-lg bg-white rounded-xl p-4 w-[350px]">
          <div className=" w-full flex items-center justify-between">
            <h1 className="text-[24px] text-center">Anmol's ORB</h1>
            <div>
              <Image
                className="rounded-md m-auto"
                width={80}
                height={80}
                src="/avatar-icon0002_750950-43.webp"
                alt="avatar-img"
              />
            </div>
          </div>
          <div className="text-[14px] text-gray-400 ">
            <div className="flex justify-between">
              <p>Slot</p>
              <p>1 month</p>
            </div>
            <div className="flex justify-between">
              <p>TransactionRate</p>
              <p> 18%</p>
            </div>
            <div className="flex justify-between">
              <p>Bidding Price</p>
              <p>0.15 ETH</p>
            </div>
            <div className="flex justify-between">
              <p>Created At</p>
              <p> Anmol Dhiman</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex w-4/5 bg-blue-500 font-bold text-lg  text-white justify-center gap-5 rounded-xl ">
              <p>Ends In</p>
              <p>12:45:00</p>
            </div>

            <div className="border-2 border-blue-500 rounded-xl hover:bg-blue-500 text-white">
              <Link href={`/orbs`} className="text-blue-500 text-lg  w-full">
                <div className="p-4 hover:text-white">
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-lg bg-white rounded-xl p-4 w-[350px]">
          <div className=" w-full flex items-center justify-between">
            <h1 className="text-[24px] text-center">Anmol's ORB</h1>
            <div>
              <Image
                className="rounded-md m-auto"
                width={80}
                height={80}
                src="/avatar-icon0002_750950-43.webp"
                alt="avatar-img"
              />
            </div>
          </div>
          <div className="text-[14px] text-gray-400 ">
            <div className="flex justify-between">
              <p>Slot</p>
              <p>1 month</p>
            </div>
            <div className="flex justify-between">
              <p>HarBerger Tax</p>
              <p> 180%</p>
            </div>
            <div className="flex justify-between">
              <p>Auction Base Price</p>
              <p>.15 ETH</p>
            </div>
            <div className="flex justify-between">
              <p>Created At</p>
              <p> Anmol Dhiman</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex w-4/5 bg-blue-500 font-bold text-lg  text-white justify-center gap-5 rounded-xl ">
              <p>Ends In</p>
              <p>12:45:00</p>
            </div>

            <div className="border-2 border-blue-500 rounded-xl hover:bg-blue-500 text-white">
              <Link href={`/orbs`} className="text-blue-500 text-lg  w-full">
                <div className="p-4 hover:text-white">
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
