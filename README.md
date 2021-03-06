<br />
<p align="center">

  <h3 align="center">League tracker</h3>

  <p align="center">
    Get insight about your ranked performance
    <br />
    <a href="https://tracker.arnoldkokot.com/"><strong>View website »</strong></a>
    <br />
    <br />
    <a href="https://github.com/arnoldkokot/tracker/issues">Report bug</a>
    ·
    <a href="https://github.com/arnoldkokot/tracker/issues">Request Feature</a>
  </p>
</p>

## About The Project

![Preview image](preview.png)

League tracker provides insight to League of Legends players about thier game performance, match
history, and ranked ladder via Riot API.

### Built With

Major tools used are listed below, to see the full list go to acknowledgements.

- Backend
  - [Node](https://nodejs.org/en/)
  - [MongoDB](https://www.mongodb.com/)
- Frontend
  - [React](https://reactjs.org/)
  - [Redux toolkit](https://redux-toolkit.js.org/)

## Getting Started

To get a local copy up and running follow steps below.

### Prerequisites

Node and npm are required to install and run the project. Riot API key is essential to display
valuable content. MongoDB database is optional but recommended as it reduces Riot API requests by
storing them locally.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/arnoldkokot/tracker.git
   ```
2. Install backend NPM packages
   ```sh
   cd api
   npm install
   ```
3. Fill variables in .env file
   ```sh
   mv .env.template .env
   nano .env
   ```
4. Example variables
   ```sh
   API_KEY=*riot api key*
   PORT=5000
   DB_CONNECTION_STRING=*mongoDB connection string*
   DB_COLLECTION_NAME=matches
   ALLOW_CORS=true
   ```
5. Run api
   ```sh
   npm run dev
   ```
6. Install frontend NPM packages
   ```sh
   cd client
   npm install
   ```
7. Run project
   ```sh
   npm build_public
   ```
8. Visit localhost:yourport

## Usage

### Endpoints

All API request start with `/api/` and are guaranteed to return JSON data.

- `/api/player/:playerName`
  Responds with combined stats about player, costs 3-4 requests as name gets cashed for 3h

- `/api/matchlist/:puuid?page=:number`
  Responds with a list of 5 game ids for a given puuid (start index is page number), costs 1 riot request

- `/api/match/:id`
  Responds with info and metadata about given match id, costs 0-1 riot requests, depends on whether match is already in the database.

- `/api/list/:playerName`
  Responds with data set combined from all previous requests (with page in matchlist set to 1) costs 2 - 7 riot request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Arnold Kokot - [@deithyy](https://twitter.com/deithyy) - ogkokot@gmail.com

## Acknowledgements

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Create react app](https://create-react-app.dev/)
- [React](https://reactjs.org/)
- [Primer.style](https://primer.style/)
- [Styled components](https://styled-components.com/)
