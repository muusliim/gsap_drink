import { useMediaQuery } from "react-responsive";

export const FooterSection = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	return (
		<section className="footer-section">
			<img
				src="/images/footer-dip.png"
				alt="footer-dip"
				className="w-full h-full object-cover -translate-y-1"
			/>

			<div className="2xl:h-[110dvh] relative">
				<div className="overflow-hidden">
					<h1 className="general-title relative z-50 mix-blend-overlay text-center text-milk py-5">
						#CHUGRESPONSIBLY
					</h1>
				</div>

				{isMobile ? (
					<img src="/images/footer-drink.png" className="absolute top-0 z-0"/>
				) : (
					<video
						src="/videos/splash.mp4"
						className=" absolute mix-blend-lighten top-0 object-contain "
						autoPlay
						playsInline
						muted
					/>
				)}

				<div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
					<div className="social-btn">
						<img src="/images/yt.svg" alt="youtube" />
					</div>
					<div className="social-btn">
						<img src="/images/insta.svg" alt="youtube" />
					</div>
					<div className="social-btn">
						<img src="/images/tiktok.svg" alt="youtube" />
					</div>
				</div>

				<div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium z-10">
					<div className="flex items-center md:gap-16 gap-5">
						<div>
							<p>SPYLT Flavors</p>
						</div>
						<div>
							<p>Chug Club</p>
							<p>Student Marketing</p>
							<p>Dairy Dealers</p>
						</div>
						<div>
							<p>Company</p>
							<p>Contacts</p>
							<p>Tasty Talk</p>
						</div>
					</div>
					<div className="md:max-w-lg">
						<p>
							Get Exclusive Early Access and Stay Informed About Product
							Updates, Events, and More!
						</p>
						<div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10 z-10">
							<input
								id="email"
								type="email"
								placeholder="Enter your email"
								className="w-full placeholder:font-sans placeholder:text-[#999999] z-50"
							/>
							<img
								src="/images/arrow.svg"
								alt="arrow"
								className="cursor-pointer"
							/>
						</div>{" "}
					</div>
				</div>
			</div>

			<div className="copyright-box">
				<p>Copyright © 2025 Spylt - All Rights Reserved</p>
				<div className="flex items-center gap-7">
					<p>Privacy Policy</p>
					<p>Terms of Sеrvice</p>
				</div>
			</div>
		</section>
	);
};
