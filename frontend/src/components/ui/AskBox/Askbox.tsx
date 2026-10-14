import {
  Bot,
  ChevronDown,
  Command,
  Link2,
  Search,
  Send,
} from 'lucide-react'
import classes from "./AskBox.module.css"

export default function AskBox({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${classes.askBox} ${compact ? classes.askBoxCompact : ""}`}>
      <div className={classes.askBoxTop}>
        <Search size={18} />
        <input placeholder="Ask Forge anything about your engineering environment..." />
        <kbd>
          <Command size={11} /> K
        </kbd>
      </div>
      <div className={classes.askBoxBottom}>
        <span>
          <Link2 size={14} /> Add context
        </span>
        <span className={classes.askModel}>
          <Bot size={14} /> Forge · Reasoning <ChevronDown size={12} />
        </span>
        <button className={classes.sendButton}>
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}
