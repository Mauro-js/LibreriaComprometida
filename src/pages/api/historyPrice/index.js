// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dbConnect } from "utils/mongoose";
import HistoryPrice from "../../../models/HistoryPrice";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const history = await HistoryPrice.find();
        return res.status(200).json(history);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    case "POST":
      try {
        const newHistoryPrice = new HistoryPrice(body);
        const savedHistory = await newHistoryPrice.save();
        return res.status(201).json(savedHistory);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}
