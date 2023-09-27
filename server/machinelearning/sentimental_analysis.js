import Sentiment  from 'sentiment';


export const getSentiment=(text)=>{
  
  const sentiment = new Sentiment();
  const result = sentiment.analyze(text);
  
  // Determine sentiment label

  if (result.score > 0) {
    return "positive";
  } else if (result.score < 0) {
    return "negative";
  } else {
    return "neutral";
  }
}
