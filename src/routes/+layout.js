// this +layout.js file handsl server side scripting for every page so
// this prerender prop will trickle down to all child pages

export const prerender = true;

export const load = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};