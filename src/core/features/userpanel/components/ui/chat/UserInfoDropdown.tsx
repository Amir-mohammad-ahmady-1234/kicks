"use client";

import { TypographyP } from "@/core/components/custom/ui/Typography";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/core/components/shadcn/ui/avatar";
import { Badge } from "@/core/components/shadcn/ui/badge";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/core/components/shadcn/ui/dropdown-menu";
import { Globe, Mail, Phone, UserCircle } from "lucide-react";
import { ChatUser } from "../../../assets/types/ChatTypes";

type UserInfoDropdownProps = {
  user: ChatUser;
};

function UserInfoDropdown({ user }: UserInfoDropdownProps) {
  return (
    <DropdownMenuContent className="w-80" align="end">
      <DropdownMenuLabel className="flex items-center gap-3 p-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <TypographyP className="font-semibold">{user.name}</TypographyP>
          <TypographyP className="text-xs text-muted-foreground">
            <Badge variant="secondary" className="text-[10px] h-5">
              {user.role}
            </Badge>
          </TypographyP>
        </div>
      </DropdownMenuLabel>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <UserCircle className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              Username
            </TypographyP>
            <TypographyP className="text-sm">{user.name}</TypographyP>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              Email
            </TypographyP>
            <TypographyP className="text-sm">{user.email}</TypographyP>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              Phone
            </TypographyP>
            <TypographyP className="text-sm">{user.phone}</TypographyP>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <UserCircle className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">Bio</TypographyP>
            <TypographyP className="text-sm">{user.bio}</TypographyP>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 p-3">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <TypographyP className="text-xs text-muted-foreground">
              Country
            </TypographyP>
            <TypographyP className="text-sm">{user.country}</TypographyP>
          </div>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
}

export default UserInfoDropdown;

