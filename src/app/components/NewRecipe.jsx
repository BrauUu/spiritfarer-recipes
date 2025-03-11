"use client"

import React from 'react';;
import Image from "next/image";

export default function NewRecipe({recipe}) {

  return (
   <div className='h-[160px] w-[440px] bg-primary flex items-center flex-col border-neon border-solid border-y-[1px]'>
    <div className='h-12 flex items-center justify-center w-full border-neon border-solid border-b-[1px] color-neon text-xl font-bold'>
        Nova receita aprendida!
    </div>
    <div className='h-28 flex flex-row items-center gap-10 font-semibold text-2xl'>
        <Image className={`max-h-[70%] w-auto`} src={recipe.src} alt={recipe.name} width={100} height={100} />
        <div>
            {recipe.name}
        </div>
    </div>
   </div>
  );
}