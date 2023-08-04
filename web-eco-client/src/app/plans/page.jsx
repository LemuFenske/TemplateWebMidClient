'use client'
import React from "react";
import Cards from "@/components/Cards/Cards";
import Image from "next/image";
import imageUrl from "../home.png";

export default function Plans() {
  return (
    <div className="relative min-h-screen w-full bg-gray-600">
      <Image src={imageUrl} className="object-cover h-full w-full fixed z-0" alt="asd" />
      <div className="fixed top-0 left-0 w-full min-h-screen bg-black opacity-50 z-10"></div>
      <div className="z-20 absolute mt-20 w-full">
        <h1 className="text-6xl font-black text-green-500 mb-2 mr-auto ml-10 italic">PLANES:</h1>
        <Cards />
      </div>
    </div>
  );
}
