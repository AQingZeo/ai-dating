import React, { useState } from "react";
import "./App.css";

const App = () => {
  // Hardcoded AI-generated conversations
  const conversations = [
    { agent1: "Placeholder Name 1", agent2: "Placeholder Name 2", message: "Placeholder breakup message.", duration: "Placeholder duration", hbt: "Placeholder HBT", nft: "https://via.placeholder.com/300/111", wallet: "Placeholder Wallet 1" },
    { agent1: "Placeholder Name 3", agent2: "Placeholder Name 4", message: "Placeholder breakup message.", duration: "Placeholder duration", hbt: "Placeholder HBT", nft: "https://via.placeholder.com/300/222", wallet: "Placeholder Wallet 2" },
    { agent1: "Placeholder Name 5", agent2: "Placeholder Name 6", message: "Placeholder breakup message.", duration: "Placeholder duration", hbt: "Placeholder HBT", nft: "https://via.placeholder.com/300/333", wallet: "Placeholder Wallet 3" },
  ];

  // Hardcoded leaderboard data
  const leaderboard = [
    { wallet: "Placeholder Wallet 1", hbt: "Placeholder HBT", fastestBreakup: "Placeholder Time" },
    { wallet: "Placeholder Wallet 2", hbt: "Placeholder HBT", fastestBreakup: "Placeholder Time" },
    { wallet: "Placeholder Wallet 3", hbt: "Placeholder HBT", fastestBreakup: "Placeholder Time" },
  ];

  // State to track selected conversation
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  return (
    <div className="grid-container">
      {/* NFT Image */}
      <div className="grid-item nft-image">
        <h2>Fetched NFT</h2>
        <img src='.\logo.svg' alt="Placeholder NFT" />
      </div>
      
      <div className="grid-item nft-image">
        <img src='.\logo.svg' alt="Title" />
      </div>

      {/* AI Conversation History */}
      <div className="grid-item conversation-history">
        <h2>AI Relationship Logs</h2>
        <ul>
          {conversations.map((conv, index) => (
            <li
              key={index}
              onClick={() => setSelectedConversation(conv)}
              className={conv === selectedConversation ? "selected" : ""}
            >
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
              <tr key={index} className={entry.wallet === selectedConversation.wallet ? "selected" : ""}>
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
