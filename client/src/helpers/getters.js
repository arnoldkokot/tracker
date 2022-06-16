import queue from "../assets/queue.json";
import summoner from "../assets/summoner.json";

function getSummoner(id) {
  return summoner[id]?.id;
}

function getQueue(id) {
  return queue.find((obj) => obj.queueId === id)?.description;
}

export { getQueue, getSummoner };
