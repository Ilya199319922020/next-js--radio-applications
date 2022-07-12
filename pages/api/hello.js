import { stateInfo } from "../../assets/dataInfo/dataInfo";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(stateInfo)
  }
};
