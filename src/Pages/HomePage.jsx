import { useContext } from 'react';
import { MyContext } from '../context/ContextData';
import VideosCard from '../components/VideosCard';

const HomePage = () => {
   const { videosData } = useContext(MyContext);

   return (
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {videosData.map((video) => (
            <VideosCard key={video.id} video={video} />
         ))}
        
      </div>
   );
};

export default HomePage;
