import { useRef, useEffect } from "react";

export function CarDetails({
	initialData = { model: "Fiat Panda", year: "1980", color: "red" },
}) {
	const { model, year, color } = initialData;

	const formRef = useRef();

	useEffect(() => {
		formRef.current.reset();
	}, [initialData]);

	return (
		<form ref={formRef}>
			<input name="model" defaultValue={model}></input>
			<input name="year" defaultValue={year}></input>
			<input name="color" defaultValue={color}></input>
		</form>
	);
}