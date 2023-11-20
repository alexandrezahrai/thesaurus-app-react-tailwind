/* eslint-disable react/prop-types */
export default function Form({onSubmit, value, onChange, onClick}) {
  return (
    <form
      className="flex flex-col md:flex-row items-center gap-4"
      onSubmit={onSubmit}
    >
      <label htmlFor="word-input" className="font-bold whitespace-nowrap">
        Your Word
      </label>
      <input
        id="word-input"
        type="text"
        role="text"
        placeholder="Start typing a word..."
        value={value}
        onChange={onChange}
        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      />
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        onClick={onClick}
      >
        Submit
      </button>
    </form>
  );
}
