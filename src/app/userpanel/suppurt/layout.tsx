"use client";

import { TypographyH3 } from "@/core/components/custom/ui/Typography";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/core/components/shadcn/ui/avatar";
import { Badge } from "@/core/components/shadcn/ui/badge";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type User = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastSeen: string;
  unreadCount: number;
  typing?: boolean;
};

const users: User[] = [
  {
    id: 1,
    name: "Ali Mohammadi",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "When will you deliver the project?",
    lastSeen: "now",
    unreadCount: 3,
  },
];

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedUser, setSelectedUser] = useState<User | null>(users[0]);

  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
    setMobileMenuOpen(false);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex bg-gray-50  overflow-hidden rounded-xl">
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-white "
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div
        className={`
          fixed lg:relative inset-y-0 left-0 z-40
          w-80 bg-white  border-l border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-4 border-b border-gray-200 ">
          <div className="flex items-center justify-between mb-4">
            <TypographyH3 className="text-xl font-bold">Chat</TypographyH3>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="جستجوی کاربران..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-200px)]">
          {filteredUsers.map((user) => (
            <Link
              key={user.id}
              href={`/userpanel/suppurt/${String(user.id)}`}
              onClick={() => handleSelectUser(user)}
              className={`
                flex items-center gap-3 p-4 cursor-pointer transition-colors
                hover:bg-gray-100
                ${selectedUser?.id === user.id ? "bg-gray-100 " : ""}
                border-b border-gray-100
              `}
            >
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold truncate">{user.name}</h3>
                  <span className="text-xs text-muted-foreground">
                    {user.lastSeen}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-muted-foreground truncate max-w-37.5">
                    {user.typing ? (
                      <span className="text-green-500">در حال تایپ...</span>
                    ) : (
                      user.lastMessage
                    )}
                  </p>
                  {user.unreadCount > 0 && (
                    <Badge
                      variant="default"
                      className="rounded-full h-5 min-w-5 flex items-center justify-center"
                    >
                      {user.unreadCount}
                    </Badge>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {children}
    </div>
  );
}

export default layout;
