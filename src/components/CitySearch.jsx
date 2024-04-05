import React, { useEffect, useState } from 'react';
const CitySearch = ({ allLocations }) => {
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [query, setQuery] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		setSuggestions(allLocations);
	}, [`${allLocations}`]);

	const handleInputChanged = (event) => {
		const value = event.target.value;
		const filteredLocations = allLocations
			? allLocations.filter((location) => {
					return (
						location.toUpperCase().indexOf(value.toUpperCase()) > -1
					);
			  })
			: [];

		setQuery(value);
		setSuggestions(filteredLocations);
	};

	const handleItemClicked = (event) => {
		const value = event.target.textContent;
		setQuery(value);
		// to hide the list
		setShowSuggestions(false);
	};

	return (
		<div id="city-search">
			<input
				type="text"
				className="city"
				placeholder="Search for a city"
				value={query}
				onFocus={() => setShowSuggestions(true)}
				onChange={handleInputChanged}
			/>
			{showSuggestions ? (
				<ul className="suggestions">
					{suggestions.map((suggestion) => {
						return (
							<li onClick={handleItemClicked} key={suggestion}>
								{suggestion}
							</li>
						);
					})}
					<li onClick={handleItemClicked} key="See all cities">
						<b>See all cities</b>
					</li>
				</ul>
			) : null}
		</div>
	);
};

export default CitySearch;