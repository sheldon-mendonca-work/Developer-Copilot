"use client"

import { useState } from "react";
import classes from './HomeLayout.module.css';
import HomeSidebar from "@/components/ui/homeSidebar/HomeSidebar";
import HomeTopbar from "@/components/ui/homeTopBar/HomeTopbar";

export default function HomeLayout({ children }: React.PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  
  return (
    <div className={classes.app}>
      <div
        className={`${classes.sidebarWrap} ${sidebarOpen ? classes.sidebarOpen : ""}`}
      >
        <HomeSidebar />
      </div>
      {sidebarOpen && (
        <button
          className={classes.backdrop}
          onClick={() => setSidebarOpen(false)}
          aria-label="Close navigation"
        />
      )}
      <div className={classes.main}>
        <HomeTopbar onMenu={() => setSidebarOpen(true)} />
          <div>
            {children}
          </div>
      </div>
    </div>
  );
}
