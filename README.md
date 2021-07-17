# League tracker

League tracker provides insight to League of Legends players about thier game performance, match history, and ranked ladder. 

# TODO
- [x] Mobile version
- [x] Save matches in database to not trigger rate limiter
- [x] Display top champions
- [ ] "Load more matches" button
- [ ] Match summary at the top of history
- [ ] Click on match to display more details

# Backend endpoints

All API request start with ```/api/``` and are guaranteed to return JSON data.

* /api/summoner/:summonerName
  Responds with combined stats about player, costs 3-4 requests as name gets cashed for 3h

* /api/match/:matchId
  Responds with info and metadata about given match id, costs 0-1 riot requests