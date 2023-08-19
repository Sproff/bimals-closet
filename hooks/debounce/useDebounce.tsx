import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const useDebounce = <T extends unknown>(value: T, delay: number): T => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};

export { useDebounce };
