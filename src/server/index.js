import fetch from "node-fetch";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const apiKey = process.env.API_KEY;
const apiUrl = "https://api.textrazor.com/";

app.use(express.static("website"));

app.get("/api", async function (req, res) {
  const website = req.query.url;
  const request = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "x-textrazor-key": apiKey,
    },
    body: `url=${website}&extractors=entities,sentiment`,
  });

  const response = await request.json();
  const hasEntities = response.response.entities;
  console.log(hasEntities);

  if (hasEntities) {
    const { confidenceScore, relevanceScore, entityId } = hasEntities[0];
    res.send({ confidenceScore, relevanceScore, entityId });
  } else {
    res.send({
      Result:
        "No analysis result available for this website, check another one",
    });
  }
});

const port = 1995;
app.listen(port, () => {
  console.log(`Analysis ongoing on ${port}`);
});
