import { moreAboutMe } from "../../../app/src/util/portfolioData";

export { moreAboutMe };

export default function handler(req, res) {
  res.status(200).json(moreAboutMe);
}
