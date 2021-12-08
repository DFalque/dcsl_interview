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
				<div className="ModalSimple__container__header">
					<h2 className="heading-primary--sub">{title}</h2>
				</div>
				{children}
			</div>
		</Modal>
	)
}

export default ModalSimple
