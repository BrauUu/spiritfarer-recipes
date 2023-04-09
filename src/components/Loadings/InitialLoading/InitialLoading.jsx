import React from 'react';
import loadingImg from '../../../assets/images/loading.png';
import { motion } from "framer-motion"

import './InitialLoading.css'

export default function InitialLoading() {
  return (
    <div className='initial-loading-div'>
      <motion.img
        animate={{ opacity: 0.3 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.25 }}
        src={loadingImg}>
      </motion.img>
    </div>

  );
}