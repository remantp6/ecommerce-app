import { Button, Form, Input, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import type { FormProps } from "antd";

// define types for the form fields
type FieldType = {
  email?: string;
};

// define the props for the SignupForm component
interface SignupFormProps {
  onFinish: FormProps<FieldType>["onFinish"];
  onFinishFailed: FormProps<FieldType>["onFinishFailed"];
}

const { Text } = Typography;

const SignUpForm: React.FC<SignupFormProps> = ({
  onFinish,
  onFinishFailed,
}) => {
  return (
    <Form
      name="signup-form"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="!w-full"
    >
      {/* Email Field */}
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input
          placeholder="Enter your email"
          className="!h-[44px] md:!h-[48px] !rounded-md !border !border-gray-300 !bg-gray-50 !text-black placeholder:!text-sm"
        />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="!mb-0 !h-[44px] md:!h-[48px] !w-full !bg-black !font-bold md:!text-lg !text-white hover:!bg-black/80"
        >
          Continue
        </Button>
      </Form.Item>

      {/* Login Link */}
      <Row className="!flex !justify-center !w-full">
        <Text className="!text-gray-500">Already have an account? </Text>
        <Link to="/login" className="!text-sm !font-normal !text-black !ml-1">
          Login here
        </Link>
      </Row>
    </Form>
  );
};

export default SignUpForm;
