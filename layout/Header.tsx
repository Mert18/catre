import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: NextPage = () => {
  return (
    <header className="h-32 bg-primary text-white flex justify-around items-center">
      <div className="w-24 h-24 relative">
        <Image
          src="/images/logo.svg"
          layout="fill"
          objectFit="contain"
          alt="cat and text saying catre"
        />
      </div>
      <ul className="flex justify-center items-center h-full">
        <li className="h-full flex items-center hover:bg-secondary">
          <Link href="/">
            <a className="w-32 flex justify-center items-center h-full">HOME</a>
          </Link>
        </li>
        <li className="h-full flex items-center hover:bg-secondary">
          <Link href="/">
            <a className="w-32 flex justify-center items-center h-full">
              SERVICES
            </a>
          </Link>
        </li>
        <li className="h-full flex items-center hover:bg-secondary">
          <Link href="/">
            <a className="w-32 flex justify-center items-center h-full">
              ABOUT
            </a>
          </Link>
        </li>
        <li className="h-full flex items-center hover:bg-secondary">
          <Link href="/">
            <a className="w-32 flex justify-center items-center h-full">
              PRICING
            </a>
          </Link>
        </li>
        <li className="h-full flex items-center hover:bg-secondary">
          <Link href="/">
            <a className="w-32 flex justify-center items-center h-full">
              CONTACT
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
