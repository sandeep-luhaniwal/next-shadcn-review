import {
  Briefcase,
  Crown,
  Download,
  LayoutDashboard,
  LucideIcon,
  MessageSquare,
  PlusSquare,
  Receipt,
  Search,
  ShieldAlert,
  Upload,
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
  badge?: number
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
        title: "Home",
        url: "/dashboard/buyer",
        icon: LayoutDashboard,
      },
      {
        title: "Post a Job",
        url: "/dashboard/post-a-job",
        icon: PlusSquare,
      },
      {
        title: "Manage Jobs",
        url: "/dashboard/jobs",
        icon: Briefcase,
      },
      {
        title: "Wallet",
        url: "/dashboard/wallet",
        icon: Wallet,
        subItems: [
          {
            title: "Transactions",
            url: "/dashboard/wallet/transactions",
            icon: Receipt,
          },
          {
            title: "Deposit",
            url: "/dashboard/wallet/deposit",
            icon: Download,
          },
          {
            title: "Withdraw",
            url: "/dashboard/wallet/withdraw",
            icon: Upload,
          },
        ],
      },
      {
        title: "Disputes",
        url: "/dashboard/academy",
        icon: ShieldAlert,
      },
      {
        title: "Notification",
        url: "/dashboard/buyer-chat",
        icon: MessageSquare,
        badge: 5,
      },
    ],
  },
  {
    id: 2,
    label: "Reviewer Dashboard",
    items: [
      {
        title: "Home",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        title: "Find Jobs",
        url: "/dashboard/find-jobs",
        icon: Search,
      },
      {
        title: "My Jobs",
        url: "/dashboard/finance",
        icon: Briefcase,
      },
      {
        title: "Wallet",
        url: "/dashboard/wallet",
        icon: Wallet,
        subItems: [
          {
            title: "Transactions",
            url: "/dashboard/wallet/transactions",
            icon: Receipt,
          },
          {
            title: "Deposit",
            url: "/dashboard/wallet/deposit",
            icon: Download,
          },
          {
            title: "Withdraw",
            url: "/dashboard/wallet/withdraw",
            icon: Upload,
          },
        ],
      },
      {
        title: "Disputes",
        url: "/dashboard/academy",
        icon: ShieldAlert,
      },
      {
        title: "Profile",
        url: "/dashboard/profile",
        icon: User,
      },
      {
        title: "Notification",
        url: "/dashboard/buyer-chat",
        icon: MessageSquare,
        badge: 5,
      },
    ],
  },
];
