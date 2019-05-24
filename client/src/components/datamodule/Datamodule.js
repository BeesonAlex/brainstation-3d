import React, { Component } from "react";
import "./Datamodule.scss";
import BarGraph from "../bargraph/BarGraph";
import datamoduleData from "../../data/datamoduleData";
import { Link } from "react-router-dom";

export class Datamodule extends Component {
  render() {
    return (
      <div className="datamodule-wrapper">
        <div className="datamodule-graph">
          <div className="graph">
            <BarGraph data={datamoduleData} height={300} width={50} />
          </div>
        </div>
        <div className="datamodule-explanation">
          <div className="datamodule-explanation__text">
            <h3 className="datamodule-explanation__text--heading">
              Total Shares
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
