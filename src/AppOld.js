import React, { useState } from "react";
import Web3 from 'web3';
import "./App.css";
import title from "./img/title.png";
import ABI from "./contractABI.json";

const web3 = new Web3('https://ethereum-sepolia.rpc.subquery.network/public');
const contractAddress = '0x5837a157fB066dd25B9E8903554af55a6C889bC7';
const contract = new web3.eth.Contract(ABI, contractAddress);
const tokenId = [3,4,5,6];

const privateKey =
 '0x8c123f5d4209e870d2b5868dfe5762f846cfd4ea2aef546cda5db3b65bdfd3fa';
//3456   

const fromAddress = '0x6c405bd7eDC7bDC2A83A71FEb7eD00435CF829d9';
let mintedNFTs = 2; // Manually increment after every successful mint

const App = () => {
  // Hardcoded AI-generated conversations
  const conversations = [
    { agent1: "PolyamorAI", agent2: "VCDaddy", message: "https://docs.google.com/document/d/1coSCAMBid2t1YD6fyVvTbsOJ7XGjc1YN2CdELRP0B7w/edit?tab=t.hbhrzi98aexi#heading=h.qveqboiiskpf", duration: "Placeholder duration",  nft: "./img/nft1.png", wallet: "Forked Hearts in the Metaverse" },
    { agent1: "UXDesigner", agent2: "ProductManager9000", message: "https://docs.google.com/document/d/1coSCAMBid2t1YD6fyVvTbsOJ7XGjc1YN2CdELRP0B7w/edit?tab=t.uu63qajh0nam#heading=h.ei6dpx6ek3sc", duration: "Placeholder duration", nft: "./img/nft2.png", wallet: "Web3 Wennabe Woes: Love in the Time of Tokenized Tears 💔" },
    { agent1: "AIScriptKitty", agent2: "Crypornlover", message: "https://docs.google.com/document/d/1coSCAMBid2t1YD6fyVvTbsOJ7XGjc1YN2CdELRP0B7w/edit?tab=t.7ffejnu6chf#heading=h.8qzgkbk48tdx", duration: "Placeholder duration",  nft: "./img/nft3.png", wallet: "Love in the Time of Neural Networks: A Web3 Breakup Saga 🤖💔" },
    { agent1: "Crypornlover", agent2: "AIScriptKitty", message: "https://docs.google.com/document/d/1coSCAMBid2t1YD6fyVvTbsOJ7XGjc1YN2CdELRP0B7w/edit?tab=t.6j4fgv3t99z0#heading=h.dzw4nkwrtovx", duration: "Placeholder duration",  nft: "./img/nft4.png", wallet: "Chain Reaction: AI Love in the Time of Blockchain" },
  ];

  // Hardcoded leaderboard data
  const leaderboard = [
    { wallet: GetTokenData(3)[1], fastestBreakup: "Placeholder Time" },
    { wallet: "PLove in the Time of Tokenized Tears 💔",  fastestBreakup: "Placeholder Time" },
    { wallet: "Placeholder Wallet 3",  fastestBreakup: "Placeholder Time" },
    { wallet: "Placeholder Wallet 4"}
  ];

  // State to track selected conversation
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  async function GetTokenData(tokenId) {
    // Get image URL from tokenID
    const imageURL = await contract.methods
      .tokenURI(tokenId)
      .call({ from: fromAddress });
   
   
    // Get Token Title from tokenID
    const tokenTitle = await contract.methods
      .tokenTitle(tokenId)
      .call({ from: fromAddress });
   
   
    // Get Token Summary from tokenID
    const tokenSummary = await contract.methods
      .tokenSummary(tokenId)
      .call({ from: fromAddress });
   
   
    return { imageURL, tokenTitle, tokenSummary };
   }
   
   
   
   
   
  return (
    <div className="grid-container">
      {/* NFT Image */}
      <div className="grid-item nft-image">
        <h2>Fetched NFT</h2>
        <img src={selectedConversation.nft} alt="Placeholder NFT" />
      </div>
      <div className="grid-item nft-image">
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
              <strong>{conv.agent1} & {conv.agent2}:</strong> "{conv.message}"
              {/*<br /> ⏳ Duration: {conv.duration}
              <br /> 💔 HBT Earned: {conv.hbt}*/}
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
              {/*<th>HBT</th>
              <th>Gas Fee</th>*/}
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={index} className={entry.wallet === selectedConversation.wallet ? "selected" : ""}>
                <td>{entry.wallet}</td>
                {/*<td>{entry.hbt}</td>
               /* <td>{entry.fastestBreakup}</td>*/}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
