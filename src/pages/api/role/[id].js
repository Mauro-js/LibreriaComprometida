import { dbConnect } from "utils/mongoose";
import Role from "../../../models/Role";

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
        const role = await Role.findById(id);
        if (!role) return res.status(404).json({ msg: "Role not found" });
        return res.status(200).json(role);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const roleUpdated = await Role.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!roleUpdated)
          return res.status(500).json({ msg: "Role not found" });
        res.status(200).json(roleUpdated);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
      break;
    case "DELETE":
      try {
        const deleteRole = await Role.findByIdAndDelete(id);
        if (!deleteRole) return res.status(404).json({ msg: "Role not found" });
        return res.status(204).json(deleteRole);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "this method is not sopported" });
  }
}
