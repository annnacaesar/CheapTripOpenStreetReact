import './AutoComplete.css';
export default function AutoCompleteItem({
	option,
	setValue,
	setOptions,
	resultClick,
}) {
	return (
		<li
			className="item"
			onClick={() => {
				setValue(option.city);
				setOptions([]);
				resultClick({
					geometry: option.geometry,
					display_name: option.city,
				});
			}}
		>
			<p className="itemCity">{option.city}</p>
			<p className="itemCountry">{option.country}, {option.county}</p>
		</li>
	);
}
