import UserType from '../types/UserType';

const me = {
  type: UserType,
  resolve({ request }) {
    return request.user && {
      id: request.user.id,
      email: request.user.email,
      name: request.user.name,
      password: request.user.password,
    };
  },
};

export default me;
