import { toFarsiNumber } from '../../../../helper/number'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

type Props = {
	progress: number
}

const CourseProgress: React.FC<Props> = ({ progress }) => {
	return (
		<div className='course-progress'>
			<div className='course-progress__header'>
				<FontAwesomeIcon icon={faChartLine} className='course-progress__icon' />
				<span className='course-progress__title'>درصد پیشرفت دوره: {toFarsiNumber(progress)}%</span>
			</div>
			<div className='progress course-progress__bar'>
				<div
					className='progress-bar progress-bar-striped progress-bar-animated'
					role='progressbar'
					aria-label='Animated striped example'
					aria-valuenow={75}
					aria-valuemin={0}
					aria-valuemax={100}
					style={{ width: `${progress}%` }}
				/>
			</div>
		</div>
	)
}

export default CourseProgress
