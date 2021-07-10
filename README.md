# Backend endpoints
All API request start with ```/api/``` and are guaranteed to respond with JSON data.
* /api/summoner/:summonerName
  Responds with basic stats about player, uses up to 2 requests

* /api/match/:matchId
  Responds with basic data about match