function descriptionExtractor(text){
    const descriptionRegex = /\d{4}[A-Za-z\s]+([A-Z].+?)(?=[A-Z][a-z])/;
    const descriptionMatch = text.match(descriptionRegex);
    return descriptionMatch ? descriptionMatch[1].trim() : '';
}

module.exports = {
    descriptionExtractor
}