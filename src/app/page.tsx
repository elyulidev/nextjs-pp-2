"use client";

import Card from "@/components/Card";
import reviews from "./_assets/data";
import { useState } from "react";

export default function Home() {
	const [index, setIndex] = useState(0);

	const surpriseMe = () => {
		const random = Math.floor(Math.random() * reviews.length);
		console.log(random);
		if (random === index) {
			aux("next", index + 1);
		} else setIndex(random);
	};

	const nextReview = () => {
		aux("next", index + 1);
	};

	const prevReview = () => {
		aux("", index - 1);
	};

	const aux = (operation: string, temp: number) => {
		if (operation === "next") {
			if (temp <= reviews.length - 1) {
				setIndex(temp);
			} else setIndex(0);
		} else if (temp >= 0) {
			setIndex(temp);
		} else setIndex(reviews.length - 1);
	};

	return (
		<main className='flex min-h-screen items-center justify-center p-24'>
			<Card
				surpriseMe={surpriseMe}
				nextReview={nextReview}
				prevReview={prevReview}
				{...reviews[index]}
			/>
		</main>
	);
}
