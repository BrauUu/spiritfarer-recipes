import React from 'react';
import Image from "next/image";
import { motion } from "motion/react"

export default function InitialLoading() {
  return (
    <div
      className='w-full h-full flex items-center justify-center bg-primary'
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
        <Image
          className='w-full'
          width={512}
          height={279}
          alt="Logo do jogo Spiritfarer"
          src="/images/loading.png">
        </Image>
      </motion.div>
    </div>
  );
}