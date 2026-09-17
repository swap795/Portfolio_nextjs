import { timelineData } from "../../../app/src/util/portfolioData";

export { timelineData };

export default function handler(req, res) {
  res.status(200).json(timelineData);
}
