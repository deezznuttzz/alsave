"use client"
import React from 'react';
import AlSaveItem from './AlSaveItem'; // Adjust the path if necessary
; // Ensure this component matches your data

interface AlSaveItem {
  name: string;
  type: string;
  place: string
  foodorgroc: string;
  from: string;
  till: string;
  before: number;
  after: number;
  imagepath: string;
}

interface StoreScrollerProps {
  place: string;
  specials: AlSaveItem[];
}

export default function StoreScroller({ place, specials }: StoreScrollerProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-2">{place}</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-500">
        {specials.map((special, index) => (
          <div key={index} className="min-w-[200px]">
            <AlSaveItem
              name={special.name}
              type={special.type}
              foodorgroc={special.foodorgroc}
              from={special.from}
              till={special.till}
              place={special.place}
              before={special.before}
              after={special.after}
              imagepath={special.imagepath}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
