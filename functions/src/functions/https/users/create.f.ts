import * as functions from "firebase-functions";
import UserRepository from "../../../repositories/UserRepository";
import { CreateUser } from "../../../interactors/CreateUser";

export default functions.https.onRequest(async function (req, res) {
  const name = req.params.name || "A man has no name";
  const repository = new UserRepository();
  const interactor = new CreateUser(repository, name);
  const user = await interactor.execute();
  res.status(200).send(`Created user ${user.id}, with name ${user.name}`).end();
});
