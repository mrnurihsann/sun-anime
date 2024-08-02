// /components/Dashboard/DashboardWrapper.js
import { authUserSession } from "@/libs/auth-libs";
import Dashboard from "@/app/users/dashboard/page";

const DashboardWrapper = async () => {
  const user = await authUserSession();
  return <Dashboard user={user} />;
};

export default DashboardWrapper;
