import Home from "../pages/Home/Home"
import BasicLayout from "../layout/BasicLayout"
import CataloguePage from "../pages/CataloguePage/CataloguePage"

const route = [
	{
		path: "/",
		layout: BasicLayout,
		component: Home,
		exact: true,
	},
	{
		path: "/catalogue",
		layout: BasicLayout,
		component: CataloguePage,
		exact: true,
	},
]

export default route
