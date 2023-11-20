/* eslint-disable react/prop-types */
export default function Form({ onSubmit, value, onChange, onClick, onRemove }) {
  return (
    <form
      className="flex flex-col md:flex-row items-center gap-4"
      onSubmit={onSubmit}
    >
      <label htmlFor="word-input" className="font-bold whitespace-nowrap">
        Your Word:
      </label>
      <div className="w-full relative">
        <input
          id="word-input"
          type="text"
          role="text"
          placeholder="Start typing a word..."
          value={value}
          onChange={onChange}
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none relative"
        />
        <button type="button" onClick={onRemove} className="w-4 h-full overflow-hidden absolute top-0 bottom-0 right-2.5 flex items-center z-100">
          <span className="sr-only">Clear the input</span>
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#000000"
                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
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
