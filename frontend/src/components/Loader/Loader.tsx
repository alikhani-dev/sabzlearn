import { HashLoader } from 'react-spinners'
import './Loader.css'

const Loader: React.FC = () => {
	return (
		<div className='wrapper'>
			<HashLoader color='#15662c' size={100} />
		</div>
	)
}

export default Loader
