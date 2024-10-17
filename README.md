# Simple Web Server using Node.js and Express

This project is a simple web server built using **Node.js** and **Express**. It serves static files, logs access requests, and supports file uploads and downloads. The server logs each request to an `access.log` file and prints request details to the console. It uses **Multer** for handling file uploads, storing them in the `shared` directory while preserving the original filenames. The server listens on all network interfaces and dynamically determines the local IP address for wireless LAN connections.

## Features:

- **Static File Serving**: Serves static files from the `public` directory.
- **Request Logging**: Logs all incoming requests to `access.log` and prints them to the console.
- **File Uploads**: Supports file uploads via a POST request to `/upload`, storing files in the `shared` directory.
- **File Downloads**: Allows file downloads via a GET request to `/download`, serving files from the `shared` directory.
- **Dynamic IP Address**: Automatically determines and uses the local IPv4 address for wireless LAN connections.

Sure! Here are the steps and tools you need to download and set up your project as a beginner:

## Prerequisites

1. **Node.js and npm**: Node.js is a JavaScript runtime, and npm is the Node.js package manager. Download and install them from [nodejs.org](https://nodejs.org/).

2. **Visual Studio Code**: A powerful code editor. Download and install it from [code.visualstudio.com](https://code.visualstudio.com/).

## Step-by-Step Setup

1. **Clone the Repository**

   - Open a terminal and navigate to the directory where you want to store your project.
   - Clone the repository (replace `<repository-url>` with your actual repository URL):
     ```sh
     git clone https://github.com/newnol/firstWebsite/
     cd firstWebsite
     ```

2. **Install Dependencies**

   - In the terminal, run the following command to install the project dependencies:
     ```sh
     npm install
     ```

3. **Run the Development Server**

   - Start the development server with the following command:
     ```sh
     npm run dev
     ```
   - Open your browser and navigate to `http://localhost:3000` to see your website in action.

4. **Run the Production Server**

   - Build the project for production:
     ```sh
     npm run build
     ```
   - Start the production server:
     ```sh
     npm start
     ```

5. **Access the Server**
   - Open your browser and navigate to `http://<local-ip-address>:3000` to access the server.

## Additional Tools

1. **Postman**: A tool for testing APIs. Download and install it from [postman.com](https://www.postman.com/).

2. **Git**: A version control system. Download and install it from [git-scm.com](https://git-scm.com/).

## Project Structure

Here's a brief overview of the project structure:

```
access.log
package.json
public/
	css/
		global.css
		styles.css
	file.html
	images/
	index.html
server.js
shared/
	Git-2.46.0-64-bit.exe
	test.txt
```

## Key Files

- **server.js**: The main server file.
- **public**: Contains static files like HTML, CSS, and images.
- **shared**: Directory for uploaded and downloadable files.
- **package.json**: Contains project metadata and dependencies.

## Useful Commands

- **Install Dependencies**: `npm install`
- **Run Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Start Production Server**: `npm start`

By following these steps, you should be able to set up and run your project successfully.
