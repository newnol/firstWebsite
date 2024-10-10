const express = require('express');
const path = require('path');
const os = require('os');
const multer = require('multer');
const fs = require('fs');
const app = express();
const morgan = require('morgan');

// Define the port
const PORT = process.env.PORT || 3000;

// Function to get the local IPv4 address of the wireless LAN
function getLocalIPAddress() {
    const interfaces = os.networkInterfaces();
    for (let iface in interfaces) {
        if (iface.includes('Wi-Fi') || iface.includes('Wireless')) {
            for (let alias of interfaces[iface]) {
                if (alias.family === 'IPv4' && !alias.internal) {
                    return alias.address;
                }
            }
        }
    }
    return 'localhost';
}

// Serve static files from the /public directory
app.use(express.static(path.join(__dirname, 'public')));

// Path to the access log file
const logFilePath = path.join(__dirname, 'access.log');

// Check if the access log file exists, create it if it doesn't
if (!fs.existsSync(logFilePath)) {
    fs.writeFileSync(logFilePath, '', { flag: 'w' });
}

// Create a write stream (in append mode) to log file
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

// Custom rule: Log each request
app.use((req, res, next) => {
    console.log(`Request from ${req.ip} for ${req.url}`);
    next();
});

// Custom rule: Log each request
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Set up multer for file uploads, keeping the original filename
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'shared/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
    
});

// Handle file downloads
app.get('/download', (req, res) => {
    const filename = req.query.filename;
    const filePath = path.join(__dirname, 'shared', filename);
    if (fs.existsSync(filePath)) {
        res.download(filePath);
    } else {
        res.status(404).send('File not found');
    }
});

// Start the server and listen on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://${getLocalIPAddress()}:${PORT}`);
});