"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

interface ResearchCardProps {
  title: string;
  image: string;
  link: string;
}

export default function ResearchCard({ title, image, link }: ResearchCardProps) {
  return (
    <Link href={link} passHref>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={{
          rest: { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" },
          hover: { y: -8, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' },
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative rounded-xl overflow-hidden bg-white border shadow-sm cursor-pointer"
      >
        {/* カード画像 */}
        <div className="h-48 relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* タイトル */}
        <div className="bg-white p-4 text-center font-semibold text-lg">
          {title}
        </div>

        {/* プラスアイコン（ホバー時だけ表示 & アニメーション） */}
        <motion.div
          className="absolute top-3 right-3 text-white"
          variants={{
            rest: { opacity: 0, scale: 0.5, rotate: 0 },
            hover: { opacity: 1, scale: 1.3, rotate: 90 },
          }}
          transition={{ duration: 0.4 }}
        >
          <FaPlus size={20} />
        </motion.div>
      </motion.div>
    </Link>
  );
}

