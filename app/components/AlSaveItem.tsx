"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface AlSaveItemProps {
  name: string;
  type: string;
  place: string;
  foodorgroc: string;
  before: number; // Optional in case some items don't have a priceBefore
  after: number;
  from: string;
  till: string;
  imagepath: string;
}

export default function AlSaveItem({
  name,
  type,
  foodorgroc,
  place,
  before,
  after,
  till,
  imagepath,
}: AlSaveItemProps) {
  return (
    <motion.div
      className="min-w-[200px] bg-purple-200 p-4 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05, rotate: 3 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {imagepath && (
        <img
          src={imagepath}
          alt={name}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      )}
      <div className="p-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{type}</p>
        <p className="text-md font-medium">
          {before !== undefined && before !== after && (
            <span className="line-through text-gray-400">${before.toFixed(2)} </span>
          )}
          ${after.toFixed(2)}
        </p>
        <p className="text-sm text-gray-600">Expiry: {till}</p>
      </div>
    </motion.div>
  );
}
