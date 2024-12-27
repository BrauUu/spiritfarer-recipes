import React from 'react';
import Image from "next/image";

import './Loading.css';

export default function Loading() {
  return (
    <div className='loading-div'>
      <Image
        width={500}
        height={500}
        alt="Picture of the author"
        src="/loading.gif">
      </Image>
    </div>

  );
}