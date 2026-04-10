# FlashMaster

FlashMaster is a simple flashcard and quiz app you can run on your own computer. It has a page where you can paste an API key, or skip that step and still use the flashcards and quizzes.

## ⭐ Easy Setup for New Users

### 1. Install Node.js

- Install Node.js if you do not already have it.
- Use the installer from: https://nodejs.org/

### 2. Open the project folder

- Open this folder in your computer's file browser.
- You should see files like `package.json`, `vite.config.js`, and a `src` folder.

### 3. Install the app files

- Open the folder in PowerShell or Command Prompt.
- Run this command:

```bash
npm install
```

### 4. Start the app

- After install finishes, run this command:

```bash
npm run dev
```

### 5. Open the app in your browser

- Open this address:

```text
http://localhost:5173
```

## ✅ What to do on the first page

- Paste your Anthropic API key in the box if you have one.
- Click the `Enter API key` button.
- If you do not want to use a key, click `Continue without API key`.
- Then use the `Flashcards` or `MCQ Test` tabs.

## 📌 Important notes

- The app does not save your API key.
- If you do not paste a key, the app still works.
- The key should start with `sk-ant-` if you use one.

## 📂 Files to know

- `src/App.jsx` — the main app screen and buttons.
- `src/data.js` — the flashcards and quiz questions.
- `src/engine.js` — the app logic that prepares the cards.
- `main.jsx` — the file that starts the app.

## 🧩 If something does not work

- Make sure Node.js is installed.
- Run `npm install` again.
- Run `npm run dev` again.
- Open `http://localhost:5173` in your browser.

## 🌐 Easy way — Use the web app (No setup needed for users)

The easiest way for users to use FlashMaster is to deploy it online. They just click a link.

### Deploy to Vercel (Free & Easiest)

1. Push this code to GitHub (if you haven't already).
2. Go to [vercel.com](https://vercel.com).
3. Sign in with GitHub.
4. Click **Add new project**.
5. Select the `flashmaster` repository.
6. Click **Deploy**.
7. Vercel gives you a live link.

**That's it.** Share the link with users. They click it and use the app. No setup, no git, no Node.js.

### Other options

- **Netlify** — Similar to Vercel, free and easy.
- **GitHub Pages** — Free, but requires a build step.

## 🧱 Local standalone app

After building, the app can also run by itself from the `dist` folder.

1. Run:

```bash
npm run build
```

2. Open the file `dist/index.html` in your browser.

That will load the app directly from the built files without needing a server.
