# Random Dog Generator

A React web app that fetches and displays **random dog images** from public APIs, demonstrating proper handling of **network states** like *idle*, *loading*, *success*, and *error*.

---

## Features

- Fetch random dog images on demand
- Handles network states: idle, loading, error, success
- Retry functionality for failed requests
- Simple, responsive React frontend

---

## Technologies Used

- React
- JavaScript (ES6+)
- Fetch API for network requests
- CSS

---

## Installation

1. Clone the repo:

```
git clone https://github.com/ThereaultL/RandomDogGenerator.git
cd RandomDogGenerator
```

2. Install dependencies:

```
npm install
```
4. Run the development server:

```
npm start
```

---

## Usage

1. Click “Click to Fetch Data” to retrieve a random image.

2. Observe UI state changes:

    * Idle: Waiting for user action

    * Loading: Request in progress

    * Success: Displays the fetched dog image

    * Error: Shows an error message with a retry button

3. Click “Click to Fetch Another” to load a new dog image.

---

## References

- [Dog CEO API](https://dog.ceo/dog-api/) – API for fetching random dog images
- [MDN – Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) – Documentation for using the Fetch API in JavaScript
