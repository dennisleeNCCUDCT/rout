import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import List from "../components/List";
//
const api = "https://api.unsplash.com/search/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;
const AlbumSearch = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  //
  const [searchParams, setSearchParams] = useSearchParams();
  //
  useEffect(() => {
    //  setSearchParams({ query: "building" });
    setSearch(searchParams.get("query"));
  }, [searchParams]);

  //
  useEffect(() => {
    if (search !== "") {
      (async () => {
        const response = await axios.get(
          `${api}?client_id=${accessId}&query=${search} `
        );

        const { results } = response.data;

        setList(results);
      })();
    }
  }, [search]);
  //
  return (
    <>
       這是搜尋頁面{search}
      <input
        type="text"
        className="form-control"
        defaultValue={search}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            //setSearch(e.target.value);
            setSearchParams({ query: e.target.value });
          }
        }}
      />
      <List list={list} />
    </>
  );
};

export default AlbumSearch;
