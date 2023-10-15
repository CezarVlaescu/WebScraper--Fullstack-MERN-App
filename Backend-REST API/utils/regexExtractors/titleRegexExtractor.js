function titleExtractor(text) {
    const titleRegex = /(?<=\d{4}[A-Za-z\s]+)[A-Z][a-z]+(?:\s[A-Za-z]+)+(?=[A-Z])/;
    const titleMatch = text.match(titleRegex);
    return titleMatch ? titleMatch[0].trim() : '';
}

module.exports = {
    titleExtractor
}