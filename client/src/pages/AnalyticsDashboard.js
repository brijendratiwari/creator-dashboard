import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';

const data = {
  followers: [1200, 1250, 1280, 1295, 1330, 1360, 1400],
  engagement: [
    { post: 'Post 1', likes: 320, comments: 25 },
    { post: 'Post 2', likes: 400, comments: 40 },
    { post: 'Post 3', likes: 290, comments: 10 },
  ],
};

const AnalyticsDashboard = () => {
  const followerData = data.followers.map((val, i) => ({
    day: `Day ${i + 1}`,
    followers: val,
  }));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4"> Instagram Analytics</h2>

      <div className="mb-6">
        <h3 className="font-semibold">Follower Growth</h3>
        <LineChart width={400} height={200} data={followerData}>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="followers" stroke="#8884d8" />
        </LineChart>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold">Engagement (Like and Comments)</h3>
        <BarChart width={400} height={200} data={data.engagement}>
          <XAxis dataKey="post" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="likes" fill="#3AC9F9FF" />
          <Bar dataKey="comments" fill="#89F978FF" />
        </BarChart>
      </div>

      
    </div>
  );
};

export default AnalyticsDashboard;
