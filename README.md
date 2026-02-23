# 📝 Todo App (React + MUI)

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple?logo=vite)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-Material%20UI-007FFF?logo=mui)](https://mui.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-black?logo=github)](https://pages.github.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A modern and responsive **Todo Application** built using **React** and **Material UI (MUI)**.  
This app allows users to manage daily tasks efficiently with a clean UI and dark mode support.

---

## 🌐 Live Demo

🔗 https://karansinh1818.github.io/Todo-App/

---

## 🚀 Features

- ➕ Add new tasks  
- ❌ Delete individual tasks  
- 🔠 Convert one task to uppercase  
- 🔠 Convert all tasks to uppercase  
- ✅ Mark single task as completed  
- ✅ Mark all tasks as completed  
- 🌙 Dark / Light mode toggle  
- 🎨 Smooth animations and hover effects  
- 📱 Responsive design  

---

## 🛠️ Tech Stack

- React (useState Hook)  
- Material UI (MUI)  
- UUID (Unique ID generator)
- HTML5
- CSS3  
- JavaScript (ES6+)  

---

# 📦 Installation & Setup

## 🔹 Step 1: Clone the Repository

```bash
git clone https://github.com/karansinh1818/Todo-App.git
cd Todo-App
```

---

## 🔹 Step 2: Install Dependencies

Make sure you have **Node.js (v16 or later)** installed.

```bash
npm install
```

---

## 🔹 Step 3: Run the Project Locally

```bash
npm run dev
```

Now open your browser and visit:

```
http://localhost:5173/
```

---

## 🔹 Step 4: Build for Production

```bash
npm run build
```

This will create a `dist` folder.

---

# 🚀 Deploy to GitHub Pages

## 🔹 Step 5: Install gh-pages

```bash
npm install gh-pages --save-dev
```

---

## 🔹 Step 6: Update `vite.config.js`

Open `vite.config.js` and add:

```js
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/Todo-App/",
})
```

⚠ Replace `"Todo-App"` with your repository name if different.

---

## 🔹 Step 7: Update `package.json` Scripts

Add these inside `"scripts"`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Final scripts example:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## 🔹 Step 8: Deploy the Project

```bash
npm run deploy
```

After deployment:

1. Go to your GitHub repository  
2. Open **Settings**  
3. Click **Pages**  
4. Select branch: `gh-pages`  
5. Click **Save**

---

# 🛠 Requirements

- Node.js (v16+)  
- npm  
- Git  
- GitHub Account  


## 🎯 How It Works

1. Enter a task in the input field.  
2. Click **Add** to add it to the list.  
3. Use the buttons to:
   - Delete a task  
   - Convert it to uppercase  
   - Mark it as completed  
4. Use bulk buttons to update all tasks at once.  
5. Toggle Dark Mode for theme switching.  

---

## 💡 Concepts Used

- React State Management (`useState`)  
- Conditional Rendering  
- Event Handling  
- Array Methods (`map`, `filter`)  
- Component-Based Architecture  
- Dynamic Styling  

---

## 🌟 Future Improvements

- Add LocalStorage support  
- Add Edit Task feature  
- Add Search functionality  
- Add Task categories  
- Add Due date feature  

---

## 👨‍💻 Author

Karansinh Mori  

---

## ⭐ Support

If you like this project, feel free to give it a star ⭐ on GitHub!
