import { dbConnect } from "utils/mongoose";
import Article from "../../../models/Article";

dbConnect();

export default async function (req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const article = await Article.findById(id);
        if (!article) return res.status(404).json({ msg: "Article not found" });
        return res.status(200).json(article);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    case "PUT":
      try {
        const articleUpdated = await Article.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!articleUpdated)
          return res.status(500).json({ msg: "Article not found" });
        res.status(200).json(articleUpdated);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
      break;
    case "DELETE":
      try {
        const deleteArticle = await Article.findByIdAndDelete(id);
        if (!deleteArtile)
          return res.status(404).json({ msg: "Article not found" });
        return res.status(204).json(deleteArticle);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "this method is not sopported" });
  }
}
