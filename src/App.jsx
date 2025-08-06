import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { MessageSection } from "./sections/MessageSection";

export default function App() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<MessageSection />
			<div className="h-[100vh] bg-red-500"></div>
		</main>
	);
}
