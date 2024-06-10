import { column, defineDb, defineTable } from "astro:db";

const Project = defineTable({
	columns: {
		name: column.text(),
		title: column.text(),
		description: column.text(),
		totalImages: column.number(),
		skills: column.json(),
		link: column.text({ optional: true }),
	},
});

export default defineDb({
	tables: { Project },
});
