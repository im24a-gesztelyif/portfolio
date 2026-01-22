export default function Section({ className = "", children }) {
  return (
    <section className={`py-20 sm:py-28 ${className}`}>{children}</section>
  );
}
