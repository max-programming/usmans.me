import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Hamburger() {
	const isMobile = useMediaQuery("(max-width: 768px)");
	const [isOpen, setIsOpen] = useState(false);

	return (
		isMobile && (
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<div className="absolute right-5 top-5">
					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="inline-flex items-center p-2 ml-3 text-sm rounded-lg  focus:outline-none focus:ring-2 text-primary-light hover:bg-primary-darker focus:ring-gray-600"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<div className={`${isOpen ? "block" : "hidden"} w-full`}>
					<ul className="flex flex-col mt-4 rounded-lg bg-primary-dark">
						<li>
							<a
								href="/skills"
								className="block py-2 pl-3 pr-4 text-white rounded active:text-primary-light active:bg-primary-darker"
							>
								Skills
							</a>
						</li>
						<li>
							<a
								href="https://blog.usmans.me"
								className="block py-2 pl-3 pr-4 text-white rounded active:text-primary-light active:bg-primary-darker"
							>
								Blog
							</a>
						</li>
						<li>
							<a
								href="/resume.pdf"
								className="block py-2 pl-3 pr-4 text-white rounded active:text-primary-light active:bg-primary-darker"
							>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	);
}
