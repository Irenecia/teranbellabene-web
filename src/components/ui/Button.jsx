export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
