<br />
<p align="center">

  <h3 align="center">League tracker</h3>

  <p align="center">
    Get insight about your ranked performance
    <br />
    <a href="https://tracker.deithy.me/"><strong>View live »</strong></a>
    <br />
    <br />
    <a href="https://github.com/deithy/tracker/issues">Report bug</a>
    ·
    <a href="https://github.com/deithy/tracker/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#endpoints">Endpoints</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

[![Preview image](preview.png)](https://tracker.deithy.me)

League tracker provides insight to League of Legends players about thier game performance, match
history, and ranked ladder via Riot API.

### Features

- [x] Mobile version
- [x] Save matches in database to not trigger rate limiter
- [x] Display top champions
- [ ] Load more matches button
- [ ] Match summary at the top of history
- [ ] Click on match to display more details

### Built With

Major tools used are listed below, to see the full list go to acknowledgements.

- Backend
  - [Node](https://nodejs.org/en/)
  - [MongoDB](https://www.mongodb.com/)
- Frontend
  - [React](https://reactjs.org/)
  - [Redux toolkit](https://redux-toolkit.js.org/)

## Getting Started

If you would like to see how the project works you may want to install it on your machine.

To get a local copy up and running follow steps below.

### Prerequisites

Node and npm are required to install and run the project. Riot API key is essential to display
valuable content. MongoDB database is optional but recommended as it reduces Riot API requests by
storing them locally.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/deithy/tracker.git
   ```
2. Install backend NPM packages
   ```sh
   cd backend
   npm install
   ```
3. Create .env file
   ```sh
   touch .env
   nano .env
   ```
4. Paste your API key and mongoDB connection string
   ```sh
   API_KEY=*riot api key*
   PORT=5000
   DB_CONNECTION_STRING=*mongoDB connection string*
   ```
5. Run backend
   ```sh
   npm run dev
   ```
6. Install frontend NPM packages
   ```sh
   cd frontend
   npm install
   ```
7. Run project
   ```sh
   npm start
   ```

## Usage

### Endpoints

All API request start with `/api/` and are guaranteed to return JSON data.

- `/api/summoner/:summonerName`
  Responds with combined stats about player, costs 3-4 requests as name gets cashed for 3h

- `/api/match/:matchId`
  Responds with info and metadata about given match id, costs 0-1 riot requests

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Arnold Kokot - [@deithyy](https://twitter.com/deithyy) - ogkokot@gmail.com

Project Link: [https://github.com/deithy/tracker](https://github.com/deithy/tracker)

## Acknowledgements

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Create react app](https://create-react-app.dev/)
- [React](https://reactjs.org/)
- [Redux toolkit](https://redux-toolkit.js.org/)
