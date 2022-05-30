import { useEffect } from "react";

export function useOnClickOrFocusOutside(ref: any, handler: any) {
	useEffect(() => {
		const listener = (event: any) => {
			if (ref.current && !ref.current.contains(event.target)) {
				handler(event);
			}
		};

		document.addEventListener("click", listener, true);
		document.addEventListener("focus", listener, true);

		return () => {
			document.removeEventListener("click", listener, true);
			document.removeEventListener("focus", listener, true);
		};
	}, [ref, handler]);
}
