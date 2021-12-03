import "./BasicLayout.scss"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

function BasicLayout(props) {
	const { children } = props
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default BasicLayout
