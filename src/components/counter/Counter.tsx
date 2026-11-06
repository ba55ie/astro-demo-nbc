import { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { $count, decrement, increment } from './store.ts';

export interface Props {
	count?: number;
}

export default function ReactCounter(props: Props) {
	const count = useStore($count);
	const [isInteractive, setIsInteractive] = useState(false);

	useEffect(() => {
		if (props.count !== undefined && $count.get() !== props.count) {
			$count.set(props.count);
		}

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
					onClick={decrement}
					aria-label="Decrement"
				>
					−
				</button>

				<output style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
					{isInteractive ? count : (props.count ?? count)}
				</output>

				<button
					type="button"
					disabled={!isInteractive}
					onClick={increment}
					aria-label="Increment"
				>
					+
				</button>
			</div>
		</article>
	);
}
