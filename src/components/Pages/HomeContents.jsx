/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeCards from "./HomeCards";

export const DestinationData = createContext();

const HomeContents = () => {
  const [loading, setLoading] = useState(true);
  const [singleDest, setSingleDest] = useState(null);

  const [data, setData] = useState(null);
  useEffect(() => {
    setData(singleDest);
  }, [singleDest, loading]);

  const info = {
    setSingleDest,
    setLoading,
    loading,
  };

  // console.log(singleDest)
  return (
    <div>
      <div className="mt-32 grid grid-cols-2 gap-3">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h1 className="text-8xl font-semibold">{data?.title}</h1>
            <p className="my-6">
              {data?.description.length > 250 ? (
                <>
                  {data?.description.slice(0, 250)}
                  <Link title="Learn more" to={`/booking/${data.id}`}>....</Link>
                </>
              ) : (
                data?.description
              )}
            </p>
            {data &&
            <Link to={`/booking/${data.id}`}>
              <button className="btn bg-my-primary border-none">Booking</button>
            </Link>
            }
          </div>
        )}
        <div>
          <DestinationData.Provider value={info}>
            <HomeCards></HomeCards>
          </DestinationData.Provider>
        </div>
      </div>
    </div>
  );
};

export default HomeContents;
