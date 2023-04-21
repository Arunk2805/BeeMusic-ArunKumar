import React from "react";
import {FaHome ,FaChevronRight,FaBox, FaHeart,FaUserAlt,FaStar,FaCalendarAlt,FaDove,FaUsers,FaRegChartBar,FaRegCompass} from "react-icons/fa"

const Home = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 ">
          <p className="logo">
            <span className="logo1">Bee</span>
            <span>Music</span>
          </p>
          <div className="leftSide ">
            <div className="home ">
              <a href="" className="home1 my-1 ">
              <FaHome className="px-1 hmsize"/>  Home
              </a>
              <a href="" className="my-1"> <FaRegChartBar className="px-1 hmsize"/>Trends</a>
              <a href="" className="my-1"> <FaRegCompass className="px-1 hmsize"/>Feed</a>
            </div>
            <p className="discover">Discover</p>
            <div className="row">
              <button className="btn btn-light btn1 mt-1"> <FaBox className="me-3 hmsize1" />New and Notable</button>
              <button className="btn btn-light btn1 mt-1"> <FaCalendarAlt className="me-3 hmsize1"/>Release Calendar</button>
              <button className="btn btn-light btn1 mt-1"> <FaDove className="me-3 hmsize1"/>Events</button>
            </div>
            <p className="discover pt-2">Collection</p>
            <div className="row">
              <button className="btn btn-light btn1 mt-1"> <FaHeart className="me-3 hmsize1"/>Favorite Songs</button>
              <button className="btn btn-light btn1 mt-1" ><FaUsers className="me-3 hmsize1"/>Artist</button>
              <button className="btn btn-light btn1 mt-1"><FaStar  className="me-3 hmsize1"/>Albums</button>
            </div>
            <hr />
            <div className="profile">
              <p>user <FaChevronRight className="ms-3"/></p>
            </div>

          </div>
        </div>
        <div className="col-md-6">
          <h3>md-6</h3>
        </div>
        <div className="col-md-3">
          <h3>md-4</h3>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
