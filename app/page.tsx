'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/themeToggle';
import { authClient } from '@/lib/auth-client';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function Home() {
	const router = useRouter();
	const { data: session } = authClient.useSession();

	async function signOut() {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push('/');
					toast.success('Successfully logged out!');
				},
			},
		});
	}

	return (
		<div className='flex min-h-screen flex-col items-center justify-center'>
			<ThemeToggle />
			{session ? (
				<div>
					<p className='text-4xl'>Welcome back, {session.user.name}!</p>
					<Button onClick={signOut}>Logout</Button>
				</div>
			) : (
				<Link
					href='/login'
					className={buttonVariants({
						variant: 'outline',
					})}>
					<LogIn className='size-4' />
					login
				</Link>
			)}
		</div>
	);
}
