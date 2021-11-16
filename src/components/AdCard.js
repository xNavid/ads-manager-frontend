import React from "react";
import { Link } from "react-router-dom";
import { dateFormat } from "../utils/dates";
const AdCard = (props) => {
  const { _id, title, link, valid_until } = props.ad;
  return (
    <div className="card my-4 p-4 shadow-sm border-0">
      <div className="card-body d-flex justify-content-between">
        <div className="content d-flex flex-column justify-content-center">
          <Link
            to={{
              pathname: `/ad/${_id}`,
              state: { ad: props.ad },
            }}
            style={{ textDecoration: "none" }}
          >
            <div>Ad Title: {title}</div>
            <div>Ad Link: {link}</div>
            <div>Ad Valid Until: {dateFormat(valid_until)}</div>
          </Link>
        </div>

        <div className="action-buttons d-flex flex-column ">
          <Link
            className="btn btn-primary my-2"
            to={{ pathname: `/edit`, state: { ad: props.ad } }}
          >
            Edit
          </Link>
          <button
            className="btn btn-danger my-2"
            onClick={() => props.clickHander(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
