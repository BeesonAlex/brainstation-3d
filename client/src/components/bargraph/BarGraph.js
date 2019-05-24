import React from 'react';
import { Bar } from 'react-chartjs-2';

export default ({data, width, height}) => (
    <div className="chart">
        <Bar
            data={data}
            width={width}
            height={height}
            options={{
                maintainAspectRatio: false
            }}
        />
    </div>
);