"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
  useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";

export type UserType = "buyer" | "reviewer";

interface UserTypeContextProps {
  userType: UserType;
  setUserType: (type: UserType) => void;
}

const UserTypeContext = createContext<UserTypeContextProps | undefined>(
  undefined
);

export function UserTypeProvider({ children }: { children: ReactNode }) {
  const [userType, setUserTypeState] = useState<UserType>("buyer");
  const router = useRouter();
  const pathname = usePathname();

  // Custom setter → localStorage + state
  const setUserType = (type: UserType) => {
    setUserTypeState(type);
    if (typeof window !== "undefined") {
      localStorage.setItem("userType", type);
    }
  };

  // Restore state from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedType = localStorage.getItem("userType") as UserType | null;
      if (storedType) {
        setUserTypeState(storedType);
      }
    }
  }, []);

  // Redirect only if on base route
  useEffect(() => {
    if (userType === "reviewer") {
      if (pathname === "/" || pathname.startsWith("/dashboard/buyer")) {
        router.push("/dashboard/default");
      }
    } else if (userType === "buyer") {
      if (pathname === "/" || pathname === "/dashboard") {
        router.push("/dashboard/buyer");
      }
    }
  }, [userType, pathname, router]);

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
