import Link from "next/link";
import Logo from "../logo";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className=" flex justify-center items-center  bg-blueead text-white  py-4">
      {/* criar um header dividido em 3 areas uma ao lado da outra,
       area 1: com a logo da empresa, 
       Area 2: um menu de navegação, com os links: Home, Produtos, Sobre, Contato e 
       Area 3: Botão de Login
       
       todos bem formadado criando os componentes separados*/}
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
        <Button className="text-white ">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
}
