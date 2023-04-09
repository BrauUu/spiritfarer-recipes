import React from 'react';
import loadingImg from '../../../assets/loading.gif';
import { motion } from "framer-motion"

import './Loading.css'

export default function Loading() {
  return (
    <div className='loading-div'>
      <motion.img
        animate={{ opacity: 0.3 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.25 }}
        src={loadingImg}
        className="loading-img"
        >
      </motion.img>
    </div>

  );
}