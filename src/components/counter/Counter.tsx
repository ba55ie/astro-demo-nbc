import { useEffect, useState } from 'react';

export interface Props {
	count?: number;
}

export default function ReactCounter(props: Props) {
	const [count, setCount] = useState(props.count ?? 0);
	const [isInteractive, setIsInteractive] = useState(false);

	useEffect(() => {
		setIsInteractive(true);
	}, []);

	return (
		<article>
			<header>
				<strong>⚛️ React Counter</strong>
			</header>

			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: '1rem',
				}}
			>
				<button
					type="button"
					disabled={!isInteractive}
					onClick={() => setCount((c) => c - 1)}
					aria-label="Decrement"
				>
					−
				</button>

				<output style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
					{count}
				</output>

				<button
					type="button"
					disabled={!isInteractive}
					onClick={() => setCount((c) => c + 1)}
					aria-label="Increment"
				>
					+
				</button>
			</div>
		</article>
	);
}
