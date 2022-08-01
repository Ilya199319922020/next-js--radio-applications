import { useState } from "react";

export const useMyBest = () => {
	const [activeMyBest, setActiveMyBest] = useState(false);

	const toggleMyBest = () => setActiveMyBest(!activeMyBest);

	return [activeMyBest, toggleMyBest]
}