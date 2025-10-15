import { Routes, Route, useLocation } from 'react-router-dom';
// import HomePage from './Pages/HomePage';
import VideosPlayerPage from './Pages/VideosPlayerPage';
import Navbar from './components/Navbar';
import YoutubeSidePanal from './components/YoutubeSidePanal';
// import VideosCard from './components/VideosCard';

function App() {

  const location = useLocation()

  const isWatchPage = location.pathname.startsWith("/watch")

  return (
    <div>
      {!isWatchPage && <Navbar></Navbar>}
      {!isWatchPage && <YoutubeSidePanal></YoutubeSidePanal>}

      <Routes>
        <Route path="/watch/:id" element={<VideosPlayerPage />} />
      </Routes>

    </div>

  );
}



export default App;
