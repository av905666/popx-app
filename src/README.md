# PopX App

A pixel-perfect React JS implementation of the PopX mobile app UI — built as a qualifying task for a React internship.

## 📱 Screens
1. **Landing** — Welcome screen with Create Account & Login CTAs
2. **Login** — Email + Password sign-in (button activates when both fields filled)
3. **Signup** — Full registration form with radio button for Agency
4. **Profile** — Account settings with editable avatar

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🗂 Project Structure

```
src/
├── App.js                  # Router setup
├── index.js                # Entry point
├── styles/
│   └── global.css          # Shared styles & form fields
├── components/
│   ├── PhoneShell.js       # Mobile frame wrapper
│   └── PhoneShell.css
└── pages/
    ├── Landing.js / .css
    ├── Login.js   / .css
    ├── Signup.js  / .css
    └── Profile.js / .css
```

## 🛠 Tech Stack
- React 18
- React Router DOM v6
- CSS Modules (per-page CSS files)
- Google Fonts — Nunito

## ✨ Features
- Mobile-first UI (390px) centered on desktop
- Smooth page transitions
- Login button activates only when fields are filled
- Form state passed via React Router `state`
- Profile photo upload (camera icon)
- Fully responsive — full-screen on mobile devices
