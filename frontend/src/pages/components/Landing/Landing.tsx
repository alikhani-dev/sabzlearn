import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import TypewriterComponent from 'typewriter-effect'
import LandingItem from './Landing-item'
import './Landing.css'

const Landing: React.FC = () => {
	return (
		<section className='landing'>
			<div className='container'>
				<header>
					<h1 className='landing__title'>
						<TypewriterComponent
							options={{ loop: true }}
							onInit={typewriter => {
								typewriter
									.typeString('ما به هر قیمتی دوره آموزشی تولید نمی کنیم !')
									.start()
									.pauseFor(1500)
									.deleteAll()
									.typeString('آکادمی خصوصی سبزلرن')
									.start()
									.pauseFor(1500)
							}}
						/>
					</h1>
					<h2 className='landing__subtitle'>
						با آکادمی سبزلرن، برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن.
					</h2>
				</header>
				<form action='/search' method='get' className='landing__searchbar'>
					<label htmlFor='search' className='visually-hidden'>
						Search
					</label>
					<input
						type='search'
						id='search'
						name='q'
						placeholder='چه چیزی دوست داری یاد بگیری ...'
						className='landing__searchbar-input'
					/>
					<button type='submit' className='landing__searchbar-btn' aria-label='جستجو'>
						<FontAwesomeIcon icon={faSearch} className='landing__searchbar-icon' />
						<span className='visually-hidden'>Search</span>
					</button>
				</form>
				<div className='landing-status'>
					<LandingItem
						alt='student'
						count={31071}
						text='کاربر توی سبزلرن ثبت نام کردن'
						icon='/images/icon/student.svg'
					/>
					<LandingItem alt='book' count={40} text='دوره آموزشی داریم' icon='/images/icon/book.svg' />
					<LandingItem
						alt='timer'
						count={31320}
						text='دقیقه آموزش تولید کردیم'
						icon='/images/icon/timer.svg'
					/>
				</div>
			</div>
		</section>
	)
}

export default Landing
