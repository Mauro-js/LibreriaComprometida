import { dbConnect } from "utils/mongoose";
import HistoryPrice from "../../../models/HistoryPrice";

dbConnect();

export default async function handler(req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const history = await HistoryPrice.findById(id);
        if (!history) return res.status(404).json({ msg: "History not found" });
        return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const historyUpdated = await HistoryPrice.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!historyUpdated)
          return res.status(500).json({ msg: "History not found" });
        res.status(200).json(historyUpdated);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
      break;
    case "DELETE":
      try {
        const deleteHistory = await User.findByIdAndDelete(id);
        if (!deleteHistory) return res.status(404).json({ msg: "History not found" });
        return res.status(204).json(deleteHistory);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "this method is not sopported" });
  }
}
