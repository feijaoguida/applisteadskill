import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex p-2 justify-between">
      <Image src="/globe.svg" alt="EADSkills" width={50} height={50} />
      <div className="flex flex-col justify-start items-start ml-2">
        <h1 className="text-2xl font-bold">EADSkills</h1>
        <p className="text-sm">Aprenda com a gente</p>
      </div>
    </div>
  );
}
