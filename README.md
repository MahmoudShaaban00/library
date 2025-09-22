# 📚 Library – Online Book Store

**Library** is a full-stack web app built with **Next.js, TypeScript, Tailwind CSS, and Context API**.  
It allows users to browse and purchase books with authentication powered by a **JSON Server** backend.  

---

## 🌐 Live Demo
👉 [View Live Project](https://library-ashen-beta.vercel.app)

---

## 👤 Test User Account
You can use the following test account to log in:

- **Email:** ms3198@fayoum.edu.ed  
- **Password:** Google00  

---

## 🛠 Features
- 📖 Browse available books  
- 🔍 Search books by title or author  
- 🛒 Add books to cart and place orders  
- 👤 Login with user credentials  
- 💾 Data persistence with JSON Server  

---

## ⚙️ Tech Stack

### 💻 Frontend
- Next.js (with TypeScript)
- Tailwind CSS
- Context API (state management)

### 🗄 Backend
- JSON Server (mock database)

### ☁ Deployment
- Vercel (Frontend hosting)

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### ✅ Prerequisites
- [Node.js](https://nodejs.org) (v16 or later)  
- npm (comes with Node.js)  

---

### 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/library.git
   cd library

   ### Replace YOUR_GITHUB_USERNAME with your GitHub username.
   #### install dependencies
     npm i

   ### Run JSON Server:
   npx json-server --watch db.json --port 5000

   ###▶️Start the Frontend
   In a new terminal, run:
   npm run dev
