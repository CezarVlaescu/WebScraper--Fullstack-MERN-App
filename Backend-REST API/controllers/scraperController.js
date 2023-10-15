// Route logic, handle the request and response for specific routes

const puppeteer = require('puppeteer');
const sentimentAnalyzer = require('../utils/sentimentAnalyzer');
const wordsCount = require('../utils/wordsCount');
const config = require('../config/default.json');
const ScrapingArticle = require('../models/model_db');

const URL = config.URL;

const scrapeWebsite = async (req, res, next) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(URL, {waitUntil: 'networkidle2'});

        const articles = await page.evaluate(() => {
            const divs = document.querySelectorAll('div');
            const results = [];

            divs.forEach(div => {
                if(div.children.length > 1 && div.children[0].tagName === 'A' && div.children[1].tagName === 'DIV') {
                    const combinedText = div.children[1].textContent.trim();

                    const href = div.children[0].href;

                    // TO DO : Use Regex Extractors, Connect to DB

                    //Date regex
                    const dateRegex = /^(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}/;
                    const dateMatch = combinedText.match(dateRegex);
                    const date = dateMatch ? dateMatch[0] : '';

                    //Description extraction
                    const descriptionRegex = /\d{4}[A-Za-z\s]+([A-Z].+?)(?=[A-Z][a-z])/;
                    const descriptionMatch = combinedText.match(descriptionRegex);
                    const description = descriptionMatch ? descriptionMatch[1].trim() : '';

                    //Title extraction
                    const titleRegex = /(?<=\d{4}[A-Za-z\s]+)[A-Z][a-z]+(?:\s[A-Za-z]+)+(?=[A-Z])/;
                    const titleMatch = combinedText.match(titleRegex);
                    const title = titleMatch ? titleMatch[0].trim() : '';

                    results.push({ date, title, description, href });
                }
            })
            return results;
        })

        for (const article of articles){
            await page.goto(article.href, {waitUntil: 'networkidle2'});
            const content = await page.evaluate(() => {
                const contentDiv = document.querySelector('body > div > div');
                return contentDiv ? contentDiv.textContent.trim() : '';
            });
            article.words = wordsCount(content);
            article.sentiment = sentimentAnalyzer(article.description);

            // const articleToSave = new ScrapingArticle(article);
            // await articleToSave.save();
        }

        await browser.close();

        res.json(articles);
    }
    catch(error){
        next(error);
    }
}

module.exports = {scrapeWebsite};