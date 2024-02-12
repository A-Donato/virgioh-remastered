import NavBar from "../ui/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <div className="w-full flex-none md:w-64">
        <NavBar />
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
}
