import Home from "../pages/Home/Home"
import BasicLayout from "../layout/BasicLayout"
import CatalogPage from "../pages/CatalogPage"
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
		component: CatalogPage,
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
