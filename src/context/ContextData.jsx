import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {

   const [videosData, setVideosData] = useState([
      {
         id: "1",
         title: "Frontend Mastery Cohort | HTML, CSS, JS",
         thumbnail: "https://img.youtube.com/vi/pQN-pnXPaVg/maxresdefault.jpg",
         videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
         views: "1.2M views",
         channelName: "Sheryians Coding School",
         description: "Learn frontend development from scratch with HTML, CSS, and JavaScript in our KODR style cohort."
      },
      {
         id: "2",
         title: "React Cohort | Build Real-World Apps",
         thumbnail: "https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
         videoUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8",
         views: "850K views",
         channelName: "Sheryians Coding School",
         description: "Master React and build real-world projects with our immersive React Cohort program."
      },
      {
         id: "3",
         title: "Backend Development Cohort | Node.js & Express",
         thumbnail: "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg",
         videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE",
         views: "2.1M views",
         channelName: "Sheryians Coding School",
         description: "Learn backend development with Node.js, Express, and MongoDB in our Backend Cohort."
      },
      {
         id: "4",
         title: "Three.js Cohort | 3D Web Development",
         thumbnail: "https://img.youtube.com/vi/Q7AOvWpIVHU/maxresdefault.jpg",
         videoUrl: "https://www.youtube.com/embed/Q7AOvWpIVHU",
         views: "1.9M views",
         channelName: "Sheryians Coding School",
         description: "Create stunning 3D web experiences with Three.js in our dedicated Three.js Cohort."
      },
      {
         id: "5",
         title: "Full Stack Development Bootcamp | MERN",
         thumbnail: "https://img.youtube.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
         videoUrl: "https://www.youtube.com/embed/7CqJlxBYj-M",
         views: "670K views",
         channelName: "Sheryians Coding School",
         description: "Go full-stack with MongoDB, Express, React, and Node.js in our MERN bootcamp."
      },
      {
         id: "6",
         title: "Tailwind CSS in Action | Modern UI Cohort",
         thumbnail: "https://img.youtube.com/vi/dFgzHOX84xQ/maxresdefault.jpg",
         videoUrl: "https://www.youtube.com/embed/dFgzHOX84xQ",
         views: "1.4M views",
         channelName: "Sheryians Coding School",
         description: "Design stunning and responsive UIs with Tailwind CSS in this KODR-style session."
      },
      {
         id: "7",
         title: "JavaScript Mastery | ES6+ Features & Async",
         thumbnail: "https://img.youtube.com/vi/ieTHC78giGQ/maxresdefault.jpg",
         videoUrl: "https://www.youtube.com/embed/ieTHC78giGQ",
         views: "920K views",
         channelName: "Sheryians Coding School",
         description: "Master modern JavaScript with ES6+ features, async/await, and real-world examples."
      },
      {
         id: "8",
         title: "Git & GitHub for Developers",
         thumbnail: "https://img.youtube.com/vi/SWYqp7iY_Tc/maxresdefault.jpg",
         videoUrl: "https://www.youtube.com/embed/SWYqp7iY_Tc",
         views: "3.5M views",
         channelName: "Sheryians Coding School",
         description: "Learn Git and GitHub essentials for version control and collaboration."
      },
      {
         id: "9",
         title: "REST API Development | Express & MongoDB",
         thumbnail: "https://img.youtube.com/vi/-MTSQjw5DrM/maxresdefault.jpg",
         videoUrl: "https://www.youtube.com/embed/-MTSQjw5DrM",
         views: "780K views",
         channelName: "Sheryians Coding School",
         description: "Understand REST API architecture and build scalable APIs with Express and MongoDB."
      },
      {
         id: "10",
         title: "Next.js Cohort | Server-Side Rendering & APIs",
         thumbnail: "https://img.youtube.com/vi/1WmNXEVia8I/maxresdefault.jpg",
         videoUrl: "https://www.youtube.com/embed/1WmNXEVia8I",
         views: "1.1M views",
         channelName: "Sheryians Coding School",
         description: "Master Next.js with SSR, API routes, and production-ready best practices."
      },
      {
         id: "11",
         title: "Responsive Web Design Masterclass",
         thumbnail: "https://img.youtube.com/vi/srvUrASNj0s/maxresdefault.jpg",
         videoUrl: "https://www.youtube.com/embed/srvUrASNj0s",
         views: "2.3M views",
         channelName: "Sheryians Coding School",
         description: "Build responsive websites that work flawlessly on all devices."
      },
      {
         id: "12",
         title: "MongoDB Mastery | Database Design & Queries",
         thumbnail: "https://img.youtube.com/vi/AYDP1S5BbTo/maxresdefault.jpg",
         videoUrl: "https://www.youtube.com/embed/AYDP1S5BbTo",
         views: "640K views",
         channelName: "Sheryians Coding School",
         description: "Learn MongoDB database design, queries, and integration with backend apps."
      }
   ]);

   const [searchBar, setSearchBar] = useState("b");

   const handleSearch = (e) => {
      setSearchBar(e.target.value);
   };


   const filteredData = () => {
      return searchBar.trim() === "" ? videosData : videosData.filter((val) => val.title.toLowerCase().includes(searchBar.toLowerCase()));
   };
   const result = filteredData()
   console.log(result);

   return (
      <MyContext.Provider value={{ videosData, setVideosData, handleSearch, searchBar, setSearchBar, filteredData }}>
         {children}
      </MyContext.Provider>
   );
};
