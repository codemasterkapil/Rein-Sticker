import natural from 'natural';

export const getAllKeyWords = (userMessage) => {
  const tokenizer = new natural.WordTokenizer();
  const stopwords = new Set(natural.stopwords);

  // Tokenize and clean the user's message
  const preprocessText = (text) => {
    const tokens = tokenizer.tokenize(text);

    // Lemmatize tokens and remove stopwords and punctuation
    const cleanedTokens = tokens
      .map((token) => token.toLowerCase())
      .filter((token) => !stopwords.has(token) && /^[a-zA-Z]+$/.test(token));

    // Join the cleaned tokens back into a clean text
    const cleanedText = cleanedTokens.join(' ');

    return cleanedText;
  }

  const cleanedMessage = preprocessText(userMessage);

  // Sample user messages (you can extend this with actual user messages)
  const userMessages = [cleanedMessage];

  // Create a TF-IDF vectorizer
  const TfIdf = natural.TfIdf;
  const tfidf = new TfIdf();

  // Fit and transform the user messages
  userMessages.forEach((message) => {
    const tokens = message.split(' ');
    tfidf.addDocument(tokens);
  });

  // Get the feature names (words or phrases)
  const sortedKeywords = [];
  tfidf.listTerms(0 /* document index */).forEach((item) => {
    sortedKeywords.push(item.term);
  });
  return sortedKeywords;
}