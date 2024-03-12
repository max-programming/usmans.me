import { type TargetAndTransition, motion } from "framer-motion";
import type { ReactNode } from "react";
import { socialLinks } from "../utils/socialLinks";

function SocialLinks() {
	return (
		<div className="flex gap-3 md:gap-5">
			{socialLinks.map((socialLink) => (
				<SocialLink
					key={socialLink.link}
					link={socialLink.link}
					icon={socialLink.icon}
					name={socialLink.name}
				/>
			))}
		</div>
	);
}

const SocialLink = (props: { link: string; icon: ReactNode; name: string }) => {
	const linkHover: TargetAndTransition = {
		scale: 1.2,
	};

	return (
		<motion.a
			whileHover={linkHover}
			href={props.link}
			target="_blank"
			rel="noreferrer"
			className="text-4xl"
		>
			{props.icon}
		</motion.a>
	);
};

export { SocialLinks };
