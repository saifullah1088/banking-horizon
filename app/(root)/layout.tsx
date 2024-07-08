export default function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      Sidebar
      {children}
    </main>
  );
}
