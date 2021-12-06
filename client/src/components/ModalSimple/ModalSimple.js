import Modal from "@mui/material/Modal"
import "./ModalSimple.scss"

const ModalSimple = (props) => {
	const { show, setShow, title, children } = props

	const onClose = () => {
		setShow(false)
	}

	return (
		<Modal open={show} onClose={onClose} className="ModalSimple">
			<div className="ModalSimple__container">
				<h2>{title}</h2>
				{children}
			</div>
		</Modal>
	)
}

export default ModalSimple
