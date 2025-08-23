/*eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import MenuBar from './MenuBar';
export function RichTextEditor({ field }: { field?: any }) {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
			TextAlign.configure({ types: ['heading', 'paragraph'] }),
		],
		immediatelyRender: false,
		editorProps: {
			attributes: {
				class:
					'min-h-[300px] p-4 focus:outline-none prose prose-sm sm:prose lg:prose-lg xl:prose-xl m-0 !w-full !max-w-none dark:prose-invert',
			},
		},
		onUpdate: ({ editor }) => {
			field?.onChange(JSON.stringify(editor.getJSON()));
		},
		content: field?.value ? JSON.parse(field.value) : '<p>Hello World</p>',
	});

	return (
		<div className='w-full border border-input rounded-lg overflow-hidden dark:bg-input/30'>
			<MenuBar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
}
