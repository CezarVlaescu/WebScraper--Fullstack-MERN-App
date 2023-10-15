# WebScraper-React-NodeJS-MongoDB

A web scraping application built with React for the front end, Node.js for the backend, and MongoDB for data storage.

## Table of Contents

### 1. Introduction
### 2. Features
### 3. Installation
### 4. API Endpoints
### 5. Project Choices and Standout Features
### 6. Learning Experience

**************************************

# 1. Introduction

This project is designed to scrape HTML elements from the site [https://wsa-test.vercel.app/](https://wsa-test.vercel.app/) using a RESTful API built with NodeJS, then display the results as JSON in React UI Front-end and store the data in NoSQL database (MongoDB).

# 2. Features and upcoming features

Web Scraping Tools Used: Puppeteer (A Node library which provides a high-level API over the Chrome DevTools Protocol. Ideal for tasks like web scraping and automating web browser interactions), Regex (Used for pattern matching and parsing the scraped data).

React UI: A user-friendly interface built using React that allows users to display the scraped data, export the data as Excel and sort data by their sentiment.

Node.js Backend: A robust backend powered by Node.js that handles web scraping requests and communicates with MongoDB for data storage.

MongoDB Integration (to be implemented): Efficiently store and retrieve scraped data using MongoDB.

# 3. Installation

git clone [(https://github.com/CezarVlaescu/WebScraper-React-NodeJS-MongoDB.git)](https://github.com/CezarVlaescu/WebScraper-React-NodeJS-MongoDB.git)

cd Web-Scraper-React-NodeJS-MongoDB
npm install

npm start, node app.js

Note: The project doesn't have the node_module file, fix coming soon.

# 4. API Endpoints

GET	: /api/scrape	-> Initiates a scraping process and get the data

# 5. Project Choices and Standout Features

Web Scraping Tools:
* Initial Approach: Started with Axios and Cheerio for web scraping tasks.
* Puppeteer: Transitioned to Puppeteer due to its comprehensive capabilities, especially for dynamic content scraping and handling browser-based tasks more efficiently.

React UI:
* Structured Architecture: Adopted a methodical and architectural approach to organize folders and components.
* Styling: Leveraging Tailwind CSS for a sleek and modern design (implementation in progress).

Node.js Backend:
* Organized Architecture: Maintained a clean directory structure emphasizing modularity and readability.
* Development Concepts: Adopted best practices like the Model-View-Controller (MVC) design pattern, and made extensive use of middlewares, route handlers, utility functions, and more to ensure a robust backend.

# 6. Learning experience : Building this project was both challenging and enlightening, introducing me to new concepts. I take immense pride in the strides I made during its development. This is just the beginning, and I'm excited about the additional features that will be rolled out soon.

#Thanks and enjoy :). 

https://github.com/CezarVlaescu/WebScraper-React-NodeJS-MongoDB/assets/108024461/405c0c37-0e28-4fae-9933-7a7888e64a2b

