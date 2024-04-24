import Sidebar from "@/components/dashboard/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="w-48">
          <Sidebar />
        </div>
        <main className="w-full bg-indigo-50 px-4 py-10">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
