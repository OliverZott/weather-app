import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image
        className="dark:invert h-5 w-[100px]"
        src="/dino.svg"
        alt="Dino logo"
        width={100}
        height={100}
      />
      <h1>Hello there</h1>
    </div>
  );
}
