"use client"

import React from 'react';;
import Image from "next/image";

export default function NewRecipe({recipe}) {

  return (
   <div className='h-[160px] w-[440px] max-w-[90vw] bg-primary flex items-center flex-col border-neon border-solid border-y-[1px]'>
    <div className='h-12 flex items-center justify-center w-full border-neon border-solid border-b-[1px] color-neon text-xl font-bold'>
        Receita preparada!
    </div>
    <div className='h-28 flex flex-row items-center gap-10 font-semibold text-2xl'>
        <Image className={`max-h-[70%] w-auto`} src={recipe.src} alt={recipe.name} width={100} height={100} priority={true}/>
        <div>
            {recipe.name}
        </div>
    </div>
   </div>
  );
}