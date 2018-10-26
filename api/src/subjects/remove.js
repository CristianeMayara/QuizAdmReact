import Subject from "./../models/Subject";

export default async (req, res) => {
  await Subject.findOneAndRemove(req.params.id);
  return res.status(204);
};
