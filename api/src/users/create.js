import User from "../models/User";

export default async (req, res) => {
  let user = new User(req.body);

  try {
    await user.save();
    return res.status(201).json({ user });
  } catch (err) {
    return res.status(500).json({ err });
  }
};