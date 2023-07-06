export default function Drawer({ handleDismiss, children }) {
  return (
    <div onClick={handleDismiss}>
      {children}
    </div>
  );
}
