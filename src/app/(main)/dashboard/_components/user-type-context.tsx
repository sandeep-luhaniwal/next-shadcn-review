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
  const [hydrated, setHydrated] = useState(false); // 👈 hydration check
  const router = useRouter();
  const pathname = usePathname();

  // Buyer routes
  const buyerRoutes = [
    "/dashboard/buyer",
    "/dashboard/post-a-job",
    "/dashboard/manage-a-job",
    "/dashboard/buyer-wallet",
    "/dashboard/billing",
    "/dashboard/buyer-disputes",
    "/dashboard/buyer-notification",
  ];

  // Reviewer routes
  const reviewerRoutes = [
    "/dashboard/reviewer",
    "/dashboard/find-jobs",
    "/dashboard/reviewer-disputes",
    "/dashboard/reivewer-wallet",
    "/dashboard/reivewer-billing",
  ];

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
      setHydrated(true); // 👈 now ready
    }
  }, []);

  // Handle redirect after hydration
  useEffect(() => {
    if (!hydrated || !pathname) return; // 👈 run only after hydration

    if (userType === "reviewer") {
      // agar buyer routes ya base "/" me ho tabhi redirect
      if (pathname === "/" || buyerRoutes.includes(pathname)) {
        router.replace("/dashboard/reviewer");
      }
      // ✅ agar reviewer ke routes me ho to rehne do
    } else if (userType === "buyer") {
      if (
        pathname === "/" ||
        pathname === "/dashboard" ||
        reviewerRoutes.includes(pathname)
      ) {
        router.replace("/dashboard/buyer");
      }
      // ✅ agar buyer ke routes me ho to rehne do
    }
  }, [userType, pathname, router, hydrated]);

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
