import FocusLock from 'react-focus-lock';

export default function Drawer({ handleDismiss, children }) {
  return (
    <FocusLock returnFocus={true}>
      <div onClick={handleDismiss}>{children}</div>
    </FocusLock>
  );
}
