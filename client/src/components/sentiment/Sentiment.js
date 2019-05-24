import React, { Component } from 'react'
import './Sentiment.scss';
import BarGraph from '../bargraph/BarGraph';
import sentimentData from '../../data/sentimentData';

export class Datamodule extends Component {
    render() {
        return (
            <div className="datamodule-wrapper">
            <div className="datamodule-graph">
            <div className="graph"><BarGraph data={sentimentData} height={100} width={50} /></div>
            </div>
            <div className="datamodule-explanation">
            <div className="datamodule-explanation__text">
                <h3 className="datamodule-explanation__text--heading">Graph 1</h3>
                <p className="datamodule-explanation__text--paragraph">lorem ipsum jdfbvfdbgafjkgbaf;gjkbajsb</p>
            </div>
            <div className="datamodule-explanation__buttons">
            <button className="popularity-button">Popularity</button>
            <button className="sentiment-button">Sentiment</button>
            <button className="datamodule-button">Datamodule</button>
            </div>
            </div>
        </div>
        )
    }
}

export default Datamodule