import React, { useState, useEffect } from "react";
import Web3 from "web3";

// Backend API (Replace with actual backend URL)
const BACKEND_API_URL = "https://your-backend.com/api/conversations";
const LEADERBOARD_API_URL = "https://your-backend.com/api/leaderboard";

// Web3 Provider (Replace with actual provider URL, e.g., Infura)
const WEB3_PROVIDER_URL = "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID";

// Smart Contract Info
const contractAddress = "YOUR_CONTRACT_ADDRESS";  // Replace with deployed contract address
const contractABI = [ /* Paste ABI from compiled contract */ ];

const App = () => {
  const [conversations, setConversations] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [hbtBalance, setHbtBalance] = useState(0);
  const [nftImage, setNftImage] = useState("");

  useEffect(() => {
    fetchConversations();
    fetchLeaderboard();
    fetchHbtBalance();
    fetchNftImage();
  }, []);

  // Fetch AI-generated conversations (pre-set by backend)
  const fetchConversations = async () => {
    try {
      const response = await fetch(BACKEND_API_URL);
      const data = await response.json();
      setConversations(data);
    } catch (error) {
      console.error("Error fetching conversations:", error);
    }
  };

  // Fetch leaderboard data from backend
  const fetchLeaderboard = async () => {
    try {
      const response = await fetch(LEADERBOARD_API_URL);
      const data = await response.json();
      setLeaderboard(data);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  // Connect to contract using Web3
  const fetchHbtBalance = async () => {
    try {
      if (!window.ethereum) {
        console.error("No Ethereum provider found");
        return;
      }
      const web3 = new Web3(Web3.givenProvider || WEB3_PROVIDER_URL);
      const accounts = await web3.eth.requestAccounts();
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      
      const balance = await contract.methods.getHbtBalance(accounts[0]).call();
      setHbtBalance(balance);
    } catch (error) {
      console.error("Error fetching HBT balance:", error);
    }
  };

  // Fetch NFT image (Replace with actual NFT fetch logic)
  const fetchNftImage = async () => {
    try {
      // Example: Fetch from OpenSea or other NFT API
      const response = await fetch("https://api.opensea.io/api/v1/asset/YOUR_CONTRACT_ADDRESS/TOKEN_ID");
      const data = await response.json();
      setNftImage(data.image_url || "https://via.placeholder.com/150");
    } catch (error) {
      console.error("Error fetching NFT image:", error);
    }
  };

  return (
    <div className="grid-container">
      {/* NFT Image - Top Left (2/5 height, 3/5 width) */}
      <div className="grid-item nft-image">
        <img src={nftImage} alt="NFT" />
      </div>

      {/* NFT Fetch Plugin - Top Right (2/5 height, 2/5 width) */}
      <div className="grid-item nft-fetch">
        <h2>🔗 Fetch Your NFT</h2>
        <button onClick={fetchNftImage}>Fetch NFT</button>
      </div>

      {/* AI Conversation History - Bottom Left (3/5 height, 3/5 width) */}
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

      {/* Leaderboard - Bottom Right (3/5 height, 2/5 width) */}
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
                <td>{entry.fastestBreakup} sec</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
