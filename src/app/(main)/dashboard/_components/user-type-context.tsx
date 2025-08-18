"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  useEffect(() => {
    if (userType === "reviewer") {
      router.push("/dashboard/default");
    } else {
      router.push("/dashboard/default");
    }
  }, [userType, router]);

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