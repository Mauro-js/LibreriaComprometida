import { dbConnect } from "utils/mongoose";
import PagePreset from "../../../models/PagePreset";

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
        const preset = await PagePreset.findById(id);
        if (!preset) return res.status(404).json({ msg: "Preset not found" });
        return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const presetUpdated = await PagePreset.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!presetUpdated)
          return res.status(500).json({ msg: "Preset not found" });
        res.status(200).json(presetUpdated);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
      break;
    case "DELETE":
      try {
        const deletePreset = await PagePreset.findByIdAndDelete(id);
        if (!deletePreset) return res.status(404).json({ msg: "Preset not found" });
        return res.status(204).json(deletePreset);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "this method is not sopported" });
  }
}
