import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ReactLenis } from "lenis/react";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { MessageSection } from "./sections/MessageSection";
import { FlavorSection } from "./sections/FlavorSection";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
	const lenisRef = useRef(null);

	useEffect(() => {
		function update(time) {
			lenisRef.current?.lenis?.raf(time * 1000);
		}

		gsap.ticker.add(update);

		return () => gsap.ticker.remove(update);
	}, []);
	return (
		<>
			<ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

			<main>
				<Navbar />

				<HeroSection />
				<MessageSection />
				<FlavorSection />
			</main>
		</>
	);
}
