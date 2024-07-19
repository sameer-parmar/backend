Project Title: Data Extraction and Visualization Platform
Overview
This project demonstrates a complete data extraction and visualization platform. It involves:

Data Extraction: Extracting data from Excel files using Python with NumPy and Pandas.
Backend: Hosting a Node.js backend on Render for serving data and API endpoints.
Frontend: Deploying a Next.js frontend on Vercel to present the extracted data interactively.
Features
Data Extraction: Efficiently extract and process data from Excel files.
API Integration: Backend APIs serve data to the frontend.
Responsive UI: User-friendly interface to view and interact with the data.
Technologies Used
Python: Data extraction with NumPy and Pandas.
Node.js: Backend development and REST API creation.
Next.js: Frontend development with React.
Vercel: Frontend hosting.
Render: Backend hosting.


Setup and Installation
Backend Setup
Clone the Repository:


git clone <repository-url>


cd backend

Install Dependencies:

npm install
Run the Server Locally:


npm start
Frontend Setup
Navigate to the Frontend Directory:

cd frontend


Install Dependencies:


npm install


Run the Development Server:


npm run dev


Data Extraction Setup


Navigate to the Data Extraction Directory:


cd data_extraction

Install Python Dependencies:


pip install -r requirements.txt

Run the Data Extraction Script:


python extract_data.py

Deployment
Backend
The backend is deployed on Render. The API endpoint can be accessed at


: https://backend-5-2syu.onrender.com/api/globe-data

Frontend
The frontend is hosted on Vercel. You can view the live application at:


https://your-vercel-project-url.vercel.app

Usage
Data Extraction: Run the extract_data.py script to process Excel files and prepare data for the backend.
Backend API: The backend serves data through various endpoints, which the frontend consumes to display information.
Frontend: Interact with the application to view and analyze the data extracted from the Excel files.
Contributing
If you want to contribute to this project, please fork the repository and create a pull request with your changes. For detailed information on contributing, see the CONTRIBUTING.md file.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
NumPy
Pandas
Node.js
Next.js
Vercel
Render
