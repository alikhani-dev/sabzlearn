import { Link } from 'react-router-dom'
import { Footer, Header } from '../../layout'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLockOpen, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { LoginAPI } from '../../api/auth.api'
import ReCAPTCHA from 'react-google-recaptcha'
import { TEST_SITE_KEY } from '../../constant'
import { useState } from 'react'
import { useAuthQuery } from '../../hooks/useAuth.query'

type FormProps = LoginAPI & { saveMe: boolean }

const Login: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormProps>()
	const [isVerifyCaptcha, setIsVerifyCaptcha] = useState<string | null>(null)
	const loginQuery = useAuthQuery.login()

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const onSubmit = async ({ saveMe, ...data }: FormProps) => {
		await loginQuery.mutateAsync(data)
	}
	return (
		<>
			<Header />
			<section className='login-register'>
				<div className='login'>
					<span className='login__title'>ورود به حساب کاربری</span>
					<span className='login__subtitle'>خوشحالیم دوباره میبینیمت دوست عزیز :)</span>
					<div className='login__new-member'>
						<span className='login__new-member-text'>کاربر جدید هستید؟</span>
						<Link className='login__new-member-link' to='/register'>
							ثبت نام
						</Link>
					</div>
					<form className='login-form' onSubmit={handleSubmit(onSubmit)}>
						<div className='login-form__username'>
							<input
								{...register('identifier', { required: 'نام کاربری یا آدرس ایمیل الزامی است' })}
								className='login-form__username-input'
								type='text'
								placeholder='نام کاربری یا آدرس ایمیل'
								autoComplete='username'
							/>
							<FontAwesomeIcon icon={faUser} className='login-form__username-icon' />
						</div>
						{errors.identifier && <span className='h6 text-danger'>{errors.identifier.message}</span>}
						<div className='login-form__password'>
							<input
								{...register('password', { required: 'رمز عبور الزامی است' })}
								className='login-form__password-input'
								type='password'
								autoComplete='current-password'
								placeholder='رمز عبور'
							/>
							<FontAwesomeIcon icon={faLockOpen} className='login-form__password-icon' />
						</div>
						{errors.password && <span className='h6 text-danger'>{errors.password.message}</span>}
						<ReCAPTCHA sitekey={TEST_SITE_KEY} onChange={str => setIsVerifyCaptcha(str)} />
						<button
							className='login-form__btn'
							type='submit'
							disabled={isVerifyCaptcha === null || loginQuery.isLoading}>
							<FontAwesomeIcon icon={faSignOutAlt} className='login-form__btn-icon' />
							<span className='login-form__btn-text'>ورود</span>
						</button>
						<div className='login-form__password-setting'>
							<label className='login-form__password-remember'>
								<input
									{...register('identifier')}
									className='login-form__password-checkbox'
									type='checkbox'
								/>
								<span className='login-form__password-text'>مرا به خاطر داشته باش</span>
							</label>
							<label className='login-form__password-forget'>
								<Link className='login-form__password-forget-link' to='/'>
									رمز عبور را فراموش کرده اید؟
								</Link>
							</label>
						</div>
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

export default Login
