import classes from "./StatusBadge.module.css";

export default function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: string;
}) {
  return (
    <span className={`${classes.status} ${classes[`status${tone}`]}`}>
      <span className={classes.statusDot} />
      {children}
    </span>
  );
}
