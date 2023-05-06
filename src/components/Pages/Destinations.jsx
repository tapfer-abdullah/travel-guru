/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "./SharedPages/Header";
import { Link, useLoaderData, useLocation } from "react-router-dom";

const Destinations = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const d = useLoaderData();
  useEffect(() => {
    setLoading(true);
    setData(d);
    setLoading(false);
  }, []);

  console.log(data);

  return (
    <div className="px-3 md:px-32 h-full w-full">
      <Header></Header>
      {loading ? (
        <div>Loading............</div>
      ) : (
        <div>
          {data.map((singleData) => (
            <div
              key={singleData.id}
              className="border-solid	 border-2 border-my-primary rounded-lg my-5 p-5 grid grid-cols-2 gap-5"
            >
              
              <div>
                <div style={{ width: "600px", height: "400px" }}>
                  <img className="h-full w-full rounded-lg" src={singleData.img} alt="" />
                </div>
                <h3 className="my-4 text-4xl font-semibold">{singleData?.title}</h3>
                <p className="my-2 text-base">{singleData?.description}</p>
                <p className="my-2 text-base"><span className="font-semibold text-purple">Visit: </span>{singleData?.visit_each_year} persons every year</p>
                <p className="my-2 text-base"><span className="font-semibold text-purple">Price: </span>{singleData?.price}</p>
                <p className="my-2 text-base"><span className="font-semibold text-purple">Ratings: </span>{singleData?.ratings}</p>
                <Link to={`/booking/${singleData.id}`} >
                  <button className="btn btn-outline text-my-primary hover:text-white hover:bg-my-primary">Booking to visit {singleData.title}</button>
                </Link>
              </div>

              <div>
                map
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Destinations;
