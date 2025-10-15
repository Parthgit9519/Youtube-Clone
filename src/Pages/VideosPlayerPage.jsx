import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/ContextData";

const VideosPlayerPage = () => {
   const { id } = useParams();
   const { videosData } = useContext(MyContext);

   const video = videosData.find((v) => v.id === id);

   const recommendations = videosData.filter((v) => v.id !== id);

   if (!video) {
      return <p className="text-center mt-10">Video not found.</p>;
   }

   return (
      <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-6 bg-gray-50 min-h-screen">
         <div className="flex-1">
            <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
               <iframe
                  className="w-full aspect-video"
                  src={video.videoUrl}
                  title={video.title}
                  allowFullScreen
               ></iframe>
            </div>

            <h1 className="text-2xl font-bold mt-4">{video.title}</h1>
            <p className="text-sm text-gray-600 mt-1">
               {video.views} • {video.channelName}
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">{video.description}</p>

            <hr className="my-6 border-gray-300" />

            <div>
               <h2 className="text-lg font-semibold mb-3">Comments</h2>
               <textarea
                  placeholder="Add a comment..."
                  className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="3"
               ></textarea>
               <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow-sm transition">
                  Post
               </button>

               <div className="mt-6 space-y-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                     <p className="font-semibold text-gray-800">User123</p>
                     <p className="text-gray-600 text-sm">Great tutorial! Learned a lot.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                     <p className="font-semibold text-gray-800">CodeLover</p>
                     <p className="text-gray-600 text-sm">Thanks for this video!</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="w-full lg:w-80 flex-shrink-0">
            <h2 className="text-lg font-semibold mb-4">Recommended</h2>
            <div className="space-y-4">
               {recommendations.map((rec) => (
                  <div
                     key={rec.id}
                     className="flex items-start gap-3 cursor-pointer group"
                     onClick={() => (window.location.href = `/watch/${rec.id}`)}
                  >
                     <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition">
                        <img
                           src={rec.thumbnail}
                           alt={rec.title}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                     </div>
                     <div className="flex-1">
                        <h3 className="text-sm font-semibold leading-snug line-clamp-2">
                           {rec.title}
                        </h3>
                        <p className="text-xs text-gray-500">{rec.channelName}</p>
                        <p className="text-xs text-gray-500">{rec.views}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

   );
};

export default VideosPlayerPage;
