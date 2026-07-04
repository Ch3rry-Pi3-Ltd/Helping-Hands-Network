export function StatusNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="status-note">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
