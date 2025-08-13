import { cards } from "../constants";

export const TestimonialSection = () => {
	return (
		<section className="testimonials-section">
			<div className="absolute size-full flex flex-col items-center pt-[5vw]">
				<h1 className="text-black first-title">What's</h1>
				<h1 className="text-light-brown secont-title">Everyone</h1>
				<h1 className="text-black third-title">Talking</h1>
			</div>

			<div className="pin-box">
				{cards.map((card, index) => (
					<div className="">
						{card.name}
					</div>
				))}
			</div>
		</section>
	);
};
