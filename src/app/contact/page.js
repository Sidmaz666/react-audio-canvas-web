import Container from "@/components/global/Container";
import Image from "next/image";
import Code from "@/components/global/Code";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";

export default function Home() {
  return (
    <Container className="flex flex-col justify-center items-center w-full
    min-h-[calc(100vh_-_100px)] relative space-y-4">
    <Image
    width={100}
    height={100}
    src="./assets/img/sound_bg.png" alt="Background Image" 
    className="absolute top-1/2 -translate-y-1/2 w-full blur-sm"/>
    <span className="text-4xl px-6 md:px-0 text-center md:text-6xl font-bold tracking-tighter relative z-10 dark:text-slate-100 text-gray-700">
    Shoot me an Email
    </span>
    <Code language="html">
      {'sidmazumder8@gmail.com'}
    </Code>
    <p className="text-center max-w-xl z-10 text-gray-600 dark:text-slate-100">
    Want to collaborate? Want to Contribute? Just shoot an email to me or do a PR in <Link
    	target="_blank"
    	href="https://github.com/Sidmaz666/react-audio-canvas/issues"
    	className="dark:text-green-500 text-green-700 bg-slate-100/30 underline ml-0.5 font-semibold dark:bg-black/30 rounded-md">
    	Git Issues
    </Link>. Appropiate features, fixes and suggestions will be always merged and taken into considerations.
    </p>
    </Container>
  );
}
