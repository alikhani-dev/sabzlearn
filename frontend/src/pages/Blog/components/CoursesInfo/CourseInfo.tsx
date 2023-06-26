type Props = { title: string }

const CourseInfo: React.FC<React.PropsWithChildren<Props>> = ({ title, children }) => {
	return (
		<div className='course-info'>
			<span className='course-info__courses-title'>{title}</span>
			{children}
		</div>
	)
}

export default CourseInfo
