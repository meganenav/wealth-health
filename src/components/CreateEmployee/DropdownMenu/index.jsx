import OptionsMenu from "../OptionsMenu"

export default function DropdownMenu(props) {
	return (
		<select name= { props.name } id= { props.id } onChange={props.onChange}>
			<OptionsMenu data= { props.data } />
		</select>
	)
}