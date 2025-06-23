import { Col, Image, Row, Typography } from 'antd';
import NavLayout from '../components/main-layout/NavLayout';
import main from '../assets/main.png';
import type { FormProps } from 'antd';
import LoginForm from '../components/auth/LoginForm';
import { useLogin } from '../hooks/auth-hooks/useLogin';
import toast from 'react-hot-toast';
import { setSessionTokens } from '../utils/sessionStorage';
import { useNavigate } from 'react-router-dom';

type FieldType = {
	email: string;
	password: string;
	//remember?: boolean;
};

const Login = () => {
	const navigate = useNavigate();
	const loginMutation = useLogin();

	const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
		loginMutation.mutate(values, {
			onSuccess: (response) => {
				const { token, refresh_token } = response.data;
				setSessionTokens(token, refresh_token);
				toast.success('Login successful!');
				navigate('/');
			},
		});
	};

	const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<NavLayout>
			<Row className='!min-h-[calc(100dvh-133px)] !bg-[#f0f2f5] !px-4 lg:!px-6'>
				{/* Left Side Image */}
				<Col
					xs={24}
					lg={12}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						//  padding: "20px"
					}}
				>
					<Image
						src={main}
						alt='login_image'
						preview={false}
						className='md:!w-[630px] !h-[380px] md:!h-[700px]'
					/>
				</Col>

				{/* Right Side Form */}
				<Col
					xs={24}
					lg={12}
					className='!flex !justify-center !items-center !mb-16 !mt-2 md:!mb-28 lg:!mb-0 md:!mt-0'
				>
					<Row className='!bg-white !p-4 lg:!p-8 !rounded-lg !flex !items-center !w-full max-w-[580px] !border-2 !border-gray-300'>
						<Row className='!w-full !flex !flex-col !items-start !space-y-1'>
							<Typography.Text className='!text-lg sm:!text-2xl !font-bold !text-black'>
								Sign In
							</Typography.Text>
							<Typography.Text className='!text-xs sm:!text-sm md:!text-[16px] !text-gray-500'>
								Enter your credentials to access your account.
							</Typography.Text>
						</Row>

						<Row className='!w-full !pt-4'>
							<LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
						</Row>
					</Row>
				</Col>
			</Row>
		</NavLayout>
	);
};

export default Login;
