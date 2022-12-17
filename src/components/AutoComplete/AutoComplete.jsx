import './AutoComplete.css';
import { useState } from 'react';
import AutoCompleteItem from './AutoCompleteItem';
export default function AutoComplete({
	value,
	setValue,
	placeholder,
	onChange,
	options,
	setOptions,
	resultClick,
}) {
	const [optionsActive, setOptionsActive] = useState(false);
	return (
		<div className="autoComplete">
			<input
				className="input"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onClick={!optionsActive ? setOptionsActive(true) : undefined}
				onBlur={() => {
					setTimeout(() => {
						// setOptions([])
					}, 200);
				}}
			/>
			<ul>
				{options &&
					options.map(option => (
						<AutoCompleteItem
							key={option.id}
							option={option}
							setValue={setValue}
							setOptions={setOptions}
							resultClick={resultClick}
						/>
					))}
			</ul>
		</div>
	);
}
