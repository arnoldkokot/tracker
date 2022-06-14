export default function countRecent(matches) {
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
