import menuItems from "../../assets/menuItems"

export default function handler(req, res) {
    res.status(200).json(menuItems);
  }
  