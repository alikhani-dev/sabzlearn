import { faCopyright, faCrown, faGem, faLeaf } from '@fortawesome/free-solid-svg-icons'
import Item from './aboutUs-Item'
import './AboutUs.css'

const AboutUs: React.FC = () => {
	return (
		<div className='about-us'>
			<div className='container'>
				<div className='about-us__header'>
					<span className='about-us__title title'>ما چه کمکی بهتون میکنیم؟</span>
					<span className='about-us__subtitle'>از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست</span>
				</div>
				<div className='container'>
					<div className='row'>
						<Item
							description='با پشتیبانی و کیفیت بالا ارائه میده !'
							title='دوره های اختصاصی'
							icon={faCopyright}
						/>
						<Item
							description='به هر مدرسی رو نمیده. چون کیفیت براش مهمه !'
							title='اجازه تدریس'
							icon={faLeaf}
						/>
						<Item
							description='براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده'
							title='دوره پولی و رایگان'
							icon={faGem}
						/>
						<Item
							description='اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست'
							title='اهمیت به کاربر'
							icon={faCrown}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
