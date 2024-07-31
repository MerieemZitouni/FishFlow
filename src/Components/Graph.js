// src/Graph.js
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Page A', actual: 4000, reference: 2400, amt: 2400 },
  { name: 'Page B', actual: 3000, reference: 1398, amt: 2210 },
  { name: 'Page C', actual: 2000, reference: 9800, amt: 2290 },
  { name: 'Page D', actual: 2780, reference: 3908, amt: 2000 },
  { name: 'Page E', actual: 1890, reference: 4800, amt: 2181 },
  { name: 'Page F', actual: 2390, reference: 3800, amt: 2500 },
  { name: 'Page G', actual: 3490, reference: 4300, amt: 2100 },
];

const Graph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="reference" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
