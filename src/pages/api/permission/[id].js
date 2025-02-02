import { dbConnect } from "utils/mongoose";
import Permission from "../../../models/Permission";

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
        const permission = await Permission.findById(id);
        if (!permission) return res.status(404).json({ msg: "Permission not found" });
        return res.status(200).json(permission);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const permissionUpdated = await User.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!permissionUpdated)
          return res.status(500).json({ msg: "Permission not found" });
        res.status(200).json(permissionUpdated);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
      break;
    case "DELETE":
      try {
        const deletePermission = await User.findByIdAndDelete(id);
        if (!deletePermission) return res.status(404).json({ msg: "Permission not found" });
        return res.status(204).json(deletePermission);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "this method is not sopported" });
  }
}
