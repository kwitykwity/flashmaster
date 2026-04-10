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

## 🌐 Run it as a web app

If you want the app to open from a website instead of your own computer:

1. Run this command to make the website files:

```bash
npm run build
```

2. Upload the files from the `dist` folder to any web hosting service.

3. Open the website address the host gives you.

Many free hosts work, such as:

- Vercel
- Netlify
- GitHub Pages

The app is a normal web app, so no extra server is needed.

## 🧱 Run it as a standalone app

After building, the app can also run by itself from the `dist` folder.

1. Run:

```bash
npm run build
```

2. Open the file `dist/index.html` in your browser.

That will load the app directly from the built files without needing a server.
