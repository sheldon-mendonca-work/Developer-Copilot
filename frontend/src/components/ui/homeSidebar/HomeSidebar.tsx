import classes from './HomeSidebar.module.css';
import {
  Activity,
  ChevronDown,
  FileText,
  GitFork,
  MoreHorizontal,
  Settings,
  Sparkles,
  Ticket,
} from 'lucide-react';

export default function HomeSidebar() {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.brand}>
        <div className={classes.brandMark}>
          <Sparkles size={14} />
        </div>
        <span>Forge</span>
        <span className={classes.beta}>BETA</span>
      </div>
      <button className={classes.workspace}>
        <div className={classes.workspaceIcon}>A</div>
        <span>Acme Engineering</span>
        <ChevronDown size={14} />
      </button>
      <div className={classes.sidebarLabel}>Workspace</div>
      {/* <nav className={classes.nav}>
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`${classes.navItem} ${view === item.id ? classes.navActive : ""}`}
              onClick={() => onView(item.id as View)}
            >
              <Icon size={16} />
              <span>{item.label}</span>
              {item.id === "incidents" && (
                <span className={classes.navCount}>3</span>
              )}
            </button>
          );
        })}
      </nav> */}
      <div className={classes.divider} />
      <div className={classes.sidebarLabel}>Connected sources</div>
      <div className={classes.integrations}>
        {[
          ["GitFork", GitFork, "connected"],
          ["Jira", Ticket, "connected"],
          ["Confluence", FileText, "connected"],
          ["Datadog", Activity, "connected"],
        ].map(([name, Icon, state]) => (
          <button className={classes.integration} key={name as string}>
            <span
              className={`${classes.integrationIcon} ${classes[`icon${name}`]}`}
            >
              <Icon size={14} />
            </span>
            <span>{name as string}</span>
            <span className={classes.connected} />
          </button>
        ))}
      </div>
      <div className={classes.sidebarBottom}>
        <button className={classes.navItem}>
          <Settings size={16} />
          <span>Settings</span>
        </button>
        <div className={classes.userRow}>
          <div className={classes.avatar}>AC</div>
          <div>
            <strong>Alex Chen</strong>
            <small>Engineering</small>
          </div>
          <MoreHorizontal size={16} />
        </div>
      </div>
    </aside>
  );
}
