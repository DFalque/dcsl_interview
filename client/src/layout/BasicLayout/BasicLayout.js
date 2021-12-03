import "./BasicLayout.scss"
import Nav from "../../components/Nav"
function BasicLayout(props) {
	const { children } = props
	return (
		<>
			<Nav />
			<main>{children}</main>
		</>
	)
}

export default BasicLayout
