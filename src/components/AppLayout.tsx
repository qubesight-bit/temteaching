import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TopicsSidebar } from "@/components/TopicsSidebar";
import { Header } from "@/components/Header";

interface AppLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export function AppLayout({ children, showSidebar = true }: AppLayoutProps) {
  if (!showSidebar) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        {children}
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <TopicsSidebar />
        <div className="flex-1 flex flex-col">
          <Header>
            <SidebarTrigger className="mr-2" />
          </Header>
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
