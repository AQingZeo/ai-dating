import React, { useState, useEffect } from "react";

const App = () => {
  const [conversations, setConversations] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [hbtBalance, setHbtBalance] = useState(1000); // Mock balance
  const [nftImage, setNftImage] = useState("https://via.placeholder.com/150");

  useEffect(() => {
    mockFetchConversations();
    mockFetchLeaderboard();
  }, []);

  // Mock AI-generated conversations
  const mockFetchConversations = () => {
    setConversations([
      { agent1: "Alice", agent2: "Bob", message: "It's not you, it's me.", duration: "2 weeks", hbt: 50 },
      { agent1: "Eve", agent2: "Charlie", message: "Let's just be friends.", duration: "3 days", hbt: 20 },
    ]);
  };

  // Mock leaderboard data
  const mockFetchLeaderboard = () => {
    setLeaderboard([
      { wallet: "0x123...abc", hbt: 500, fastestBreakup: "10 sec" },
      { wallet: "0x456...def", hbt: 320, fastestBreakup: "15 sec" },
    ]);
  };

  // Mock NFT fetch
  const mockFetchNftImage = () => {
    setNftImage("https://via.placeholder.com/300");
  };

  return (
    <div className="grid-container">
      {/* NFT Image */}
      <div className="grid-item nft-image">
        <img src={nftImage} alt="Title" />
      </div>

      {/* NFT Fetch Plugin */}
      <div className="grid-item nft-image">
        <h2>The NFT </h2>
        <img src={nftImage} alt="NFT" />
      </div>

      {/* AI Conversation History */}
      <div className="grid-item conversation-history">
        <h2> AI Relationship Logs</h2>
        <ul>
          {conversations.map((conv, index) => (
            <li key={index}>
              <strong>{conv.agent1} & {conv.agent2}:</strong> "{conv.message}"
              <br /> ⏳ Duration: {conv.duration}
              <br /> 💔 HBT Earned: {conv.hbt}
            </li>
          ))}
        </ul>
      </div>

      {/* Leaderboard */}
      <div className="grid-item leaderboard">
        <h2>🏆 Top Heartbreakers</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>HBT</th>
              <th>Gas Fee</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={index}>
                <td>{entry.wallet}</td>
                <td>{entry.hbt}</td>
                <td>{entry.fastestBreakup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
