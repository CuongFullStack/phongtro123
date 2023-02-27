import React from "react";
import { Outlet } from "react-router-dom"; //Outlet Đại diện cho các router con trong router lồng nhau
import Header from "./Header";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center border border-red-500">
      <Header />
      <Navigation />
      <div className="w-1100 flex flex-col items-center justify-start mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
