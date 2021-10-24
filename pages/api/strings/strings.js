// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { strings } from "../../../app/src/util/strings";

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(strings));
}
