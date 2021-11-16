import React from "react";
import { Link } from "react-router-dom";
import { dateFormat } from "../utils/dates";

const AdDetail = (props) => {
  const { title, link, valid_until } = props.location.state.ad;
  return (
    <div className="container p-0">
      <div className="card my-4 p-4 shadow-sm border-0">
        <div className="content">
          <div className="header">Ad Title: {title}</div>
          <div className="description">Ad Link: {link}</div>
          <div className="description">
            Ad Valid Until: {dateFormat(valid_until)}
          </div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="btn btn-secondary">Back to Ad List</button>
        </Link>
      </div>
    </div>
  );
};

export default AdDetail;
