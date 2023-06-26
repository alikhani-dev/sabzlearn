import { Footer, Header } from '../../layout'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faInfo, faLock, faLockOpen, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { registerApi } from '../../api/auth.api'
import { useAuth } from '../../context/AuthProvider'

type FormProps = {
	name: string
	email: string
	username: string
	password: string
	confirmPassword: string
}

const Register: React.FC = () => {
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormProps>()
	const { login } = useAuth()

	const onSubmit = async (data: FormProps) => {
		await registerApi(data).then(({ accessToken }) => {
			login(accessToken)
		})
	}

	return (
		<>
			<Header />
			<section className='login-register'>
				<div className='login register-form'>
					<span className='login__title'>ساخت حساب کاربری</span>
					<span className='login__subtitle'>خوشحالیم قراره به جمع ما بپیوندی</span>
					<div className='login__new-member'>
						<span className='login__new-member-text'>قبلا ثبت‌نام کرده‌اید؟ </span>
						<Link className='login__new-member-link' to='/login'>
							وارد شوید
						</Link>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className='login-form'>
						<div className='login-form__name'>
							<input
								{...register('name', { required: 'نام و نام خانوادگی الزامی است' })}
								className={`login-form__name-input ${errors.name ? 'border-danger' : ''}`}
								type='text'
								placeholder='نام و نام خانوادگی'
								autoComplete='name'
							/>
							<FontAwesomeIcon
								className={`login-form__name-icon ${errors.name ? 'text-danger' : ''}`}
								icon={faInfo}
							/>
						</div>
						{errors.name && <span className='h6 text-danger'>{errors.name.message}</span>}
						<div className='login-form__username'>
							<input
								{...register('username', { required: 'نام کاربری الزامی است' })}
								className={`login-form__username-input ${errors.username ? 'border-danger' : ''}`}
								type='text'
								placeholder='نام کاربری'
								autoComplete='username'
							/>
							<FontAwesomeIcon
								className={`login-form__username-icon ${errors.username ? 'text-danger' : ''}`}
								icon={faUser}
							/>
						</div>
						{errors.username && <span className='h6 text-danger'>{errors.username.message}</span>}
						<div className='login-form__email'>
							<input
								{...register('email', { required: ' پست الکترونیک الزامی است' })}
								className={`login-form__email-input ${errors.email ? 'border-danger' : ''}`}
								type='email'
								autoComplete='email'
								placeholder='پست الکترونیک'
							/>
							<FontAwesomeIcon
								className={`login-form__email-icon ${errors.email ? 'text-danger' : ''}`}
								icon={faEnvelope}
							/>
						</div>
						{errors.email && <span className='h6 text-danger'>{errors.email.message}</span>}
						<div className='login-form__password'>
							<input
								{...register('password', {
									required: 'کلمه عبور الزامی است',
									minLength: {
										message: 'حداقل طول رمز باید 8 کاراکتر باشد',
										value: 8
									}
								})}
								className={`login-form__password-input ${errors.password ? 'border-danger' : ''}`}
								type='password'
								placeholder='رمز عبور'
								autoComplete='new-password'
							/>
							<FontAwesomeIcon
								className={`login-form__password-icon ${errors.password ? 'text-danger' : ''}`}
								icon={faLock}
							/>
						</div>
						{errors.password && <span className='h6 text-danger'>{errors.password.message}</span>}
						<div className='login-form__confirmPassword'>
							<input
								{...register('confirmPassword', {
									required: 'تکرار کلمه عبور الزامی است',

									minLength: {
										message: 'حداقل طول رمز باید 8 کاراکتر باشد',
										value: 8
									},
									validate: value => {
										return (
											value === watch('password') || 'تکرار کلمه عبور با رمز عبور برابر نمی باشد'
										)
									}
								})}
								className={`login-form__confirmPassword-input ${
									errors.confirmPassword ? 'border-danger' : ''
								}`}
								type='password'
								placeholder='تکرار رمز عبور'
								autoComplete='new-password'
							/>
							<FontAwesomeIcon
								className={`login-form__confirmPassword-icon ${
									errors.confirmPassword ? 'text-danger' : ''
								}`}
								icon={faLockOpen}
							/>
						</div>
						{errors.confirmPassword && (
							<span className='h6 text-danger'>{errors.confirmPassword.message}</span>
						)}
						<button className='login-form__btn' type='submit'>
							<FontAwesomeIcon className='login-form__btn-icon' icon={faUserPlus} />
							<span className='login-form__btn-text'>عضویت</span>
						</button>
					</form>
					<div className='login__des'>
						<span className='login__des-title'>سلام کاربر محترم:</span>
						<ul className='login__des-list'>
							<li className='login__des-item'>
								لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس استفاده کنید.
							</li>
							<li className='login__des-item'>
								ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
							</li>
							<li className='login__des-item'>لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.</li>
						</ul>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Register
