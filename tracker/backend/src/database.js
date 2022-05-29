import { MongoClient } from "mongodb";

class Mongo {
  constructor() {
    this.client = new MongoClient(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async connect() {
    await this.client.connect();
    this.collection = this.client.db("lol-tracker").collection("matches");
    console.log("MongoDB connected");
  }

  async getMatch(matchId) {
    return await this.collection.findOne({ "metadata.matchId": matchId });
  }

  saveMatch(match) {
    this.collection.insertOne(match);
  }
}

export default new Mongo();
