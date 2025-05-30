export default async function DashboardLayout({
  sideBar,
  content,
  controllers,
  header,
  rightdock,
}: {
  sideBar: React.ReactNode;
  content: React.ReactNode;
  controllers: React.ReactNode;
  header: React.ReactNode;
  rightdock: React.ReactNode;
}) {
  return (
    <div className="text-white flex flex-col max-h-screen h-screen gap-2 bg-black">
      {header}
      <div className="flex  grow overflow-hidden">
        <div className="flex flex-1  gap-1">
          {sideBar}
          <main className="flex-1 grow overflow-x-auto min-w-0 bg-[#121212]  rounded-lg p-2">
            {content}
          </main>
          {rightdock}
        </div>
      </div>
      <div className="h-24   shadow-xl">{controllers}</div>
    </div>
  );
}
