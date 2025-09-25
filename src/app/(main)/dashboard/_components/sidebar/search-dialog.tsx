"use client";
import * as React from "react";
import { Search, LayoutDashboard, ChartBar, Gauge, ShoppingBag, GraduationCap, Forklift, PlusSquare, Briefcase, Banknote, Receipt, ShieldAlert, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useUser } from "../user-type-context";
import { useRouter } from "next/navigation";

export function SearchDialog() {
  const { userType } = useUser();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Buyer routes
  const buyerRoutes = [
    { label: "Home", url: "/dashboard/buyer", icon: LayoutDashboard },
    { label: "Post a Job", url: "/dashboard/buyer-post-a-job", icon: PlusSquare },
    { label: "Manage Jobs", url: "/dashboard/buyer-manage-a-job", icon: Briefcase },
    { label: "Wallet", url: "/dashboard/buyer-wallet", icon: Banknote },
    { label: "Billing", url: "/dashboard/buyer-billing", icon: Receipt },
    { label: "Disputes", url: "/dashboard/buyer-disputes", icon: ShieldAlert },
    { label: "Notification", url: "/dashboard/buyer-notification", icon: MessageSquare },
  ];

  // Reviewer routes
  const reviewerRoutes = [
    { label: "Home", url: "/dashboard/reviewer", icon: LayoutDashboard },
    { label: "Find Jobs", url: "/dashboard/reviewer-find-jobs", icon: Search },
    { label: "My Jobs", url: "/dashboard/reviewer-my-job", icon: Briefcase },
    { label: "Wallet", url: "/dashboard/reviewer-wallet", icon: Banknote },
    { label: "Billing", url: "/dashboard/reviewer-billing", icon: Receipt },
    { label: "Disputes", url: "/dashboard/reviewer-disputes", icon: ShieldAlert },
    { label: "Notification", url: "/dashboard/reviewer-notification", icon: MessageSquare },
  ];

  const routes = userType === "buyer" ? buyerRoutes : reviewerRoutes;

  return (
    <>
      <Button
        variant="link"
        className="text-muted-foreground cursor-pointer !px-0 font-normal hover:no-underline"
        onClick={() => setOpen(true)}
      >
        <Search className="size-4" />
        Search
        <kbd className="bg-muted hidden md:inline-flex h-5 items-center gap-1 rounded border px-1.5 text-[10px] font-medium select-none">
          <span className="text-xs">⌘</span>J
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search dashboards…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading={`${userType?.charAt(0).toUpperCase() + userType?.slice(1)} Dashboard`}>
            {routes.map((item) => (
              <CommandItem
                key={item.url}
                onSelect={() => {
                  router.push(item.url);
                  setOpen(false);
                }}
                className="!py-1.5 cursor-pointer"
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
