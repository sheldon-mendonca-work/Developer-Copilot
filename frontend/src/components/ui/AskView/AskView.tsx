import AskBox from "../AskBox/Askbox";
import StatusBadge from "../StatusBadge/StatusBadge";
import classes from "./AskView.module.css";
import {
  ArrowUpRight,
  Command,
  MessageSquare,
  MoreHorizontal,
  PanelRight,
  Sparkles,
  GitFork,
  Activity,
  Ticket,
  FileText,
} from 'lucide-react'

export default function AskView() {

  const sources = [
  { type: 'GitFork', title: 'PaymentClient.java:142–158', meta: 'payments-service · main', icon: GitFork, tone: 'blue', relevance: '98%' },
  { type: 'Datadog', title: 'checkout-service latency', meta: 'Last 24 hours · p95', icon: Activity, tone: 'purple', relevance: '94%' },
  { type: 'Jira', title: 'INC-284 · Payment provider timeout', meta: 'Payments · Investigating', icon: Ticket, tone: 'orange', relevance: '91%' },
  { type: 'Confluence', title: 'Payment Architecture v2', meta: 'Platform engineering', icon: FileText, tone: 'green', relevance: '84%' },
]

  return (
    <div className={classes.askLayout}>
      <div className={classes.history}>
        <div className={classes.panelTitle}>
          Conversations{" "}
          <button>
            <MoreHorizontal size={15} />
          </button>
        </div>
        <button className={classes.newChat}>
          <MessageSquare size={14} /> New conversation{" "}
          <span>
            <Command size={11} /> N
          </span>
        </button>
        <div className={classes.historyLabel}>Today</div>
        {[
          "Why are checkout requests returning 504s?",
          "Latest deployment impact analysis",
          "Payment provider error patterns",
        ].map((x, i) => (
          <button
            className={`${classes.historyItem} ${i === 0 ? classes.historySelected : ""}`}
            key={x}
          >
            <MessageSquare size={14} />
            <span>{x}</span>
          </button>
        ))}
        <div className={classes.historyLabel}>Previous 7 days</div>
        {[
          "Authentication architecture overview",
          "Database connection pool limits",
          "On-call handoff · payments",
        ].map((x) => (
          <button className={classes.historyItem} key={x}>
            <MessageSquare size={14} />
            <span>{x}</span>
          </button>
        ))}
      </div>
      <main className={classes.chat}>
        <div className={classes.chatHeader}>
          <div>
            <div className={classes.eyebrow}>ASK FORGE</div>
            <h2>Why are checkout requests returning 504s?</h2>
          </div>
          <button className={classes.iconButton}>
            <MoreHorizontal size={17} />
          </button>
        </div>
        <div className={classes.chatScroll}>
          <div className={classes.userMessage}>
            <div className={classes.avatarSmall}>AC</div>
            <div>
              <span className={classes.messageAuthor}>
                Alex Chen <span>just now</span>
              </span>
              <p>Why are checkout requests returning 504s?</p>
            </div>
          </div>
          <div className={classes.aiMessage}>
            <div className={classes.forgeIcon}>
              <Sparkles size={14} />
            </div>
            <div className={classes.aiBody}>
              <span className={classes.messageAuthor}>
                Forge{" "}
                <StatusBadge tone="success">Analyzed 8 sources</StatusBadge>
              </span>
              <p className={classes.lead}>
                Checkout 504s appear to be caused by increased latency from the
                payment provider combined with a 5-second timeout introduced in{" "}
                <code>checkout-service v42</code>.
              </p>
              <div className={classes.responseSection}>
                <h4>Summary</h4>
                <p>
                  Payment provider latency increased <strong>38%</strong> after
                  the latest deployment. Requests now exceed the client timeout
                  before the provider responds.
                </p>
              </div>
              <div className={classes.responseSection}>
                <h4>
                  Evidence <span>4 sources</span>
                </h4>
                <div className={classes.citationGrid}>
                  {sources.slice(0, 3).map((s) => (
                    <div className={classes.citation} key={s.title}>
                      <s.icon size={14} />
                      <div>
                        <strong>{s.title}</strong>
                        <span>
                          {s.type} · {s.meta}
                        </span>
                      </div>
                      <ArrowUpRight size={13} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={classes.responseSection}>
                <h4>Recommended next steps</h4>
                <ol className={classes.steps}>
                  <li>Compare provider latency against the v41 baseline.</li>
                  <li>Review the timeout change in the v42 deployment.</li>
                  <li>
                    Consider rolling back while the provider issue is
                    investigated.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.composer}>
          <AskBox compact />
        </div>
      </main>
      <aside className={classes.context}>
        <div className={classes.panelTitle}>
          Sources <span className={classes.sourceCount}>8</span>
          <button>
            <PanelRight size={15} />
          </button>
        </div>
        <div className={classes.contextTabs}>
          <button className={classes.contextTabActive}>All sources</button>
          <button>Referenced</button>
        </div>
        <div className={classes.sourceGroups}>
          {[
            ["Code", sources.slice(0, 1)],
            ["Observability", sources.slice(1, 2)],
            ["Tickets & docs", sources.slice(2)],
          ].map(([group, items]) => (
            <div className={classes.sourceGroup} key={group as string}>
              <div className={classes.groupTitle}>
                {group as string}
                <span>{(items as typeof sources).length}</span>
              </div>
              {(items as typeof sources).map((source) => (
                <div className={classes.sourceCard} key={source.title}>
                  <div
                    className={`${classes.sourceType} ${classes[`tone${source.tone}`]}`}
                  >
                    <source.icon size={14} />
                  </div>
                  <div className={classes.sourceInfo}>
                    <strong>{source.title}</strong>
                    <span>{source.meta}</span>
                    <div className={classes.relevance}>
                      <span style={{ width: source.relevance }} />{" "}
                      <small>{source.relevance} relevant</small>
                    </div>
                  </div>
                  <MoreHorizontal size={14} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
