const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'botdata.json');

// Load config from JSON file
function loadDB() {
    try {
        if (fs.existsSync(DB_PATH)) {
            return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
        }
    } catch (e) {}
    return {};
}

// Save config to JSON file
function saveDB(data) {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error('ConfigDB save error:', e.message);
    }
}

module.exports = {
    getConfig: (key) => {
        const db = loadDB();
        return db[key] || null;
    },
    setConfig: (key, value) => {
        const db = loadDB();
        db[key] = value;
        saveDB(db);
    },
    getAllConfig: () => {
        return loadDB();
    }
};
