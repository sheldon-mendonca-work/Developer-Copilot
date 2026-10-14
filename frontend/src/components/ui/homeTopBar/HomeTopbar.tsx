import {
  Bell,
  ChevronRight,
  Command,
  Menu,
  Search,
} from 'lucide-react';
import classes from "./HomeTopbar.module.css";

export default function HomeTopbar({ onMenu }: { onMenu: () => void }) {
  const current ="Home";
  return (
    <header className={classes.topbar}>
      <button className={classes.mobileMenu} onClick={onMenu}>
        <Menu size={18} />
      </button>
      <div className={classes.breadcrumb}>
        <span>Acme Engineering</span>
        <ChevronRight size={13} />
        <strong>{current}</strong>
      </div>
      <div className={classes.topActions}>
        <button className={classes.globalSearch}>
          <Search size={15} />
          <span>Search workspace...</span>
          <kbd>
            <Command size={11} /> K
          </kbd>
        </button>
        <button className={classes.iconButton}>
          <Bell size={17} />
          <span className={classes.notificationDot} />
        </button>
        <div className={classes.avatar}>AC</div>
      </div>
    </header>
  );
}
