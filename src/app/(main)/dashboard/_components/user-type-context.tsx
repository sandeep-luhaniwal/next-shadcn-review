"use client";

import React, { createContext, useState, useContext, ReactNode, useMemo } from "react";

export type UserType = "buyer" | "reviewer";

interface UserTypeContextProps {
  userType: UserType;
  setUserType: (type: UserType) => void;
}

const UserTypeContext = createContext<UserTypeContextProps | undefined>(
  undefined
);

export function UserTypeProvider({ children }: { children: ReactNode }) {
  const [userType, setUserType] = useState<UserType>("buyer");

  const value = useMemo(() => ({ userType, setUserType }), [userType]);

  return (
    <UserTypeContext.Provider value={value}>
      {children}
    </UserTypeContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserTypeContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserTypeProvider");
  }
  return context;
}
