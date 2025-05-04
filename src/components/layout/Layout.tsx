
import { ReactNode, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import SideMenu from './SideMenu';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
  hideSocialPanel?: boolean;
}

const Layout = ({ children, hideSocialPanel = false }: LayoutProps) => {
  const location = useLocation();
  const [sideMenuExpanded, setSideMenuExpanded] = useState(false);
  
  // Don't show social panel on authentication pages
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          {/* Side Menu - New Component */}
          <SideMenu className="hidden md:block" />
          
          {/* Main Content */}
          <div className="flex flex-1">

            
            <main className={cn("flex-grow", {
              "max-w-6xl mx-auto": location.pathname === "/community"
            })}>
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Layout;
