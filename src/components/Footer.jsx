/* eslint-disable react/prop-types */
export default function Footer({ link, name }) {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer>
      <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
        © {year}{" "}
        <a
          href={link}
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </span>
    </footer>
  );
}
