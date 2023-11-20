/* eslint-disable react/prop-types */
export default function Footer({ link, name,className }) {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className={className}>
      <span className="block text-sm text-gray-600 text-center">
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
