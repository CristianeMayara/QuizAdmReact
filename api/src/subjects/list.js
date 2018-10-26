import Subject from "./../models/Subject";

export default async (req, res) => {
  let subjects = await Subject.find();
  return res.json({ subjects });
};
