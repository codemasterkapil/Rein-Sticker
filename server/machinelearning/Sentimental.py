from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

# Create a sentiment analyzer object
analyzer = SentimentIntensityAnalyzer()

# User's message
user_message = "Amazing"

# Analyze sentiment using VADER
sentiment_scores = analyzer.polarity_scores(user_message)

# Extract individual sentiment scores
positive_score = sentiment_scores['pos']
negative_score = sentiment_scores['neg']
neutral_score = sentiment_scores['neu']
compound_score = sentiment_scores['compound']

# Determine the sentiment label based on the compound score
if compound_score >= 0.05:
    sentiment_label = "Positive"
elif compound_score <= -0.05:
    sentiment_label = "Negative"
else:
    sentiment_label = "Neutral"

# Print sentiment analysis results
print("User Message:", user_message)
print("Positive Score:", positive_score)
print("Negative Score:", negative_score)
print("Neutral Score:", neutral_score)
print("Compound Score:", compound_score)
print("Sentiment Label:", sentiment_label)
