import { useState } from 'react';

export const useLoginState = () => {
  const [login, setLogin] = useState<boolean>(false);

  const toggleLogin = () => {
    setLogin(!login);
  };

  return { login, toggleLogin };
};
