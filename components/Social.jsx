import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiDribbble, FiLinkedin } from "react-icons/fi";

const SocialShare = [
	// {
	// 	iconName: <FiFacebook />,
	// 	link: "https://www.facebook.com/"
	// },
	// { iconName: <FiTwitter />, link: "https://twitter.com/" },
	{
		iconName: <FiInstagram />,
		link: "https://www.instagram.com/zohaib.dilshad.1/"
	},
	// { iconName: <FiDribbble />, link: "https://dribbble.com/" },
	{
		iconName: <FiLinkedin />,
		link: "https://www.linkedin.com/in/zohaib-dilshad-510237207/"
	}
];
const Social = () => {
	return (
		<ul>
			{SocialShare.map((val, i) => (
				<li key={i}>
					<a
						href={val.link}
						target="_blank"
						rel="noreferrer"
					>
						{val.iconName}
					</a>
				</li>
			))}
		</ul>
	);
};

export default Social;
