export default function Button({
  error,
  text,
}: {
  error: boolean;
  text: string;
}) {
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 disabled:bg-black disabled:cursor-not-allowed"
      disabled={error}
    >
      {text}
    </button>
  );
}
