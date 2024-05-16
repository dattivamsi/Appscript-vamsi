"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  const [filterItems, setFilterItems] = useState({});
  const [recomendedfilters, setRecomendedFilters] = useState(false);
  const [filterCheckMark, setFilterCheckMark] = useState(0);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setProducts(json));
  // }, []);

  const filterDetails = [
    {
      title: "IDEAL FOR",
      subItems: ["Men", "Women", "Baby $ Kids"],
    },
    {
      title: "OCCASION",
      subItems: ["Men", "Women", "Baby $ Kids"],
    },
    {
      title: "WORK",
      subItems: ["Men", "Women", "Baby $ Kids"],
    },
    {
      title: "FABRIC",
      subItems: ["Men", "Women", "Baby $ Kids"],
    },
    {
      title: "SEGMENT",
      subItems: ["Men", "Women", "Baby $ Kids"],
    },
    {
      title: "SUITABLE FOR",
      subItems: ["Men", "Women", "Baby $ Kids"],
    },
    {
      title: "PATTERN",
      subItems: ["Men", "Women", "Baby $ Kids"],
    },
  ];

  const filter_recomends = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE:HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  const showFilterdItems = (ind) => {
    setFilterItems({ [ind]: !filterItems[ind] });
  };
  console.log(showFilters);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };
  return (
    <section className="products_with_filters_container">
      <hr />
      <div className="products_filter_container">
        <div className="d-flex h-3 align-center desktop_filter">
          <p>3245Items</p>
          <button className="show_filter ml3" onClick={() => toggleFilters()}>
            <Image
              src={showFilters ? "/arrow-right.png" : "/arrow-left.png"}
              height={10}
              width={10}
              alt="arrows"
            />
            {showFilters ? "HideFilters" : "ShowFilters"}
          </button>
        </div>
        <div onClick={() => toggleFilters()}>
          <p className="filter-title mobile_filter">Filters</p>
        </div>
        <p className="filter-title" onClick={()=>(setRecomendedFilters((prev)=>(!prev)))}>
          RECOMMENDED
          <Image
            src={showFilters ? "/arrow-up.png" : "/arrow-down.png"}
            height={10}
            width={10}
            className="ml1"
            alt="arrows"
          />
        </p>
      </div>
      
      <hr />
      <ul className={recomendedfilters && "recomend_filter_list"}>
        {recomendedfilters &&
          filter_recomends?.map((ele, ind) => (
            <li className={filterCheckMark === ind ? "d-flex justify-spacebetween":""} onClick={()=>(setFilterCheckMark(ind))}>
              {filterCheckMark === ind ? (
                <Image
                  src="/checkbox.png"
                  height={20}
                  width={20}
                  alt="checkbox"
                />
              ) : (
                ""
              )}
              {ele}
            </li>
          ))}
      </ul>

      <div className="products_container mt2">
        {showFilters && (
          <div className={showFilters ? "mobile_filters recomended_filters" : ""}>
            <input type="checkbox" />
            <label className="filter-title ml1">Custmizable</label>
            {filterDetails?.map((ele, ind) => {
              return (
                <>
                  <div
                    className="d-flex align-center justify-spacebetween filter_container"
                    onClick={() => showFilterdItems(ind)}
                  >
                    <div className="all_filters d-flex flex-column justify-center ">
                      <p className="filter-title">{ele?.title}</p>
                      <p className="all">All</p>
                    </div>
                    <Image
                      src={
                        filterItems?.[ind] ? "/arrow-up.png" : "/arrow-down.png"
                      }
                      height={10}
                      width={10}
                      alt="arrows"
                    />
                  </div>
                  {filterItems?.[ind] && (
                    <>
                      <p className="all">All Filters</p>
                      {ele?.subItems?.map((eachSubItem) => (
                        <>
                          <div key={eachSubItem} style={{ margin: "0.4rem 0" }}>
                            <input type="checkbox" id={eachSubItem} />
                            <label htmlFor={eachSubItem} className="ml1">
                              {eachSubItem}
                            </label>
                          </div>
                        </>
                      ))}
                    </>
                  )}
                  <hr />
                </>
              );
            })}
          </div>
        )}
        <AllProducts showFilters={showFilters} />
      </div>
    </section>
  );
};

export default Products;
