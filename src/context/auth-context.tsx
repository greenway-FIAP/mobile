import { createContext, PropsWithChildren, useState } from "react";

export const AuthContext = createContext({
  userId: '',
  setUserId: (uid: string) => {}
});

export function AuthContextProvider({ children }: PropsWithChildren) {
  const [uid, setUid] = useState('');

  const value = {
    userId: uid,
    setUserId: setUid
  }

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}