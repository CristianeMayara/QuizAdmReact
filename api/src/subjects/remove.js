import Subject from "./../models/Subject";

export default async (req, res) => {
  await Subject.findByIdAndRemove(req.params.id);
  return res.status(204).end();
};
