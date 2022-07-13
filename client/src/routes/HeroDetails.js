import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { fetchHero } from "../utils/API";

export default function HeroDetails() {
	let { id } = useParams();

	const [hero, setHero] = useState();

	useEffect(() => {
		fetchHero(id)
			.then((data) => setHero(data[0]))
			.catch((err) => console.error(err));
	}, []);

	if (!hero) return;

	return (
		<div>
			<div>
				<img
					src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
					alt="hero image full size"
				/>
				<div>
					<h4>Name</h4>
					<p>{hero.name}</p>
					{hero.description ? (
						<>
							<h4>Description</h4>
							<p>{hero.description}</p>
						</>
					) : null}
					<div>
						<h4>Series</h4>
						<ul>
							{hero.series.items.map((s) => (
								<li key={Math.random() * 1000}>{s.name}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
