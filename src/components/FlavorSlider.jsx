import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { flavorlists } from "../constants";

export const FlavorSlider = () => {
	const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });
	const sliderRef = useRef(null);
	useGSAP(() => {
		if (!isTablet) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".flavor-section",
					start: "2% top",
					end: `+=${sliderRef.current.scrollWidth}px`,
					scrub: 1,
					pin: true,
					pinSpacer: false
				},
			});

			tl.to(".flavor-section", {
				x: `-${sliderRef.current.scrollWidth}px`,
				ease: "power1.inOut",
			});
		}

		const titleTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".flavor-section",
				start: "top top",
				end: "bottom 80%",
				scrub: true,
			},
		});

		titleTl
			.to(".first-text-split", {
				xPercent: -30,
				ease: "power1.inOut",
			})
			.to(
				".second-text-split",
				{
					xPercent: -10,
					ease: "power1.inOut",
				},
				"<"
			)
			.to(
				".flavor-text-scroll",
				{
					xPercent: -20,
					ease: "power1.inOut",
				},
				"<"
			);
	});
	return (
		<div ref={sliderRef} className="slider-wrapper mb-10">
			<div className="flavors">
				{flavorlists.map((flavor) => (
					<div
						key={flavor.name}
						className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
					>
						<img
							src={`/images/${flavor.color}-bg.svg`}
							alt=""
							className="absolute bottom-0"
						/>

						<img
							src={`/images/${flavor.color}-drink.webp`}
							alt=""
							className="drinks"
						/>

						<img
							src={`/images/${flavor.color}-elements.webp`}
							alt=""
							className="elements"
						/>

						<h3 className="start-10 mix-blend-color-dodge">{flavor.name}</h3>
					</div>
				))}
			</div>
		</div>
	);
};
