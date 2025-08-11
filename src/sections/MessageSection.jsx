import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

export const MessageSection = () => {
	useGSAP(() => {
		const splitText = new SplitText(".msg-wrapper h1", {
			type: "words",
			wordsClass: "word++",
		});

		const paragraphSplit = new SplitText(".message-content p", {
			type: "words, lines",
			mask: "lines",
			linesClass: "paragraph-line",
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".message-content",
				start: "20% center",
				end: "90% 20%",
				scrub: 0.2,
			},
		});

		tl.to(splitText.words, {
			color: "#faeade",
			ease: "power2.out",
			stagger: 0.05,
		}).from(paragraphSplit.lines, {
			y: 80,
			ease: "power2.out",
			stagger: 0.1,
		});

		const revealTl = gsap.timeline({
			delay: 0.5,
			scrollTrigger: {
				trigger: ".msg-text-scroll",
				start: "top 60%",
				toggleActions: "play none none reverse",
			},
		});

		revealTl.from(".msg-text-scroll", {
			clipPath: "inset(0% 100% 0% 0%)",
			duration: 0.8,
			ease: "circ.out",
		});
	});
	return (
		<section className="message-content">
			<div className="container mx-auto flex-center py-28 relative">
				<div className="w-full h-full">
					<div className="msg-wrapper">
						<h1 className="first-message">STIP UP YOUR FEARLESS PAST AND</h1>

						<div className="msg-text-scroll text-nowrap">
							<div className="bg-light-brown md:pb-5 pb-3 px-5">
								<h2 className="text-red-brown">Fuel up</h2>
							</div>
						</div>
						<h1 className="second-message">
							your future with every gulp of Perfect Protein
						</h1>
					</div>

					<div className="flex-center md:mt-20 mt-10">
						<div className="max-w-md px-10 flext-center overflow-hidden">
							<p>
								Rev up your rebel spirit and feed the adventure of life with
								SPYLT, where you're one chug away from epic nostalgia and
								fearless fun.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
