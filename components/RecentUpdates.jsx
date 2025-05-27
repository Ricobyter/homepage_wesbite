import React from 'react';
import portrait1 from "../assets/portrait-1.jpg"; 
import portrait2 from "../assets/portrait-2.jpg"; 

const updates = [
  {
    image: portrait1,
    title: 'The Creepy Love Game with Everyone Being Yandere',
    date: 'AuthorXYZ',
    chapters: [
      { number: 'Chapter 103', name: 'She Appears Again in the Loop' },
      { number: 'Chapter 104', name: 'Another Bloody Choice' },
    ],
  },
  {
    image: portrait2,
    title: 'I Am Unaware That I Am the Peerless Martial God',
    date: 'AuthorXYZ',
    chapters: [
      { number: 'Chapter 76', name: 'Unexpected Path to Power' },
      { number: 'Chapter 77', name: 'Cultivating Against Fate' },
    ],
  },
  {
    image: portrait1,
    title: 'Reborn and Snuggled into the Arms of My Yandere Female Classmate',
    date: 'AuthorXYZ',
    chapters: [
      { number: 'Chapter 31', name: 'The Secret Room Meeting' },
      { number: 'Chapter 32', name: 'Confessions and Knives' },
    ],
  },
  {
    image: portrait2,
    title: 'Getting Rejected Makes Me Stronger',
    date: 'AuthorXYZ',
    chapters: [
      { number: 'Chapter 58', name: 'Another "No", Another Boost' },
      { number: 'Chapter 59', name: 'System Upgrade Unlocked' },
    ],
  },
  {
    image: portrait2,
    title: 'Getting Rejected Makes Me Stronger',
    date: 'AuthorXYZ',
    chapters: [
      { number: 'Chapter 58', name: 'Another "No", Another Boost' },
      { number: 'Chapter 59', name: 'System Upgrade Unlocked' },
    ],
  },
  {
    image: portrait2,
    title: 'Getting Rejected Makes Me Stronger',
    date: 'AuthorXYZ',
    chapters: [
      { number: 'Chapter 58', name: 'Another "No", Another Boost' },
      { number: 'Chapter 59', name: 'System Upgrade Unlocked' },
    ],
  },
];

export default function RecentUpdates() {
  return (
    <div className="max-w-5xl mx-auto mt-4 px-3 md:px-0">
      <h2 className="text-2xl font-semibold mb-4 text-gray-200">Recent Updates</h2>
      <div className="space-y-8">
        {updates.map((novel, index) => (
          <div key={index} className="flex gap-4 text-gray-200 bg-[#091428] shadow-md rounded-md ">
            <img src={novel.image} alt={novel.title} className="w-16 h-24 object-cover rounded" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg line-clamp-1">{novel.title}</h3>
              <p className="text-xs text-gray-500 mb-1">{novel.date}</p>
              {novel.chapters.map((chapter, i) => (
                <p key={i} className="text-sm text-gray-400 line-clamp-1">
                  <span className="font-medium">{chapter.number}:</span> {chapter.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className='text-center text-gray-300 mt-8 cursor-pointer'>Show more</p>
    </div>
  );
}
