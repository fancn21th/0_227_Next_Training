import Link from "next/link";

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/">Home with Link</Link>
        </li>
        <li>
          <Link href="/about">About with Link</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
