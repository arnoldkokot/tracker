// Count reoccuring players in matches
function countRecent(matches) {
  return matches
    .map((match) => match.info.participants)
    .flat()
    .map((player) => player.summonerName)
    .reduce((counted, current) => {
      const found = counted.find((e) => e.name === current);
      if (found) found.count++;
      return found ? [...counted] : [...counted, { name: current, count: 1 }];
    }, [])
    .filter((e) => e.count > 1);
}

// Count given puuid win ratio in matches
function countRatio(matches, puuid) {
  const array = matches.map(
    (match) =>
      match.info.participants.find((participant) => participant.puuid === puuid)
        ?.win
  );

  const wins = array.reduce((sum, value) => (value ? sum + 1 : sum), 0);

  return wins / array.length;
}

// Count given puuid total KDA in matches
function countKda(matches, puuid) {
  const array = matches.map((match) =>
    match.info.participants.find((participant) => participant.puuid === puuid)
  );

  return array.reduce(
    (counter, current) => ({
      kills: (counter.kills || 0) + current.kills,
      assists: (counter.assists || 0) + current.assists,
      deaths: (counter.deaths || 0) + current.deaths,
    }),
    {}
  );
}

export { countRecent, countRatio, countKda };
