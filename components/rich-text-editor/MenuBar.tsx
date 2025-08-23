import { type Editor } from '@tiptap/react';
import {
	AlignCenter,
	AlignLeft,
	AlignRight,
	Bold,
	Heading1Icon,
	Heading2Icon,
	Heading3Icon,
	Italic,
	ListIcon,
	ListOrdered,
	Redo,
	Strikethrough,
	Undo,
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Toggle } from '../ui/toggle';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
interface iAppProps {
	editor: Editor | null;
}
export default function MenuBar({ editor }: iAppProps) {
	if (!editor) {
		return null;
	}
	return (
		<div className='border-b border-input rounded-t-lg p-2 bg-card flex flex-wrap gap-1 items-center'>
			<TooltipProvider>
				<div className='flex flex-wrap gap-1'>
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size='sm'
								pressed={editor.isActive('bold')}
								onPressedChange={() => editor.chain().focus().toggleBold().run()}
								className={cn(editor.isActive('bold') && 'bg-muted text-muted-foreground')}
								aria-label='Toggle Bold'
								title='Bold'>
								<Bold />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Bold</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size='sm'
								pressed={editor.isActive('italic')}
								onPressedChange={() => editor.chain().focus().toggleItalic().run()}
								className={cn(editor.isActive('italic') && 'bg-muted text-muted-foreground')}
								aria-label='Toggle Italic'
								title='Italic'>
								<Italic />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Italic</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size='sm'
								pressed={editor.isActive('strike')}
								onPressedChange={() => editor.chain().focus().toggleStrike().run()}
								className={cn(editor.isActive('strike') && 'bg-muted text-muted-foreground')}
								aria-label='Toggle Strike'
								title='Strike'>
								<Strikethrough />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Strike</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size='sm'
								pressed={editor.isActive('heading', { level: 1 })}
								onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
								className={cn(editor.isActive('heading', { level: 1 }) && 'bg-muted text-muted-foreground')}>
								<Heading1Icon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Heading 1</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size='sm'
								pressed={editor.isActive('heading', { level: 2 })}
								onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
								className={cn(editor.isActive('heading', { level: 2 }) && 'bg-muted text-muted-foreground')}
								aria-label='Toggle Heading 2'
								title='Heading 2'>
								<Heading2Icon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Heading 2</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size='sm'
								pressed={editor.isActive('heading', { level: 3 })}
								onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
								className={cn(editor.isActive('heading', { level: 3 }) && 'bg-muted text-muted-foreground')}
								aria-label='Toggle Heading 3'
								title='Heading 3'>
								<Heading3Icon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Heading 3</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size='sm'
								pressed={editor.isActive('bulletList')}
								onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
								className={cn(editor.isActive('bulletList') && 'bg-muted text-muted-foreground')}
								aria-label='Toggle Bullet List'
								title='Bullet List'>
								<ListIcon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Bullet List</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size='sm'
								pressed={editor.isActive('orderedList')}
								onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
								className={cn(editor.isActive('orderedList') && 'bg-muted text-muted-foreground')}
								aria-label='Toggle Ordered List'
								title='Ordered List'>
								<ListOrdered />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Ordered List</TooltipContent>
					</Tooltip>
				</div>

				<div className='w-px h-6 bg-border mx-2'></div>

				<div className='flex flex-wrap gap-1'>
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size='sm'
								pressed={editor.isActive({ textAlign: 'left' })}
								onPressedChange={() => editor.chain().focus().setTextAlign('left').run()}
								className={cn(editor.isActive({ textAlign: 'left' }) && 'bg-muted text-muted-foreground')}
								aria-label='Toggle Align Left'
								title='Align Left'>
								<AlignLeft />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Align Left</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size='sm'
								pressed={editor.isActive({ textAlign: 'center' })}
								onPressedChange={() => editor.chain().focus().setTextAlign('center').run()}
								className={cn(editor.isActive({ textAlign: 'center' }) && 'bg-muted text-muted-foreground')}
								aria-label='Toggle Align Center'
								title='Align Center'>
								<AlignCenter />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Align Center</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								size='sm'
								pressed={editor.isActive({ textAlign: 'right' })}
								onPressedChange={() => editor.chain().focus().setTextAlign('right').run()}
								className={cn(editor.isActive({ textAlign: 'right' }) && 'bg-muted text-muted-foreground')}
								aria-label='Toggle Align Right'
								title='Align Right'>
								<AlignRight />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>Align Right</TooltipContent>
					</Tooltip>
				</div>

				<div className='w-px h-6 bg-border mx-2'></div>

				<div className='flex flex-wrap gap-1'>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								size='sm'
								variant='ghost'
								type='button'
								onClick={() => editor.chain().focus().undo().run()}
								disabled={!editor.can().undo()}>
								<Undo />
							</Button>
						</TooltipTrigger>
						<TooltipContent>Undo</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								size='sm'
								variant='ghost'
								type='button'
								onClick={() => editor.chain().focus().redo().run()}
								disabled={!editor.can().redo()}>
								<Redo />
							</Button>
						</TooltipTrigger>
						<TooltipContent>Redo</TooltipContent>
					</Tooltip>
				</div>
			</TooltipProvider>
		</div>
	);
}
