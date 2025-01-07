# ToDo Application

This is a **simple and responsive ToDo application** built with React.js and Bootstrap. It allows users to manage tasks with features like adding, editing, deleting, and marking tasks as completed. 

---

## Features
- Add tasks with a title and description.
- Edit or delete existing tasks.
- Mark tasks as completed or incomplete.
- Filter tasks into "To Do" and "Completed" tabs.
- Responsive design using Bootstrap.
- User-friendly alerts for actions and validation using SweetAlert2.

---

## Technologies Used
- **Frontend**: React.js
- **Styling**: Bootstrap
- **Alerts**: SweetAlert2

---

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-application.git
   ```
2. Navigate to the frontend folder:
   ```bash
   cd ToDo_Application/frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to:  
   `http://localhost:3000`

---

## How to Deploy to GitHub Pages
1. Install the GitHub Pages package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add the following to your `package.json` file:
   ```json
   "homepage": "https://yourusername.github.io/todo-application",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy the app:
   ```bash
   npm run deploy
   ```

---
