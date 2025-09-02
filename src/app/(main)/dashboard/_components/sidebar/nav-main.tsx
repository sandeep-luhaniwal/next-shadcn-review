"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Bell, ChevronDown, ChevronRight, MailIcon, PlusCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/components/ui/sidebar";
import { sidebarItems, type NavGroup, type NavMainItem } from "@/navigation/sidebar/sidebar-items";
import { useUser } from "../user-type-context";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface NavMainProps {
  readonly items: readonly NavGroup[];
}

const IsComingSoon = () => (
  <span className="ml-auto rounded-md bg-gray-200 px-2 py-1 text-xs dark:text-gray-800">Soon</span>
);

const NavItemExpanded = ({
  item,
  isActive,
  isSubmenuOpen,
}: {
  item: NavMainItem;
  isActive: (url: string, subItems?: NavMainItem["subItems"]) => boolean;
  isSubmenuOpen: (subItems?: NavMainItem["subItems"]) => boolean;
}) => {
  return (
    <Collapsible key={item.title} asChild defaultOpen={isSubmenuOpen(item.subItems)} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          {item.subItems ? (
            <SidebarMenuButton
              disabled={item.comingSoon}
              isActive={isActive(item.url, item.subItems)}
              tooltip={item.title}
            >
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              {item.comingSoon && <IsComingSoon />}
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          ) : (
            <SidebarMenuButton
              asChild
              aria-disabled={item.comingSoon}
              isActive={isActive(item.url)}
              tooltip={item.title}
            >
              <Link href={item.url} target={item.newTab ? "_blank" : undefined}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                {item.comingSoon && <IsComingSoon />}
              </Link>
            </SidebarMenuButton>
          )}
        </CollapsibleTrigger>
        {item.subItems && (
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.subItems.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton aria-disabled={subItem.comingSoon} isActive={isActive(subItem.url)} asChild>
                    <Link href={subItem.url} target={subItem.newTab ? "_blank" : undefined}>
                      {subItem.icon && <subItem.icon />}
                      <span>{subItem.title}</span>
                      {subItem.comingSoon && <IsComingSoon />}
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        )}
      </SidebarMenuItem>
    </Collapsible>
  );
};

const NavItemCollapsed = ({
  item,
  isActive,
}: {
  item: NavMainItem;
  isActive: (url: string, subItems?: NavMainItem["subItems"]) => boolean;
}) => {
  return (
    <SidebarMenuItem key={item.title}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            disabled={item.comingSoon}
            tooltip={item.title}
            isActive={isActive(item.url, item.subItems)}
          >
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            <ChevronRight />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-50 space-y-1" side="right" align="start">
          {item.subItems?.map((subItem) => (
            <DropdownMenuItem key={subItem.title} asChild>
              <SidebarMenuSubButton
                key={subItem.title}
                asChild
                className="focus-visible:ring-0"
                aria-disabled={subItem.comingSoon}
                isActive={isActive(subItem.url)}
              >
                <Link href={subItem.url} target={subItem.newTab ? "_blank" : undefined}>
                  {subItem.icon && <subItem.icon className="[&>svg]:text-sidebar-foreground" />}
                  <span>{subItem.title}</span>
                  {subItem.comingSoon && <IsComingSoon />}
                </Link>
              </SidebarMenuSubButton>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
};

export function NavMain({ items }: NavMainProps) {
  const path = usePathname();
  const { userType } = useUser();

  const filteredItems = sidebarItems.filter((group) =>
    userType === "buyer" ? group.id === 1 : group.id === 2
  );

  const isItemActive = (url: string, subItems?: { url: string }[]) => {
    if (subItems?.length) {
      return subItems.some((sub) => path.startsWith(sub.url));
    }
    return path === url;
  };

  return (
    <>
      {filteredItems.map((group) => (
        <SidebarGroup key={group.id}>
          {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {group.items.map((item) =>
                item.subItems ? (
                  <Collapsible key={item.title} defaultOpen={false}>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className="cursor-pointer"
                        tooltip={item.title}
                        isActive={isItemActive(item.url, item.subItems)}
                      >
                        {item.icon && (
                          <item.icon
                            className={cn(
                              "h-4 w-4",
                              isItemActive(item.url, item.subItems)
                                ? "stroke-orange"
                                : "stroke-current"
                            )}
                          />
                        )}
                        <span className="text-nowrap">{item.title}</span>
                        <ChevronDown className="ml-auto h-4 w-4" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent
                      className=" mt-1 overflow-hidden transition-all duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
                    >
                      <SidebarMenu>
                        {item.subItems.map((sub) => (
                          <SidebarMenuItem key={sub.title}>
                            <SidebarMenuButton asChild isActive={path === sub.url}>
                              <Link href={sub.url} className="flex items-center gap-2">
                                {sub.icon && (
                                  <sub.icon
                                    className={cn(
                                      "h-4 w-4",
                                      path === sub.url ? "stroke-orange" : "stroke-current"
                                    )}
                                  />
                                )}
                                <span>{sub.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </CollapsibleContent>

                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={isItemActive(item.url)}
                    >
                      <Link href={item.url} className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          {item.icon ? (
                            item.title === "Notification" ? (
                              <Bell
                                className={cn(
                                  "h-4 w-4",
                                  isItemActive(item.url) ? "stroke-orange" : "stroke-current"
                                )}
                              />
                            ) : (
                              <item.icon
                                className={cn(
                                  "h-4 w-4",
                                  isItemActive(item.url) ? "stroke-orange" : "stroke-current"
                                )}
                              />
                            )
                          ) : null}
                          <span className="text-nowrap">{item.title}</span>
                        </div>
                        {item.badge && <Badge className="rounded-full" variant="destructive">{item.badge}</Badge>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
}
// export function NavMain({ items }: NavMainProps) {
//   const path = usePathname();
//   const { userType } = useUser();

//   // Filter items based on userType
//   const filteredItems = sidebarItems.filter((group) =>
//     userType === "buyer" ? group.id === 1 : group.id === 2
//   );

//   const isItemActive = (url: string, subItems?: NavMainItem["subItems"]) => {
//     if (subItems?.length) {
//       return subItems.some((sub) => path.startsWith(sub.url));
//     }
//     return path === url;
//   };

//   const isSubmenuOpen = (subItems?: NavMainItem["subItems"]) =>
//     subItems?.some((sub) => path.startsWith(sub.url)) ?? false;

//   return (
//     <>
//       {filteredItems.map((group) => (
//         <SidebarGroup key={group.id}>
//           {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
//           <SidebarGroupContent className="flex flex-col gap-2">
//             <SidebarMenu>
//               {group.items.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton
//                     asChild
//                     tooltip={item.title}
//                     isActive={isItemActive(item.url)}
//                   >
//                     <Link href={item.url}>
//                       {item.icon && <item.icon />}
//                       <span>{item.title}</span>
//                     </Link>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       ))}
//     </>
//   );
// }
