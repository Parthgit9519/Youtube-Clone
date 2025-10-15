import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/ContextData";

const VideosCard = () => {
   const navigate = useNavigate();
   const {filteredData } = useContext(MyContext);

   let vData = filteredData()

   return (
      <div className="flex flex-wrap gap-6">
         {vData.map((video) => (
            <div
               key={video.id}
               className="w-full sm:w-72 md:w-80 lg:w-72 cursor-pointer"
               onClick={() => navigate(`/watch/${video.id}`)}
            >

               <div className="relative w-full h-44 sm:h-40 md:h-44 lg:h-40">
                  <img
                     src={video.thumbnail}
                     alt={video.title}
                     className="w-full h-full object-cover rounded-lg"
                  />
                  <span className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded">
                     {video.views}
                  </span>
               </div>

               <div className="flex mt-3">
                  <div className="flex-shrink-0">
                     <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(video.channelName)}&background=random`}
                        alt={video.channelName}
                        className="w-10 h-10 rounded-full"
                     />
                  </div>
                  <div className="ml-3 flex flex-col">
                     <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                        {video.title}
                     </h3>
                     <p className="text-gray-500 text-xs mt-1">{video.channelName}</p>
                     <p className="text-gray-500 text-xs">{video.description}</p>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default VideosCard;
