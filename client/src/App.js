import React from 'react';
import ContentIdea from './pages/ContentIdea';
import AnalyticsDashboard from './pages/AnalyticsDashboard';

function App() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Creator Dashboard</h1>
      <ContentIdea />
      <hr className="my-8" />
      <AnalyticsDashboard />
    </div>
  );
}

export default App;
