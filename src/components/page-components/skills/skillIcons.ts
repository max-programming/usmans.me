const languages: SkillItem[] = [
	{
		name: "HTML",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
		color: "#E34F26",
		url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
	},
	{
		name: "CSS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
		color: "#1572B6",
		url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},
	{
		name: "JavaScript",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		color: "#F7DF1E",
		url: "https://developer.mozilla.org/en-US/docs/Web/javascript",
	},
	{
		name: "TypeScript",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		color: "#3178C6",
		url: "https://www.typescriptlang.org/",
	},
	{
		name: "Dart",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
		color: "#0175C2",
		url: "https://dart.dev",
	},
	{
		name: "C#",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
		color: "#974d94",
		url: "https://dotnet.microsoft.com/en-us/languages/csharp",
	},
];
const backend: SkillItem[] = [
	{
		name: "Express",
		icon: "/icons/express.svg",
		color: "#fff",
		url: "https://expressjs.com/",
	},
	{
		name: "Node.js",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		color: "#339933",
		url: "https://nodejs.org/en/",
	},
];
const frontend: SkillItem[] = [
	{
		name: "React",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		color: "#61DAFB",
		url: "https://reactjs.org/",
	},
	{
		name: "Next.js",
		icon: "/icons/nextjs.svg",
		color: "#fff",
		url: "https://nextjs.org/",
	},
	{
		name: "Astro",
		icon: "/icons/astro.svg",
		color: "#FF5D01",
		url: "https://astro.build/",
	},
	{
		name: "Blazor",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg",
		color: "#5b2a90",
		url: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor/",
	},
	{
		name: "Tailwind CSS",
		icon: "/icons/tailwind.svg",
		url: "https://tailwindcss.com",
		color: "#06B6D4",
	},
];
const databases: SkillItem[] = [
	{
		name: "MongoDB",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		color: "#47A248",
		url: "https://mongodb.com",
	},
	{
		name: "Supabase",
		icon: "/icons/supabase.svg",
		color: "#3ECF8E",
		url: "https://supabase.com",
	},
	{
		name: "Xata",
		icon: "/icons/xata.svg",
		color: "#f60071",
		url: "https://xata.io",
	},
	{
		name: "PlanetScale",
		icon: "/icons/planetscale.svg",
		color: "#fff",
		url: "https://planetscale.com/",
	},
];
const mobile: SkillItem[] = [
	{
		name: "Flutter",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
		color: "#02569B",
		url: "https://flutter.dev",
	},
];
const others: SkillItem[] = [
	{
		name: "Puppeteer",
		icon: "/icons/puppeteer.svg",
		color: "#40B5A4",
		url: "https://pptr.dev/",
	},
];

export interface SkillItem {
	name: string;
	icon: string;
	color: string;
	url: string;
	categories?: string[];
}

export const skills: { [k: string]: SkillItem[] } = {
	all: [
		...languages,
		...frontend,
		...backend,
		...databases,
		...mobile,
		...others,
	],
	languages,
	backend,
	frontend,
	databases,
	mobile,
	others,
};
