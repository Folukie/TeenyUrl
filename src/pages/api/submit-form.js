// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

 export default async function handler(req, res) {
  const response = await axios.post("https://cleanuri.com/api/v1/shorten", {
    url: req.body.url,
  });
  res.status(200).json(response.data);
}
