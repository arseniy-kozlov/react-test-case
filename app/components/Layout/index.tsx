export function Layout({children}: { children: React.ReactNode }) {
  return (
    <main className="flex items-center justify-center pt-8 pb-4 bg-neutral-100 h-full">
      <div className="flex-1 flex flex-col items-center gap-4 min-h-0 h-full">
        {children}
      </div>
    </main>
  );
}

