"use client"

import React from 'react';;
import Image from "next/image";
import { motion } from "motion/react"

export default function InitialLoading() {

  return (
    <div
      className='w-full h-full flex items-center justify-center'
    >
      <motion.div
        animate={{ opacity: [1, 0.25, 1] }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          repeat: Infinity
        }}
        className='min-w-[25%]'
      >
        <img
          className='w-full drop-shadow-md'
          width={512}
          height={279}
          alt="Logo do jogo Spiritfarer"
          src={"/images/loading.png"}
        >
        </img>
      </motion.div>
    </div>
  );
}