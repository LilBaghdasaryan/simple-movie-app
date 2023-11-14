import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SearchIcon from "../../assets/images/icons/search.png";
import HomeIcon from "../../assets/images/icons/home.png";
import TvShows from "../../assets/images/icons/TVShows.png";
import Movies from "../../assets/images/icons/movies.png";
import Genres from "../../assets/images/icons/genrec.png";
import Watch from "../../assets/images/icons/watch.png";
import { NavLink, useLocation } from "react-router-dom";


export default function () {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();
  const [url, setUrl] = useState(null);

  const routes = [
    {
      path: "/",
      name: "Home",
      icon: HomeIcon,
    },
    {
      path: "#",
      name: "TV shows",
      icon: TvShows ,
    },
    {
      path: "#",
      name: "Movies",
      icon: Movies ,
    },
    {
      path: "#",
      name: "Genres",
      icon: Genres,
    },
    {
      path: "#",
      name: "Watch Later",
      icon: Watch,
    },
  ];

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "100px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
    show: {
      opacity: 0.8,
      width: "auto",
      transition: {
        duration: 0.8,
      },
    },
  };

 

    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);


    return (
      <div className="sidebar-wrapper">
      <div 
      className="sidebar"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
          
        <AnimatePresence>
              {isOpen && <div className="avatar">
                <div className="avatar_icon">
                  <img src={require('../../assets/images/icons/avatar.jpg')} />
                </div>
                <div className="avatar_description">Daniel</div>
              </div>}
          </AnimatePresence>
        <div className="search">
          <div className="search_icon">
            <img src={SearchIcon}/>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                type="text"
                placeholder="Search"
              />
            )}
          </AnimatePresence>
        </div>
        <div className="info-wrapper">
        <section className="routes">
          {routes.map((route, index) => {
            return (
              <NavLink
                to={route.path}
                key={index}
                className={`link bold ${
                  url?.includes(route.path)
                      ? 'activeItem'
                      : ''
              }`}
              >
                <div >
                  <img src={route.icon}/>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
       
        <AnimatePresence>
        {isOpen && <div className="sidebar-info">
            <NavLink className="link sidebar-info-item t-regular">LANGUAGE</NavLink>
            <NavLink className="link sidebar-info-item t-regular">GET HELP</NavLink>
            <NavLink className="link sidebar-info-item t-regular">EXIT</NavLink>
        </div>}
        </AnimatePresence>
        </div>
      </div>
    </div>
    )
}