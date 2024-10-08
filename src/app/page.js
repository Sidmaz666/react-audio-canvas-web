import Container from "@/components/global/Container";
import Image from "next/image";
import Code from "@/components/global/Code";
import Link from "next/link";

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
    Visualize Audio Amplify Creativity
    </span>
    <Code>
      {'npm install react-audio-canvas'}
    </Code>
    <p className="text-center max-w-xl z-10 text-gray-600 dark:text-slate-100">
    {
	`The React library offers Components & Hooks for versatile audio playback, visualization, and streaming, including support for dynamic and static visualizations.`
    }
	<Link href="/docs" className="text-blue-500 hover:underline ml-0.5">Read More</Link>
    </p>
    </Container>
  );
}
