"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserDropdownBtn = () => {
  return (
    <DropdownMenu>
      {/* Trigger wraps the custom button */}
      <DropdownMenuTrigger asChild>
        <button className="p-5 bg-yellow-500 text-black rounded-full focus:outline-none">
          {/* You can replace this with an icon later */}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>John</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>contact@gmail.com</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownBtn;
