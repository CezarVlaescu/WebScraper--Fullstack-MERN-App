const positiveWords = ["good", "happy", "great", "joyful", "successful", "positive", "enjoy", "delight", "love", "like"];
const negativeWords = ["bad", "sad", "angry", "frustrated", "negative", "hate", "dislike", "terrible", "difficult", "hard"];


function analyzeSentiment(text) {
    const words = text.toLowerCase().replace(/[.,!?]/g, '').split(/\s+/);
    
    let positiveSentimentsCount = 0;
    let negativeSentimentsCount = 0;

    words.forEach(word => {
        if (positiveWords.includes(word)) positiveSentimentsCount++;
        else if (negativeWords.includes(word)) negativeSentimentsCount++;
    })
    
    if (positiveSentimentsCount>negativeSentimentsCount) return 'positive';
    else if (positiveSentimentsCount<negativeSentimentsCount) return 'negative';
    else return 'neutral';
}

module.exports = analyzeSentiment;