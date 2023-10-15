function dateExtractor(text) {
    const articleDate = /^(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}/;
    const dateMatch = text.match(articleDate);
    return dateMatch ? dateMatch[0] : '';
}

module.exports = {
    dateExtractor 
};