import { User } from '../data/models';

const register = (req) => {
  if (req.body.username && req.body.password && req.body.lastname && req.body.firstname && req.body.email) {
    if (req.body.password !== req.body.password2) {
      const err = 'Les mots de passes ne correspondent pas';
      return err;
    }
    User.create({
      name: req.body.username,
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      email: req.body.email,
      password: req.body.password },
      (err, user) => {
        if (err) {
          return err;
        }
        if (!user) {
          return err;
        }
        return 0;
      });
  }
  const err = 'Erreur';
  return err;
};

export default register;
