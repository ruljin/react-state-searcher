import { MutableRefObject, useEffect } from "react";

export function useOnClickOrFocusOutside(
	ref: MutableRefObject<HTMLDivElement | null>,
	handler: () => void
) {
	useEffect(() => {
		const listener = (event: MouseEvent | FocusEvent) => {
			const { target } = event;

			if (ref.current && !ref.current.contains(target as HTMLElement)) {
				handler();
			}
		};

		document.addEventListener("click", listener, true);
		document.addEventListener("focus", listener, true);

		return () => {
			document.removeEventListener("click", listener, true);
			document.removeEventListener("focus", listener, true);
		};
	}, [handler]);
}
