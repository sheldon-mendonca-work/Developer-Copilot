import AskBox from "@/components/ui/AskBox/Askbox";
import classes from "./HomeContainer.module.css";
import {
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Sparkles,
} from 'lucide-react'
import StatusBadge from "@/components/ui/StatusBadge/StatusBadge";

export default function HomeContainer() {
  return (
    <div className={classes.page}>
      <div className={classes.homeHeader}>
        <div>
          <div className={classes.eyebrow}>
            MONDAY, OCTOBER 6, 2026{" "}
            <span className={classes.live}>
              <span /> LIVE
            </span>
          </div>
          <h1>Good evening, Alex</h1>
          <p>Your engineering intelligence workspace</p>
        </div>
        <button className={classes.outlineButton}>
          <Clock3 size={14} /> Activity log
        </button>
      </div>
      <section className={classes.heroAsk}>
        <div className={classes.sectionEyebrow}>
          <Sparkles size={14} /> ENGINEERING INTELLIGENCE
        </div>
        <h2>What are you trying to understand?</h2>
        <p>
          Search across your entire engineering environment with evidence you
          can trust.
        </p>
        <AskBox />
        <div className={classes.promptRow}>
          {/* {prompts.map((prompt) => (
            <button
              key={prompt}
              // onClick={() => onView("ask")}
              className={classes.prompt}
            >
              {prompt}
              <ArrowUpRight size={13} />
            </button>
          ))} */}
        </div>
      </section>
      <section className={classes.healthSection}>
        <div className={classes.sectionHeader}>
          <div>
            <h3>Engineering health</h3>
            <span>Updated just now</span>
          </div>
          <button className={classes.textButton}>
            View observability <ArrowUpRight size={13} />
          </button>
        </div>
        {/* <HealthStrip /> */}
      </section>
      <section className={classes.recentSection}>
        <div className={classes.sectionHeader}>
          <div>
            <h3>Recent investigations</h3>
            <span>Questions and analysis from your workspace</span>
          </div>
          <button className={classes.textButton}>
            View all <ArrowUpRight size={13} />
          </button>
        </div>
        <div className={classes.investigationList}>
          {[
            [
              "Why are checkout requests returning 504s?",
              "checkout-service",
              "Investigating",
              "8 sources",
              "12 min ago",
              "high",
            ],
            [
              "What changed in the auth service this week?",
              "identity-platform",
              "Resolved",
              "14 sources",
              "Yesterday",
              "low",
            ],
            [
              "Services affected by deployment v2026.10.06.1",
              "platform",
              "In progress",
              "6 sources",
              "Yesterday",
              "medium",
            ],
          ].map(([title, service, status, count, time, level], i) => (
            <button
              className={classes.investigationRow}
              key={title}
              // onClick={() => onView(i === 0 ? "investigate" : "ask")}
            >
              <div
                className={`${classes.severityLine} ${classes[`severity${level}`]}`}
              />
              <div className={classes.investigationMain}>
                <strong>{title}</strong>
                <span>
                  <span className={classes.mono}>{service}</span>
                  <span className={classes.dotSep}>·</span>
                  {count}
                </span>
              </div>
              <StatusBadge
                tone={
                  status === "Resolved"
                    ? "success"
                    : status === "Investigating"
                      ? "warning"
                      : "blue"
                }
              >
                {status}
              </StatusBadge>
              <span className={classes.rowTime}>{time}</span>
              <ChevronRight size={15} className={classes.rowChevron} />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
