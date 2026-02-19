import Forbidden from "@/app/forbidden";
import { getUserId } from "@/core/utils/getUserId";
import { isLogin } from "@/core/utils/isLogin";
import SidebarDashboardBox from "./SidebarDashboardBox";

async function SidebarDashboard() {
  const login = await isLogin();
  const userid = await getUserId();
  if (!login) {
    return Forbidden();
  }
  return <SidebarDashboardBox userid={userid} />;
}

export default SidebarDashboard;
