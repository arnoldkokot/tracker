import summoner from "../assets/summoner.json";

export default function getSummoner(id) {
  return summoner[id]?.id;
}
