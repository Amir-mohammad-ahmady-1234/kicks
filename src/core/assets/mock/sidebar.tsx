import {
  BlendIcon,
  ChartBarIcon,
  Heart,
  LayoutDashboard,
  List,
  UserRoundPen,
} from "lucide-react";

export const itemsDashboardAdmin = [
  {
    name: "dashboard",
    icon: <LayoutDashboard />,
  },
  { name: "order", icon: <List /> },
  { name: "blog", icon: <BlendIcon /> },
  { name: "suppurt", icon: <ChartBarIcon /> },
];
export const itemsDashboardUser = [
  { name: "favorite", icon: <Heart /> },
  { name: "profile", icon: <UserRoundPen /> },
  { name: "suppurt", icon: <ChartBarIcon /> },
];
