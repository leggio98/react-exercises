import { useMemo } from "react";

export function FilteredList({ listArray }) {
	const Over18Array = useMemo(() => {
		return listArray.filter((person) => person.age >= 18);
	}, [listArray]);

	return (
		<ul>
			{Over18Array.map((item) => (
				<li key={item.id + item.name}>
					Name: {item.name},age: {item.age}
				</li>
			))}
		</ul>
	);
}