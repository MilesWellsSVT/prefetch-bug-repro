'use client';

export default function ClientComponent({ children }: React.PropsWithChildren) {
	return (
		<section>
			<h1>I am a client component</h1>

			{children}
		</section>
	);
}
