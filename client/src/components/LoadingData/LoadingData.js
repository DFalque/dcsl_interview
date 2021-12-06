import "./LoadingData.scss"
import CircularProgress from "@mui/material/CircularProgress"

function LoadingData() {
	return (
		<div style={{ display: "flex", width: "100%", height: "70vh" }}>
			<CircularProgress style={{ margin: "auto" }} />
		</div>
	)
}

export default LoadingData
