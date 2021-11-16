import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../api/ads";
import "./App.css";
import Header from "./Header";
import AddAd from "./AddAd";
import AdList from "./AdList";
import AdDetail from "./AdDetail";
import EditAd from "./EditAd";

function App() {
  const [ads, setAds] = useState([]);

  /**
   * Get all ads
   */
  const retrieveAds = async () => {
    const response = await api.get("/ads");
    return response.data;
  };

  /**
   * Create ads
   * @param {object} ad - ad object
   */
  const addAdHandler = async (ad) => {
    const request = {
      ...ad,
    };

    const response = await api.post("/ads", request);
    setAds([response.data, ...ads]);
  };

  /**
   * update ad
   * @param {object} ad - ad object
   */
  const updateAdHandler = async (ad) => {
    const request = { ...ad };
    delete request._id;
    const response = await api.put(`/ads/${ad._id}`, request);
    const { _id } = response.data;
    setAds(
      ads.map((ad) => {
        return ad._id === _id ? { ...response.data } : ad;
      })
    );
  };

  /**
   * remove the ad
   * @param {string} id - ad id
   */
  const removeAdHandler = async (_id) => {
    await api.delete(`/ads/${_id}`);
    const newAdsList = ads.filter((ad) => {
      return ad._id !== _id;
    });

    setAds(newAdsList);
  };

  useEffect(() => {
    const getAllAds = async () => {
      const allAds = await retrieveAds();
      if (allAds) setAds(allAds);
    };

    getAllAds();
  }, []);

  useEffect(() => {}, [ads]);

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <AdList {...props} ads={ads} getAdId={removeAdHandler} />
            )}
          />
          <Route
            path="/add"
            render={(props) => <AddAd {...props} addAdHandler={addAdHandler} />}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditAd {...props} updateAdHandler={updateAdHandler} />
            )}
          />

          <Route path="/ad/:id" component={AdDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
