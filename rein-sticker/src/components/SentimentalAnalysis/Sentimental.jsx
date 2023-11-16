import {useContext,useEffect} from 'react'
import {AccountContext} from '../../context/AccountProvider'
import { Chart } from "react-google-charts";
import Sentiment from 'sentiment';
import './Sentimental.css';

const Sentimental = () => {

 const {account,smessages}=useContext(AccountContext);


const analyzeSentiment = (message) => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(message.text);
    return result.score; 
  };

  const sentimentScores = smessages.map((message) => analyzeSentiment(message));

  const positiveCount = sentimentScores.filter((score) => score > 0).length;
  const negativeCount = sentimentScores.filter((score) =>score< 0).length;
  const neutralCount = sentimentScores.filter((score) => score=== 0).length

  const chartData = [
    { value: positiveCount, color: 'green', key: 'Positive' },
    { value: negativeCount, color: 'red', key: 'Negative' },
    { value: neutralCount, color: 'gray', key: 'Neutral' },
  ];

  const options = {
    is3D: true,
  };

  const data = [
    ["Criteria", "Count"],
    ["Positive Score", positiveCount],
    ["negative Score", negativeCount],
    ["neutral Score", neutralCount]
  ];

  const data_bar = [
    ["Criteria", "Count", { role: "style" }],
    ["Positive Count", positiveCount, "green"],
    ["Negative Count", negativeCount, "#D82B07"],
    ["Neutral Count", neutralCount, "gold"]
  ];


  return (
    <div className='sentimental-container'>
       <h2 className='sentimental-container-p'>Hello {account.name} !!</h2>
       <p className='sentimental-container-heading'>Sentiment Analysis</p>
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    <Chart chartType="ColumnChart" width="100%" height="400px" data={data_bar} />
    </div>
  )
}

export default Sentimental
