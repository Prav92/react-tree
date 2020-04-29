import uid from "nanoid";

const rootNodes = [
	{
		id: 12345678,
		parentId: null,
		label: "Allergies",
		items: [
			{
				label: "Gluten-Free",
				parentId: 12345678,
				parentL: "Allergies",
			},
			{
				label: "Dairy Free",
				parentId: 12345678,
				parentL: "Allergies",
			},
		],
	},
	{
		id: 123456789,
		parentId: null,
		label: "Immune",
		items: [
			{
				id: 876543210,
				label: "Autoimmune",
				parentId: 123456789,
				parentL: "Immune",
			},
			{
				id: 876543212,
				label: "Infection",
				parentId: 123456789,
				parentL: "Immune",
			},
		],
	},
];

export const nodes = [...rootNodes];
