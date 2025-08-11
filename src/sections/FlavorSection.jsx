import { FlavorTitle } from "../components/FlavorTitle";
import { FlavorSlider } from "../components/FlavorSlider";

export const FlavorSection = () => {
	return (
		<section className="flavor-section">
			<div className="h-full flex lg:flex-row flex-col md:gap-5 items-center relative">
				<div className="lg:w-[55%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0 ">
					<FlavorTitle />
				</div>
				<div className="h-full ">
					<FlavorSlider />
				</div>
				<div className="mb-4 flex-none lg:w-[35%] flex justify-center">
					<button className="flavor-button hover:rotate-3 transition-transform duration-300">
						<p>View All Flavors</p>
					</button>
				</div>
			</div>
		</section>
	);
};
