import React, { Component } from "react";
import "./Popularity.scss";
import BarGraph from "../bargraph/BarGraph";
import popularityData from "../../data/popularityData";
import { Link } from "react-router-dom";

export class Datamodule extends Component {
  render() {
    return (
      <div className="datamodule-wrapper">
        <div className="datamodule-graph">
          <div className="graph">
            <BarGraph data={popularityData} height={300} width={50} />
          </div>
        </div>
        <div className="datamodule-explanation">
          <div className="datamodule-explanation__text">
            <h3 className="datamodule-explanation__text--heading">
              Total Reads
            </h3>
            <p className="datamodule-explanation__text--paragraph">
            A global, multi-platform media and entertainment company
            </p>
          </div>
          <div className="datamodule-explanation__buttons">
            <Link to="/popularity">
              <button className="popularity-button">Popularity</button>
            </Link>
            <Link to="/sentiment">
              <button className="sentiment-button">Sentiment</button>
            </Link>
            <Link to="/">
              <button className="datamodule-button">Datamodule</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Datamodule;
