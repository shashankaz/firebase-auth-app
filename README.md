# Firebase Auth App

This project is a web application using Vite as the frontend build tool and Firebase for backend services.

## Features

- Firebase Authentication (Login, Register, Google Sign-in)
- Firebase Firestore (Database)
- Environment Variables with Vite

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (recommended version)
- npm or yarn

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shashankaz/firebase-auth-app.git
cd firebase-auth-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Set Up Firebase

Create a Firebase project and set up Firebase Authentication and Firestore. Obtain your Firebase configuration values (API Key, Auth Domain, etc.).

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add your Firebase configuration variables:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

### 5. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Project Structure

- `src/` - Source code directory
  - `components/` - React components
  - `firebase.js` - Firebase configuration and initialization
  - `styles.css` - Global styles

## Available Scripts

In the project directory, you can run:

- `npm run dev` - Runs the app in development mode.
- `npm run build` - Builds the app for production.
