import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

const api = "https://api.unsplash.com/search/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;
console.log(api, process.env);
//
const AlbumLayout = () => {
  const [list, setaList] = useState([]);
  useEffect(() => {
    (async () => {})();
  }, []);
  //
  return (
    <div className="row">
      <div className="col-4">左側選單列表</div>
      <div className="col-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AlbumLayout;
