import Link from 'next/link';

export default async function ServerComponentNavigation({ children }: React.PropsWithChildren) {
	await new Promise(resolve => {
		setTimeout(resolve, 2500);
	});

	return (
		<section>
			<Link href="/">Root</Link>
			<Link href="/other-page">Other Page</Link>

			{children}
		</section>
	);
}
