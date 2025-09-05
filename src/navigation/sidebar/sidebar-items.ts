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
        url: "/dashboard/manage-a-job",
        icon: Briefcase,
      },
      {
        title: "Wallet",
        url: "/dashboard/wallet",
        icon: Wallet,
        subItems: [

          {
            title: "Overview",
            url: "/dashboard/buyer-wallet",
            icon: Download,
          },
          {
            title: "Billing",
            url: "/dashboard/billing",
            icon: Receipt,
          },

        ],
      },
      {
        title: "Disputes",
        url: "/dashboard/buyer-disputes",
        icon: ShieldAlert,
      },
      {
        title: "Notification",
        url: "/dashboard/buyer-notification",
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
        url: "/dashboard/reviewer",
        icon: LayoutDashboard,
      },
      {
        title: "Find Jobs",
        url: "/dashboard/find-jobs",
        icon: Search,
      },
      {
        title: "My Jobs",
        url: "/dashboard/reviewer-my-job",
        icon: Briefcase,
      },
      {
        title: "Wallet",
        url: "/dashboard/wallet",
        icon: Wallet,
        subItems: [
          {
            title: "Overview",
            url: "/dashboard/buyer-wallet",
            icon: Download,
          },
          {
            title: "Billing",
            url: "/dashboard/reviewer-billing",
            icon: Receipt,
          },
        ],
      },
      {
        title: "Disputes",
        url: "/dashboard/reviewer-disputes",
        icon: ShieldAlert,
      },
      {
        title: "Notification",
        url: "/dashboard/reviewer-notification",
        icon: MessageSquare,
        badge: 5,
      },
    ],
  },
];
