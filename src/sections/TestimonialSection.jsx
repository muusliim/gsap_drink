import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { cards } from "../constants";

export const TestimonialSection = () => {
	useGSAP(() => {
		gsap.set(".testimonials-section", {
			marginTop: "-120vh",
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".testimonials-section",
				start: "10% 80%",
				end: "200% top",
				scrub: true,
			},
		});

		tl.to(".testimonials-section .first-title", {
			xPercent: 50,
		})
			.to(
				".testimonials-section .second-title",
				{
					xPercent: 25,
				},
				"<"
			)
			.to(
				".testimonials-section .third-title",
				{
					xPercent: -50,
				},
				"<"
			)
			.to(".testimonial-words", {
				y: 300,
				x: -100,
			});

		const pinTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".pin-box",
				start: "10% top",
				end: "80% top",
				scrub: 0.8,
				pin: true,
			},
		});

		pinTl.from(".vd-card", {
			yPercent: 150,
			stagger: 0.3,
			ease: "power1.inOut",
		});
	});

	const videoRef = useRef([]);

	const handlePlay = (index) => {
		const video = videoRef.current[index];
		video.play();
	};
	const handlePause = (index) => {
		const video = videoRef.current[index];
		video.pause();
	};

	return (
		<section className="testimonials-section">
			<div className="absolute size-full flex flex-col items-center pt-[5vw] testimonial-words">
				<h1 className="text-black first-title">What's</h1>
				<h1 className="text-light-brown second-title">Everyone</h1>
				<h1 className="text-black third-title">Talking</h1>
			</div>

			<div className="pin-box">
				{cards.map((card, index) => (
					<div
						key={`${index}-${card.name}`}
						className={`vd-card ${card.translation} ${card.rotation}`}
						onMouseEnter={() => handlePlay(index)}
						onMouseLeave={() => handlePause(index)}
					>
						<video
							ref={(el) => (videoRef.current[index] = el)}
							src={card.src}
							className="size-full object-cover"
							playsInline
							muted
							loop
						/>
					</div>
				))}
			</div>
		</section>
	);
};
