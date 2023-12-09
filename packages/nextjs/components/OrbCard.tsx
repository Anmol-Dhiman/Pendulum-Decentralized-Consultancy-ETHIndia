import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Timer from "./Timer";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa6";

const OrbCard = () => {
  const [bid, setBid] = useState();

  const handleBid = e => {
    setBid(e.target.value);
    console.log(bid);
  };

  const placeBidFunction = () => {};
  return (
    <div className="p-10 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-start gap-10">
        <Image
          className="rounded-full"
          width={150}
          height={150}
          src="/avatar-icon0002_750950-43.webp"
          alt="avatar-img"
        />
        <h1 className="font-bold text-[32px]">Anmol's ORB</h1>
        <Link className="hover:text-blue-600" href="https://twitter.com/sherlockvarm">
          <FaTwitter className="text-[28px]" />
        </Link>
      </div>
      <div className="flex justify-evenly">
        <div className="">
          <h3 className=" font-bold text-[28px]">ORB Details</h3>
          <div className="text-gray-400 w-[400px]">
            <div className="flex justify-between">
              <p>Current Price</p>
              <p>0.3 ETH</p>
            </div>
            <div className="flex justify-between">
              <p>Created At</p>
              <p>2023-12-09 15:55:59</p>
            </div>
            <div className="flex justify-between">
              <p>Slot</p>
              <p>1 month</p>
            </div>
            <div className="flex justify-between">
              <p>Harberger Tax</p>
              <p>120%</p>
            </div>
          </div>
        </div>
        <div className="">
            <div className="flex bg-blue-500 font-bold text-lg  text-white justify-center gap-5 rounded-xl ">
              <p>Starts In</p>
              <p>12:45:00</p>
            </div>
          <div>

            <input type="number" onChange={handleBid} className="input-box p-0" placeholder="Enter you bid"></input>
            <button onClick={placeBidFunction} className="form-button px-3 mx-2">
              Place Bid
            </button>
            <div className="text-gray-400 p-1 flex justify-start gap-2">
              <p className="text-[20px]">Highest Bid ~</p>
              <p className="text-[20px]"> 0.4 ETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbCard;
