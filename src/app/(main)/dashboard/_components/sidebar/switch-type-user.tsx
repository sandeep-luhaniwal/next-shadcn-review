"use client";

import { Briefcase, ChevronDown, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useUser } from "../user-type-context";

const roles = [
    {
        key: "buyer" as const,
        label: "Buyer Mode",
        icon: Briefcase,
    },
    {
        key: "reviewer" as const,
        label: "Reviewer Mode",
        icon: User,
    },
];

export function SwitchTypeUser() {
    const { userType, setUserType } = useUser();

    const selectedRole = roles.find((role) => role.key === userType);

    return (
        <div className="flex items-center gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="flex cursor-pointer max-sm:!p-1 items-center gap-1 lg:gap-2"
                    >
                        {selectedRole && (
                            <>
                                <selectedRole.icon className="h-4 w-4 hidden lg:flex" />
                                <span className="text-xs">{selectedRole.label.replace(" Mode", "")}</span>
                            </>
                        )}
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Select Mode</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {roles.map((role) => {
                        const isActive = userType === role.key;
                        return (
                            <DropdownMenuItem
                                key={role.key}
                                className="cursor-pointer flex items-center justify-between"
                                onClick={() => setUserType(role.key)}
                            >
                                <div
                                    className={cn(
                                        "flex items-center gap-2",
                                        isActive && "text-violet-600 font-semibold"
                                    )}
                                >
                                    <role.icon className="h-4 w-4" />
                                    <span>{role.label}</span>
                                </div>
                                {isActive && (
                                    <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-0.5 rounded-md">
                                        Active
                                    </span>
                                )}
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
