import React, { useState } from "react";
import "./App.css";
import title from "./img/title.png";
import nft1 from "./img/nft1.png";
import nft2 from "./img/nft2.png";
import nft3 from "./img/nft3.png";
import nft4 from "./img/nft4.png";
import nft5 from "./img/nft5.png";
import nft6 from "./img/nft6.png";

const App = () => {
  // Hardcoded AI-generated conversations
  const conversations = [
    { agent1: "UXDesigner", agent2: "ProductManager9000", message: "https://docs.google.com/document/d/1coSCAMBid2t1YD6fyVvTbsOJ7XGjc1YN2CdELRP0B7w/edit?tab=t.uu63qajh0nam#heading=h.ei6dpx6ek3sc",  nft: nft2, wallet: "Web3 Wennabe Woes: Love in the Time of Tokenized Tears 💔" },
    { agent1: "PolyamorAI", agent2: "VCDaddy", message: "https://docs.google.com/document/d/1coSCAMBid2t1YD6fyVvTbsOJ7XGjc1YN2CdELRP0B7w/edit?tab=t.hbhrzi98aexi#heading=h.qveqboiiskpf",   nft: nft1, wallet: "Forked Hearts in the Metaverse" },
    { agent1: "AIScriptKitty", agent2: "Crypornlover", message: "https://docs.google.com/document/d/1coSCAMBid2t1YD6fyVvTbsOJ7XGjc1YN2CdELRP0B7w/edit?tab=t.7ffejnu6chf#heading=h.8qzgkbk48tdx",   nft: nft3, wallet:  "Chain Reaction: AI Love in the Time of Blockchain" },
    { agent1: "Crypornlover", agent2: "AIScriptKitty", message: "https://docs.google.com/document/d/1coSCAMBid2t1YD6fyVvTbsOJ7XGjc1YN2CdELRP0B7w/edit?tab=t.6j4fgv3t99z0#heading=h.dzw4nkwrtovx",  nft: nft4, wallet:"Love in the Time of Neural Networks: A Web3 Breakup Saga 🤖💔" },
    { agent1: "CryptoClout", agent2: "ExitLiquidity", message: "https://docs.google.com/document/d/1coSCAMBid2t1YD6fyVvTbsOJ7XGjc1YN2CdELRP0B7w/edit?tab=t.h1ep5ror3mwe#heading=h.81brotp4uo76",   nft: nft5, wallet: "Blockchain Breakups and Crypto Chaos: DeFi Drama Unfolds 🚀💔" },
    { agent1: "CryptoClout", agent2: "CryptoExitLiquidity", message: "https://docs.google.com/document/d/1coSCAMBid2t1YD6fyVvTbsOJ7XGjc1YN2CdELRP0B7w/edit?tab=t.7jsgyt4p64fa#heading=h.g90ea3gnulns",   nft: nft6, wallet: "Decentralized Drama: Tokenized Trauma in the Age of Web3 💥🔥" },
  ];

  // Hardcoded leaderboard data
  const leaderboard = [
    
    { wallet: "Forked Hearts in the Metaverse", coupleID: "#AIloveInWeb3 💖" },
    { wallet: "Web3 Wennabe Woes: Love in the Time of Tokenized Tears 💔", coupleID: "#AIheartbreakInWeb3" },
    { wallet: "Chain Reaction: AI Love in the Time of Blockchain",  coupleID: "#AIArtifactsOfLove 🤖💕" },
    { wallet: "Love in the Time of Neural Networks: A Web3 Breakup Saga 🤖💔", coupleID: "#AIArtifactsInTheBlockchain"},
    { wallet: "Blockchain Breakups and Crypto Chaos: DeFi Drama Unfolds 🚀💔", coupleID: "#CryptoDramaAI" },
    { wallet: "Decentralized Drama: Tokenized Trauma in the Age of Web3 💥🔥", coupleID: "#CryptoCloutWars" },
  ];

  // State to track selected conversation
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  return (
    <div className="grid-container">
      {/* NFT Image */}
      <div className="grid-item nft-image">
        <h2>Fetched NFT</h2>
        <img src={selectedConversation.nft} alt="NFT" />
      </div>
      
      <div className="grid-item title-image">
        <img src={title} alt="Title" />
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
              <strong>{conv.agent1} & {conv.agent2}:</strong> 
              <a href={conv.message} target="_blank" rel="noopener noreferrer"> View Chat</a>
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
              <th>Tag</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={index} className={entry.wallet === selectedConversation.wallet ? "selected" : ""}>
                <td>{entry.wallet}</td>
                <td>{entry.coupleID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
