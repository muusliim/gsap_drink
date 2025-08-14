import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const VideoPinSection = () => {
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".vd-pin-section",
				start: "top top",
				end: "+=250%",
				scrub: 1.5,
				pin: true,
			},
		});

		tl.to(".video-box", {
			clipPath: "circle(100% at 50% 50%)",
			ease: "power2.inOut",
		});
	});
	return (
		<section className="vd-pin-section">
			<div
				style={{ clipPath: "circle(5% at 50% 50%)" }}
				className="size-full video-box"
			>
				<video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />

				<div className="abs-center md:scale-100 scale-200 ">
					<img
						src="/images/circle-text.svg"
						alt="spin-circle"
						className="spin-circle"
					/>
					<button className="play-btn cursor-pointer">
						<img
							src="/images/play.svg"
							alt="button"
							className="size-[3vw] ml-[.5vw]"
						/>
					</button>
				</div>
			</div>
		</section>
	);
};
