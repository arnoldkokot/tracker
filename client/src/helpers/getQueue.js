import queue from "../assets/queue.json";

export default function getQueue(id) {
  return queue.find((obj) => obj.queueId === id)?.description;
}
