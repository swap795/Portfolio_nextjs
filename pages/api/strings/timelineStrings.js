import { timeLineStrings } from "../../../app/src/util/strings";

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(timeLineStrings));
}
