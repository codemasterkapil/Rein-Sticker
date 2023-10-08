import spacy
from sklearn.feature_extraction.text import TfidfVectorizer
nlp = spacy.load("en_core_web_sm")
user_message = "relatives"


def preprocess_text(text):
    doc = nlp(text)

    tokens = [token.lemma_ for token in doc if not token.is_stop and not token.is_punct]

    cleaned_text = " ".join(tokens)

    return cleaned_text

cleaned_message = preprocess_text(user_message)
print(cleaned_message)

user_messages = [cleaned_message]

vectorizer = TfidfVectorizer()

tfidf_matrix = vectorizer.fit_transform(user_messages)

feature_names = vectorizer.get_feature_names_out()

sorted_keywords = [feature_names[i] for i in tfidf_matrix.sum(axis=0).argsort()[0, ::-1][:5]]

print("Keywords:", sorted_keywords)