import Home from "../pages/Home/Home"
import BasicLayout from "../layout/BasicLayout"
import CataloguePage from "../pages/CataloguePage/CataloguePage"
import PhonePage from "../pages/PhonePage/PhonePage"

const route = [
	{
		path: "/",
		layout: BasicLayout,
		component: Home,
		exact: true,
	},
	{
		path: "/catalog",
		layout: BasicLayout,
		component: CataloguePage,
		exact: true,
	},
	{
		path: "/phone/:id",
		layout: BasicLayout,
		component: PhonePage,
		exact: true,
	},
]

export default route
