import Image from "next/image";
import LoginPage from "./loginForm";
import { auth } from "../api/auth/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-blueead">
      <div className="relative hidden bg-muted lg:flex lg:items-center lg:justify-center">
        <Image
          src="/login.svg"
          alt="Image"
          width={800}
          height={700}
          className="w-3/5 h-3/5"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-brueead">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <Image src="/globe.svg" alt="Logo" width={40} height={40} />
            <span className="text-2xl font-bold">EADSkills</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginPage usuarioLogado={session ? true : false} />
          </div>
        </div>
      </div>
    </div>
  );
}
