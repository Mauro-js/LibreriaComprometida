// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dbConnect } from "utils/mongoose";
import Group from "../../../models/Group";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const group = await Group.find();
        return res.status(200).json(group);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    case "POST":
      try {
        const newGroup = new Group(body);
        const savedGroup = await newGroup.save();
        return res.status(201).json(savedGroup);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}
