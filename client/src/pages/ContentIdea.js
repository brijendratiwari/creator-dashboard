import React, { useState } from 'react';
import axios from 'axios';

const ContentIdea = () => {
  const [topic, setTopic] = useState('');
  const [niche, setNiche] = useState('fitness');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const generateIdea = async () => {
    setLoading(true);
    setResult('');
    try {
      const { data } = await axios.post('http://localhost:5000/api/generate', {
        topic, niche,
      });
      setResult(data.data);
    } catch (err) {
      setResult('Error generating idea.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4"> Content Idea Generator</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Enter Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <select
        className="border p-2 w-full mb-4"
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
      >
        <option value="fashion">Fashion</option>
        <option value="fitness">Fitness</option>
        <option value="finance">Finance</option>
      </select>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={generateIdea}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>

      {result && (
        <div className="mt-4 p-4 border rounded bg-gray-50 whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  );
};

export default ContentIdea;
