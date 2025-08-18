import {
  Briefcase,
  Crown,
  LayoutDashboard,
  LucideIcon,
  MessageSquare,
  PlusSquare,
  Search,
  ShieldAlert,
  User,
  Wallet
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Buyer Dashboard",
    items: [
      {
        title: "Default",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        title: "Post a Job",
        url: "/dashboard/post-a-job",
        icon: PlusSquare,
      },
      {
        title: "Jobs",
        url: "/dashboard/jobs",
        icon: Briefcase,
      },
      {
        title: "Wallet",
        url: "/dashboard/analytics", // URL aap baad me badal sakte hain
        icon: Wallet, // Wallet ke liye seedha icon
      },
      {
        title: "Subscription",
        url: "/dashboard/e-commerce", // URL aap baad me badal sakte hain
        icon: Crown, // Subscription ya premium feature ke liye
      },
      {
        title: "Disputes",
        url: "/dashboard/academy", // URL aap baad me badal sakte hain
        icon: ShieldAlert, // Dispute ya problem ke liye
      },
      {
        title: "Messages",
        url: "/dashboard/buyer-chat", // URL aap baad me badal sakte hain
        icon: MessageSquare, // Messages ke liye
      },
      {
        title: "Profile",
        url: "/dashboard/profile", // Maine URL aasan kar diya
        icon: User, // User profile ke liye
      },
    ],
  },
  {
    id: 2,
    label: "Reviewer Dashboard",
    items: [
      {
        title: "Default",
        url: "/dashboard/default",
        icon: LayoutDashboard, // Dashboard ke liye bilkul sahi hai
      },
      {
        title: "Find Jobs",
        url: "/dashboard/find-jobs",
        icon: Search, // Naya job post karne ke liye
      },
      {
        title: "Jobs",
        url: "/dashboard/finance", // URL aap baad me badal sakte hain
        icon: Briefcase, // Job listings ke liye
      },
      {
        title: "Wallet",
        url: "/dashboard/analytics", // URL aap baad me badal sakte hain
        icon: Wallet, // Wallet ke liye seedha icon
      },
      {
        title: "Subscription",
        url: "/dashboard/e-commerce", // URL aap baad me badal sakte hain
        icon: Crown, // Subscription ya premium feature ke liye
      },
      {
        title: "Disputes",
        url: "/dashboard/academy", // URL aap baad me badal sakte hain
        icon: ShieldAlert, // Dispute ya problem ke liye
      },
      {
        title: "Messages",
        url: "/dashboard/buyer-chat", // URL aap baad me badal sakte hain
        icon: MessageSquare, // Messages ke liye
      },
      {
        title: "Profile",
        url: "/dashboard/profile", // Maine URL aasan kar diya
        icon: User, // User profile ke liye
      },
    ],
  },
];