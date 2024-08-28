import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import NextTopLoader from 'nextjs-toploader';
import Navbar from "@/components/global/Navbar";
import "./globals.css";

const poppins = Poppins(
  { 
    subsets: ["latin"], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] 
  }
);

export const metadata = {
  title: "React Audio Canvas",
  description: "Example & Documentation of React Audio Canvas ~ A robust React Audio Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} relative`}>
	  <ThemeProvider attribute="class">
	    <NextTopLoader showSpinner={false} color="#3b82f6" zIndex={9999} />
	      	<Navbar/>
    		<main className="pt-[3.6rem] md:pt-[3.9rem] flex flex-col">{children}</main>
	  </ThemeProvider>
    	</body>
    </html>
  );
}
