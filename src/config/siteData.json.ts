export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "wedding",
	// Your website's title and description (meta fields)
	title: "wedding - wedding photography website",
	description: "Wedding photography website built with Astro and Tailwind CSS.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Huynh Duc Khoan",
		email: "",
		twitter: "",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/site-logo.png",
		alt: "wedding logo",
	},
};

export default siteData;
