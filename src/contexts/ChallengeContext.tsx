import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});

interface ChallengeProviderprops {
  children: ReactNode;
}

export function ChallangesProvider({ children }: ChallengeProviderprops) {
  const [level, setLevel] = useState(1);

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallengesContext.Provider value={{ level, levelUp }}>
      {children}
    </ChallengesContext.Provider>
  )
}
