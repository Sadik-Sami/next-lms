import VerifyForm from './_components/VerifyForm';

export default function VerifyRequestPage({ searchParams }: { searchParams: { email?: string } }) {
	const email = searchParams.email ?? '';
	return <VerifyForm email={email} />;
}
