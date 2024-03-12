import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({ cloud: { cloudName: "dgzcm4qoa" } });

export default function CldImage(props: { src: string; title: string }) {
	const cldSrc = cld
		.image(props.src)
		.setDeliveryType("fetch")
		.format("auto")
		.quality("auto");

	return (
		<div title={props.title}>
			<AdvancedImage cldImg={cldSrc} />;
		</div>
	);
}
