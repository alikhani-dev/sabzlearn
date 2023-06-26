import { Landing, Course, AboutUs, Popular, Articles } from './components'
import { Footer, Header } from '../layout'

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Landing />
			<Course />
			<AboutUs />
			<Popular />
			<Articles />
			<Footer />
		</>
	)
}

export default Home
