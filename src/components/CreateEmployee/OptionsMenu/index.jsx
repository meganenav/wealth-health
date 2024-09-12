export default function OptionsMenu(props) {
	const dataOptions = props.data.map((data, index) =>
		<option key= { index } value={ data.abbreviation }>{ data.name }</option>
	)
	return (
		<>{ dataOptions }</>
	)
}