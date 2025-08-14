import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText);
export const HeroSection = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
	useGSAP(() => {
		SplitText.create(".hero-title", {
			type: "chars",
			charsClass: "hero-title-char++",
			onSplit: (self) => {
				const tl = gsap.timeline({
					delay: 1,
				});

				tl.to(".hero-content", {
					opacity: 1,
					ease: "power2.inOut",
				})
					.to(
						".hero-text-scroll",
						{
							duration: 1,
							clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
							ease: "circ.out",
						},
						"<+0.4"
					)
					.from(
						self.chars,
						{
							yPercent: 200,
							duration: 0.5,
							ease: "power2.out",
							stagger: 0.05,
						},
						"<-0.3"
					);
			},
		});

		const heroTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".hero-container",
				start: "top top",
				end: "bottom top",
				scrub: 1,
			},
		});

		heroTl.to(".hero-container", {
			rotate: 5,
			scale: 0.9,
			yPercent: 30,
			ease: "power2.inOut",
		});
	});

	return (
		<section className="bg-main-bg ">
			<div className="hero-container z-10">
				{isTablet ? (
					<>
						{isMobile && (
							<img
								src="/images/hero-bg.png"
								alt="mobile hero-bg"
								className="absolute bottom-40 size-full object-cover"
							/>
						)}
						<img
							src="/images/hero-img.png"
							alt="hero-img"
							className="absolute bottom-0 left-1/2 -translate-x-1/2 object-cover"
						/>
					</>
				) : (
					<video
						src="/videos/hero-bg.mp4"
						autoPlay
						muted
						playsInline
						className="absolute inset-0 size-full object-cover"
					/>
				)}
				<div className="hero-content opacity-0">
					<div className="overflow-hidden">
						<h1 className="hero-title">Freaky Delicious</h1>
					</div>

					<div
						style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
						className="hero-text-scroll"
					>
						<div className="hero-subtitle">
							<h2 className="hero-subtitle-text">Protein + Caffeine</h2>
						</div>
					</div>

					<h3>
						Live life to the fullest with SPYLT: Shatter boredom and embrace
						your inner kid with every deliciously smooth chug.
					</h3>

					<button className="hero-button hover:-rotate-3 transition-transform duration-300">
						<p>Chug a SPYLT</p>
					</button>
				</div>
			</div>
		</section>
	);
};
