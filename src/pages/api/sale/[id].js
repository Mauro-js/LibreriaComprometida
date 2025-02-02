import { dbConnect } from "utils/mongoose";
import Sale from "../../../models/Sale";

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
        const sale = await Sale.findById(id);
        if (!sale) return res.status(404).json({ msg: "Sale not found" });
        return res.status(200).json(sale);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const saleUpdated = await Sale.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!saleUpdated)
          return res.status(500).json({ msg: "Sale not found" });
        res.status(200).json(saleUpdated);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
      break;
    case "DELETE":
      try {
        const deleteSale = await Sale.findByIdAndDelete(id);
        if (!deleteSale) return res.status(404).json({ msg: "Sale not found" });
        return res.status(204).json(deleteSale);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "this method is not sopported" });
  }
}
