import React from "react";

function WidthWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className=' max-w-screen-2xl mx-auto min-h-screen p-1 sm:p-3 md:p-4 lg:p-5 xl:p-6'>
      {children}
    </main>
  );
}

export default WidthWrapper;
