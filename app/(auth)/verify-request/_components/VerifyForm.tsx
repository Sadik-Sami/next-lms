'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { authClient } from '@/lib/auth-client';
import { Loader, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { toast } from 'sonner';

export default function VerifyForm({ email }: { email: string }) {
	const router = useRouter();
	const [otp, setOtp] = useState('');
	const [emailPending, startEmailTransition] = useTransition();
	const isOtpComplete = otp.length === 6;

	function verifyOTP() {
		startEmailTransition(async () => {
			await authClient.signIn.emailOtp({
				email,
				otp,
				fetchOptions: {
					onSuccess: () => {
						toast.success('Email verified successfully!');
						router.push('/');
					},
					onError: (error) => {
						toast.error(`Verification failed: ${error.error.message}`);
					},
				},
			});
		});
	}

	return (
		<Card className='w-full mx-auto'>
			<CardHeader className='text-center'>
				<CardTitle className='text-xl'>Please check your email</CardTitle>
				<CardDescription>
					We have sent a verification code to your email address. Please paste it below.
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6'>
				<div className='flex flex-col items-center space-y-2'>
					<InputOTP value={otp} onChange={setOtp} maxLength={6} autoFocus className='gap-2'>
						<InputOTPGroup>
							<InputOTPSlot index={0} />
							<InputOTPSlot index={1} />
							<InputOTPSlot index={2} />
						</InputOTPGroup>
						<InputOTPGroup>
							<InputOTPSlot index={3} />
							<InputOTPSlot index={4} />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>
					<p className='text-sm text-muted-foreground'>Enter the 6 digit code sent to your email</p>
				</div>
				<Button className='w-full' onClick={verifyOTP} disabled={emailPending || !isOtpComplete} variant='outline'>
					{emailPending ? (
						<>
							<Loader className='size-4 animate-spin' />
							<span>Verifying...</span>
						</>
					) : (
						<>
							<Send className='size-4' />
							Verify Email
						</>
					)}
				</Button>
			</CardContent>
		</Card>
	);
}
