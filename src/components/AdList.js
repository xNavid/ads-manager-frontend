import React from "react";
import { Link } from "react-router-dom";
import AdCard from "./AdCard";

const AdList = (props) => {
  const deleteAdHandler = (id) => {
    props.getAdId(id);
  };

  const renderAdList = props.ads.map((ad) => {
    return <AdCard ad={ad} clickHander={deleteAdHandler} key={ad._id} />;
  });
  return (
    <div className="main">
      <div className="main-header my-5 d-flex justify-content-between bg-light p-4">
        <h2 className="m-0">Ad List</h2>
        <Link to="/add">
          <button className="btn btn-primary rounded-pill px-5">
            Create Ad
          </button>
        </Link>
      </div>

      <div className="ad-list">{renderAdList}</div>
    </div>
  );
};

export default AdList;
