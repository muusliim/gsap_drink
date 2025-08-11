import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

export const FlavorTitle = () => {
	useGSAP(() => {
		const firstTextSplit = new SplitText(".first-text-split h1", {
			type: "chars",
		});
		const secondTextSplit = new SplitText(".second-text-split h1", {
			type: "chars",
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".flavor-section",
				start: "top 20%",
				toggleActions: "play none none reverse",
			},
		});

		tl.from(firstTextSplit.chars, {
			yPercent: 200,
			stagger: 0.05,
			ease: "power2.inOut",
		});

		tl.to(
			".flavor-text-scroll",
			{
				duration: 0.5,
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				ease: "circ.out",
			},
			"+<0.5"
		);

		tl.from(
			secondTextSplit.chars,
			{
				yPercent: -210,
				stagger: 0.05,
				duration: 0.5,
				ease: "power2.inOut",
			},
			"0"
		);
	});
	return (
		<div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
			<div className="overflow-hidden 2xl:py-0 py-5 first-text-split">
				<h1>We have six </h1>
			</div>

			<div
				className="flavor-text-scroll"
				style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
			>
				<div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
					<h2 className="text-milk">freaking</h2>
				</div>
			</div>

			<div className="overflow-hidden px-2 2xl:py-2 py-5 second-text-split">
				<h1>delicious flavors</h1>
			</div>
		</div>
	);
};
