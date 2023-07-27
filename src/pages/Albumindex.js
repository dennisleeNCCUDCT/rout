import React from "react";
import { useOutletContext } from "react-router-dom";
import List from "../components/List";
//
const Albumindex = () => {
  const list = useOutletContext();
  return (
    <div>
      這是相簿首頁
      <List list={list} />
    </div>
  );
};

export default Albumindex;
