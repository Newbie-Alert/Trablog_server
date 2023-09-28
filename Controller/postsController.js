import * as postRepository from '../Data/postData.js';


export async function getAll(req, res) {
  const data = await postRepository.getAll();
  if (!data) {
    return res.send(404).json({ msg: "sorry no data" }.msg);
  }
  return res.status(200).json(data);
}

export async function getByName(req, res) {
  const param = req.params.name;

  const data = await postRepository.getByName(param);
  if (!data) {
    return res.send(404).json({ msg: "sorry no data" }.msg);
  }
  return res.status(200).json(data);
}

export async function getPopular(req, res) {
  const data = await postRepository.getPopular();
  if (!data) {
    return res.send(404).json({ msg: "sorry no data" }.msg);
  }
  res.status(200).json(data);
}