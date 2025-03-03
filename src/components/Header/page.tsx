import Link from "next/link";
import Logo from "../logo";
import ValidateLogin from "../validateLogin";

export default function Header() {
  return (
    <header className=" flex justify-center items-center  bg-blueead text-white  py-4">
      <div className=" container flex flex-row justify-between items-center ">
        <Logo />

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>{" "}
            </li>
            <li>
              <Link href="/products">Produto</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a
                href="https://linktr.ee/rbgsolucoes "
                target="_blank"
                rel="noopener noreferrer"
              >
                Sobre
              </a>
            </li>
          </ul>
        </nav>

        <ValidateLogin />
      </div>
    </header>
  );
}
