import ArticleHeader from './Article-Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby, faFaceAngry, faTable } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ArticleSection from './Article-Section'

const Article: React.FC = () => {
	return (
		<div className='article'>
			<h1 className='article__title'>معرفی بهترین سایت آموزش جاوا اسکریپت [ تجربه محور ] + آموزش رایگان</h1>
			<ArticleHeader />
			<img src='/images/blog/1.webp' alt='Article Cover' className='article__banner' />
			<div className='article__score'>
				<div className='article__score-icons'>
					<img src='/images/svgs/star_fill.svg' className='article__score-icon' />
					<img src='/images/svgs/star_fill.svg' className='article__score-icon' />
					<img src='/images/svgs/star_fill.svg' className='article__score-icon' />
					<img src='/images/svgs/star_fill.svg' className='article__score-icon' />
					<img src='/images/svgs/star.svg' className='article__score-icon' />
				</div>
				<span className='article__score-text'>4.2/5 - (5 امتیاز)</span>
			</div>
			<p className='article__paragraph paragraph'>
				جاوا اسکریپت یکی از زبان‌های برنامه‌نویسی اصلی حوزه فرانت‌اند است که به واسطه فریم ورک‌های آن می‌توان
				انواع وب سایت‌ها، اپلیکیشن‌ها و وب اپلیکیشن‌ها را طراحی کرد. به طور کلی بعد از یادگیری html و css
				معمولاً باید آموزش جاوا اسکریپت را نیز فرا بگیرید. . چرا که این زبان تکمیل‌کننده html و css بوده و در
				چنین شرایطی موقعیت‌های شغلی بیشتر را در اختیار خواهید داشت و همچنین می‌توانید پروژه‌های گسترده‌تری را
				انجام دهید. در حال حاضر با وجود منابع رایگان موجود در وب شما به راحتی می‌توانید زبان جاوا اسکریپت را به
				صورت حرفه‌ای فرا بگیرید. به همین واسطه در ادامه مطلب قصد داریم سایت‌های شاخص آموزش این زبان برنامه‌نویسی
				در جهان را به شما معرفی کنیم و در آخر بگوییم که بهترین سایت آموزش جاوا اسکریپت کدام است.
			</p>
			<div className='article-read'>
				<span className='article-read__title'>آنچه در این مقاله خواهید خواند</span>
				<ul className='article-read__list'>
					<li className='article-read__item'>
						<Link to='/' className='article-read__link'>
							معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:
						</Link>
					</li>
					<li className='article-read__item'>
						<Link to='/' className='article-read__link'>
							یک راه آسان‌تر، دوره‌ های جاوا اسکریپت آکادمی سبزلرن!
						</Link>
					</li>
					<li className='article-read__item'>
						<Link to='/' className='article-read__link'>
							ثبت نام در دوره‌ های جاوا اسکریپت سبزلرن:
						</Link>
					</li>
				</ul>
			</div>
			<img src='images/blog/2.webp' alt='Article Image' className='article__seconadary-banner' />
			<ArticleSection
				title='معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:'
				description='توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان و به زبان فارسی این زبان را یاد بگیرید.'>
				<img src='/images/blog/2.webp' alt='article body img' className='article-section__img' />
			</ArticleSection>
			<ArticleSection
				title='معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:'
				description='توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان و به زبان فارسی این زبان را یاد بگیرید.'>
				<img src='/images/blog/1.webp' alt='article body img' className='article-section__img' />
			</ArticleSection>
			<div className='article-social-media'>
				<span className='article-social-media__text'>اشتراک گذاری :</span>
				<Link to='/' className='article-social-media__link'>
					<FontAwesomeIcon icon={faTable} className='article-social-media__icon' />
				</Link>
				<Link to='/' className='article-social-media__link'>
					<FontAwesomeIcon icon={faBaby} className='article-social-media__icon' />
				</Link>
				<Link to='/' className='article-social-media__link'>
					<FontAwesomeIcon icon={faFaceAngry} className='article-social-media__icon' />
				</Link>
			</div>
		</div>
	)
}

export default Article
