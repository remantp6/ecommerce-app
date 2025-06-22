import { Button, Form, Input, Row, Typography } from 'antd';
import type { FormProps } from 'antd';
import { Link } from 'react-router-dom';

type FieldType = {
	email: string;
	password: string;
	// remember?: boolean;
};

interface LoginFormProps {
	onFinish: FormProps<FieldType>['onFinish'];
	onFinishFailed: FormProps<FieldType>['onFinishFailed'];
}

const { Text } = Typography;

const LoginForm: React.FC<LoginFormProps> = ({ onFinish, onFinishFailed }) => (
	<Form
		name='login-form'
		layout='vertical'
		onFinish={onFinish}
		onFinishFailed={onFinishFailed}
		initialValues={{ remember: true }}
		className='!w-full'
	>
		{/* Username Field */}
		<Form.Item<FieldType>
			label='Username'
			name='email'
			rules={[
				{ required: true, message: 'Please input your email!' },
				{ type: 'email', message: 'Please enter a valid email!' },
			]}
		>
			<Input
				placeholder='Enter your username'
				className='!h-[44px] md:!h-[48px] !rounded-md !border !border-gray-300 !bg-gray-50 !text-black placeholder:!text-sm'
			/>
		</Form.Item>

		{/* Password Field */}
		<Form.Item<FieldType>
			label='Password'
			name='password'
			rules={[{ required: true, message: 'Please input your password!' }]}
		>
			<Input.Password
				placeholder='Enter your password'
				className='!h-[44px] md:!h-[48px] !rounded-md !border !border-gray-300 !bg-gray-50 !text-black placeholder:!text-sm'
			/>
		</Form.Item>

		<Row justify='end' className='!mb-1'>
			<Link to='/forget-password' className='!text-sm !font-normal !text-black hover:!cursor-pointer'>
				Forget Password?
			</Link>
		</Row>

		{/* Remember Me */}
		{/* <Form.Item<FieldType> name="remember" valuePropName="checked">
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

		{/* Submit Button */}
		<Form.Item>
			<Button
				type='primary'
				htmlType='submit'
				className='!mb-0 !h-[44px] md:!h-[48px] !w-full !bg-black !font-bold md:!text-lg !text-white hover:!bg-black/80'
			>
				Log into Account
			</Button>
		</Form.Item>

		{/* Sign Up Link */}
		<Row className='!flex !justify-center !w-full'>
			<Text className='!text-gray-500'>Do not have an Account? </Text>
			<Link to='/signup' className='!text-sm !font-normal !text-black !ml-1'>
				Create account
			</Link>
		</Row>
	</Form>
);

export default LoginForm;
