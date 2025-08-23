import z from 'zod';
export const courseLevels = ['Beginner', 'Intermediate', 'Advanced'] as const;
export const courseStatus = ['Draft', 'Published', 'Archived'] as const;
export const courseCategories = [
	'Development',
	'Business',
	'Finance',
	'It & Software',
	'Office Productivity',
	'Personal Development',
	'Design',
	'Marketing',
	'Health & Fitness',
	'Music',
	'Teaching & Academics',
] as const;
export const courseSchema = z.object({
	title: z
		.string()
		.min(3, 'Title must be at least 3 characters long')
		.max(100, 'Title must be at most 100 characters long'),
	description: z
		.string()
		.min(10, 'Description must be at least 10 characters long')
		.max(2500, 'Description must be at most 2500 characters long'),
	fileKey: z.string().min(1, 'File is required'),
	price: z.number().min(1, 'Price must be a positive number'),
	duration: z
		.number()
		.min(1, 'Duration must be atleast 1 hour long')
		.max(500, 'Duration must be at most 500 hours long'),
	level: z.enum(courseLevels, { message: 'Level is required' }),
	category: z.enum(courseCategories, { message: 'Category is required' }),
	smallDescription: z
		.string()
		.min(3, 'Small description must be at least 3 characters long')
		.max(200, 'Small description must be at most 200 characters long'),
	slug: z.string().min(1, 'Slug is required'),
	status: z.enum(courseStatus, { message: 'Staus is required' }),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
