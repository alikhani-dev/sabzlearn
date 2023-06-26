type Props = { title: string }

const FooterItem: React.FC<React.PropsWithChildren<Props>> = ({ title, children }) => {
	return (
		<div className='col-4'>
			<div className='footer-widgets__item'>
				<span className='footer-widgets__title'>{title}</span>
				{children}
			</div>
		</div>
	)
}

export default FooterItem
