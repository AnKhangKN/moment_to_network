export default function ButtonComponent({
  loading = false,
  children = "Button",
}: {
  loading?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <button
      disabled={loading}
      className={`
        bg-gray-100 px-4 py-1.5 rounded-lg
        transition-all shadow-md shadow-gray-300/50
        active:scale-95
        ${loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
