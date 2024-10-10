# firstWebsite
This project is a simple web server built using Node.js and Express. It serves static files, logs access requests, and supports file uploads and downloads. The server logs each request to an access.log file and prints request details to the console. It uses Multer for handling file uploads, storing them in the shared directory while preserving the original filenames. The server listens on all network interfaces and dynamically determines the local IP address for wireless LAN connections.

Features:
*  /boldStatic File Serving: Serves static files from the public directory.
*  Request Logging: Logs all incoming requests to access.log and prints them to the console.
*  File Uploads: Supports file uploads via a POST request to /upload, storing files in the shared directory.
* File Downloads: Allows file downloads via a GET request to /download, serving files from the shared directory.
* Dynamic IP Address: Automatically determines and uses the local IPv4 address for wireless LAN connections.
