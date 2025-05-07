import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div dir="rtl" className="min-h-screen">
      {children}
    </div>
  );
}
