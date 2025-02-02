import { dbConnect } from "utils/mongoose";
import Component from "../../../models/Component";

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
        const component = await Component.findById(id);
        if (!component)
          return res.status(404).json({ msg: "Component not found" });
        return res.status(200).json(component);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const componentUpdated = await Component.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!componentUpdated)
          return res.status(500).json({ msg: "Component not found" });
        res.status(200).json(componentUpdated);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
      break;
    case "DELETE":
      try {
        const deleteComponent = await Component.findByIdAndDelete(id);
        if (!deleteComponent)
          return res.status(404).json({ msg: "Component not found" });
        return res.status(204).json(deleteComponent);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "this method is not sopported" });
  }
}
