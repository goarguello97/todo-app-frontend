import { createContext, useState, type ReactNode } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }: { children: ReactNode }) {
  const [flag, setFlag] = useState(false);

  return <UserContext.Provider value={flag}>{children}</UserContext.Provider>;
}
