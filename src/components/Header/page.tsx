"use client";
import Link from "next/link";
import Logo from "../logo";
import { Button } from "../ui/button";
import { SessionProvider, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
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

        {!session ? (
          <Button className="text-white ">
            <Link href="/login">Login</Link>
          </Button>
        ) : (
          <>
            <Button onClick={() => signOut()}>Logout</Button>
          </>
        )}
      </div>
    </header>
  );
}
