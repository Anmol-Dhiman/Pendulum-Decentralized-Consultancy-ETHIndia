import React, {useState} from "react";
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

    // const [value,setValue] = useState();
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
        <h1 className="font-bold text-[28px]">Anmol's ORB</h1>
        <Link className="hover:text-blue-600" href="https://twitter.com/sherlockvarm">
          <FaTwitter className="text-xl" />
        </Link>
      </div>
      <div className="py-5">
        <h3 className=" font-semibold text-[20px]">ORB Details</h3>
        <div>
          <p>Current Price</p>
          <p>Created By</p>
          <p>Slot</p>
          <p>Transaction Rate</p>
        </div>
        <div>
          <p>Highest Bid</p>
          <NumberInput >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
        <div className="bg-blue-700 p-2 rounded-lg text-white w-[200px] flex items-center justify-evenly">
          <span>Starts in</span>
          <span>03:11:43</span>
        </div>
      </div>
    </div>
  );
};

export default OrbCard;
