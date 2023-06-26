
type Props = { rating: number }

const StarRating: React.FC<Props> = ({ rating }) => {
	const stars = Array(5)
		.fill('')
		.map((_, index) => {
			if (index < rating) {
				return <img src='/images/svgs/star_fill.svg' alt='rating' className='course-box__star' key={index} />
			} else {
				return <img src='/images/svgs/star.svg' alt='rating' className='course-box__star' key={index} />
			}
		})

	return <div className='course-box__rating'>{stars}</div>
}

export default StarRating
