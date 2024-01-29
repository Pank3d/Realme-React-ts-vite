import React, { createContext, useContext } from 'react';
import { counter } from './store';

const MobXContext = createContext(counter);
interface MobXProviderProps {
  children: any;
}

export const MobXProvider: React.FC<MobXProviderProps> = ({ children }) => {
  return <MobXContext.Provider value={counter}>{children}</MobXContext.Provider>;
};

export const useMobXStore = () => {
  return useContext(MobXContext);
};
