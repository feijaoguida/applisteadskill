import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "@/app/api/auth/auth";
import SignOutButton from "./signOutButton";

export default async function ValidateLogin() {
  const session = await auth();

  return (
    <>
      {session ? (
        <>
          <SignOutButton />
        </>
      ) : (
        <Button className="text-white ">
          <Link href="/login">Login</Link>
        </Button>
      )}
    </>
  );
}
