import { useEffect, useRef } from "react";
//gsap, lenis
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
//sections
import { Navbar } from "./components/Navbar";
import {
	HeroSection,
	MessageSection,
	FlavorSection,
	NutritionSection,
	BenefitSection,
	TestimonialSection,
	FooterSection,
} from "./sections";

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
				<NutritionSection />
				<BenefitSection />
				<TestimonialSection />
				<FooterSection />
			</main>
		</>
	);
}
