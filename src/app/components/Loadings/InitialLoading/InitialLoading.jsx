import React from 'react';
import Image from "next/image";

import './InitialLoading.css'

export default function InitialLoading() {
  return (
    <div className='initial-loading-div'>
      <Image
        width={500}
        height={500}
        alt="Picture of the author"
        src="/images/loading.png">
      </Image>
    </div>

  );
}