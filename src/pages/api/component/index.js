// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dbConnect } from "utils/mongoose";
import Component from "../../../models/Component";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const component = await Component.find();
        return res.status(200).json(component);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    case "POST":
      try {
        const newComponent = new Component(body);
        const savedComponent = await newComponent.save();
        return res.status(201).json(savedComponent);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}
