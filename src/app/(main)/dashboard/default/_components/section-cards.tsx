"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
      {/* Available Card */}
      <Card>
        <CardHeader>
          <CardDescription>Available</CardDescription>
          <CardTitle className="text-2xl lg:text-3xl tabular-nums">
            $120.50
          </CardTitle>
        </CardHeader>
      </Card>

      {/* In Progress Card */}
      <Card>
        <CardHeader>
          <CardDescription>In Progress</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            $450.00
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Total Earning Card with Dropdown */}
      <Card className="gap-1.5">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardDescription>Total Earning</CardDescription>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs">
                This Month
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>This Month</DropdownMenuItem>
              <DropdownMenuItem>Last Month</DropdownMenuItem>
              <DropdownMenuItem>This Year</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            $650.00
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
