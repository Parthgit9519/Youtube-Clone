import React from 'react';
import { MdHome, MdHistory, MdPlaylistPlay, MdSubscriptions, MdVideoLibrary, MdWatchLater, MdThumbUp} from 'react-icons/md';
import { FaVideo, FaGraduationCap } from 'react-icons/fa';
import { SiYoutubeshorts } from 'react-icons/si';
import { AiFillLike } from 'react-icons/ai';
import { RiLiveLine } from 'react-icons/ri';
import VideosCard from './VideosCard';

const YoutubeSidePanel = () => {
   const menuItems = [
      { name: 'Home', icon: <MdHome className="text-xl" /> },
      { name: 'Shorts', icon: <SiYoutubeshorts className="text-xl" /> },
      { name: 'Subscriptions', icon: <MdSubscriptions className="text-xl" /> },
      { name: 'History', icon: <MdHistory className="text-xl" /> },
      { name: 'Playlist', icon: <MdPlaylistPlay className="text-xl" /> },
      { name: 'Videos', icon: <FaVideo className="text-xl" /> },
      { name: 'Your Courses', icon: <FaGraduationCap className="text-xl" /> },
      { name: 'Library', icon: <MdVideoLibrary className="text-xl" /> },
      { name: 'Watch Later', icon: <MdWatchLater className="text-xl" /> },
      { name: 'Liked Videos', icon: <AiFillLike className="text-xl" /> },
      { name: 'Live', icon: <RiLiveLine className="text-xl" /> },
      { name: 'Favourites', icon: <MdThumbUp className="text-xl" /> },
   ];

   return (
      <div className="container mx-auto">
         <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-3 md:col-span-2 lg:col-span-2 bg-gray-50 p-4 min-h-screen">
               <nav className="flex flex-col space-y-4">
                  {menuItems.map((item, index) => (
                     <div
                        key={index}
                        className="flex items-center space-x-3 hover:bg-gray-200 p-2 rounded cursor-pointer"
                     >
                        {item.icon}
                        <span className="text-md font-medium">{item.name}</span>
                     </div>
                  ))}
               </nav>
            </div>

            <div className="col-span-12 sm:col-span-9 md:col-span-10 lg:col-span-10 p-4">
               <VideosCard></VideosCard>
            </div>
         </div>
      </div>
   );
};

export default YoutubeSidePanel;
