import React from "react";
import Header from './layout/Header'
import Search from "./layout/Search";
import Banner from './Banner'
import "./Home.css";


const Home = () => {
  return (
    <div className="home">
        <Header/>
        <Search/>
        <Banner/>
    </div>
  );
};

export default Home;