import { dbConnect } from "utils/mongoose";
import Group from "../../../models/Group";

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
        const gurup = await Group.findById(id);
        if (!gurup) return res.status(404).json({ msg: "Group not found" });
        return res.status(200).json(gurup);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const groupUpdated = await Group.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!groupUpdated)
          return res.status(500).json({ msg: "Group not found" });
        res.status(200).json(groupUpdated);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
      break;
    case "DELETE":
      try {
        const deleteGroup = await Group.findByIdAndDelete(id);
        if (!deleteGroup) return res.status(404).json({ msg: "Group not found" });
        return res.status(204).json(deleteGroup);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "this method is not sopported" });
  }
}
