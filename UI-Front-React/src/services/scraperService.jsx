const API_URL = 'http://localhost:5000/scrape';

const scrapeWebsite = async () => {
    try {
        const response = await fetch(`${API_URL}?site=https://wsa-test.vercel.app`);
        if (!response.ok){
            throw new Error('Network reponse was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export default scrapeWebsite;