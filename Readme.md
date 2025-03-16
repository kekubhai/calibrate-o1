# Calibrate-O1: Real-Time Stock Data App <img src="logo.png" alt="Calibrate-O1 Logo" width="50"/>

> Experience the pulse of the market with real-time stock data at your fingertips. Calibrate-O1 delivers up-to-the-minute stock prices and OHLC candle data with a sleek, intuitive interface.

## ✨ Key Features

*   **Real-Time Data Streaming:** Witness stock prices fluctuate live with WebSocket-powered updates.
    <br> *Animation: Subtle upward/downward arrow animation next to price changes.*
*   **Interactive OHLC Charts:** Analyze market trends with dynamic Open, High, Low, Close (OHLC) candle charts.
    <br> *Animation: Smooth transitions between different time intervals (e.g., 1m, 5m, 1h).*
*   **Historical Data Exploration:** Delve into the past with comprehensive historical stock data.
    <br> *Animation: A loading spinner or progress bar during data fetching.*
*   **Personalized Watchlists:** Track your favorite stocks with a customizable watchlist.
    <br> *Animation: A subtle "added to watchlist" confirmation animation.*
*   **Responsive Design:** Seamless experience across all your devices.

## 🏛️ Architecture

Calibrate-O1 employs a robust client-server architecture for optimal performance and real-time data delivery:

*   **Backend (Go):** The engine room of Calibrate-O1.
    *   Connects to Finnhub's WebSocket API for real-time market feeds.
    *   Processes and structures raw data into OHLC candles.
    *   Persists historical data in a PostgreSQL database for reliable storage.
    *   Broadcasts real-time updates to connected clients via WebSockets.
    *   Offers HTTP endpoints for historical data retrieval.
*   **Frontend (React Native):** The user's window into the stock market.
    *   Establishes a WebSocket connection with the backend for live updates.
    *   Renders dynamic OHLC charts and real-time price displays.
    *   Fetches historical data via HTTP requests.

## 🚀 Getting Started

Stay tuned for detailed setup and usage instructions! We'll guide you through configuring the backend, setting up environment variables, and launching the React Native application. Get ready to calibrate your investments!Calibrate-O1: Real-Time Stock Data App

This project is a React Native application that provides real-time stock data. It consists of a backend built with Go and a mobile frontend built with React Native. The backend fetches data from Finnhub's WebSocket API, processes it, and broadcasts updates to connected clients via WebSockets. The mobile app displays this data in real-time.

## Key Features

*   **Real-time Stock Data:** Provides up-to-the-minute stock prices and OHLC (Open, High, Low, Close) candle data.
*   **WebSocket Communication:** Uses WebSockets for efficient, real-time data transfer between the backend and frontend.
*   **Historical Data:** Fetches and displays historical stock data.
*   **Configurable Symbols:** Supports a list of configurable stock symbols.
*   **Data Persistence:** Stores candle data in a PostgreSQL database.

## Architecture

The application follows a client-server architecture:

*   **Backend (Go):**
    *   Connects to the Finnhub WebSocket API to receive real-time stock data.
    *   Processes the incoming data to create and update OHLC candles.
    *   Stores historical candle data in a PostgreSQL database.
    *   Broadcasts real-time candle updates to connected clients via WebSockets.
    *   Provides HTTP endpoints for fetching historical data.
*   **Frontend (React Native):**
    *   Connects to the backend via WebSockets.
    *   Receives real-time candle updates and displays them to the user.
    *   Fetches historical data from the backend via HTTP requests.

## Getting Started

Instructions on how to set up and run the application will be provided in the subsequent documentation. This includes setting up the backend, configuring environment variables, and running the React Native application.