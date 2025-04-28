import { Button, Form, Input, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const ForgetPasswordForm = () => {
  const onFinish = (values: { email: string }) => {
    console.log("Email submitted:", values.email);
  };

  return (
    <Form
      name="forget-password-form"
      layout="vertical"
      onFinish={onFinish}
      className="!w-full !bg-white !rounded-lg !p-5 md:!p-7"
    >
      <Title level={5} className="!text-center">
        Forgot your password?
      </Title>
      <Paragraph className="!text-md !text-gray-500 !text-center">
        Enter your email address below and we will send you a link to reset your
        password.
      </Paragraph>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email address!" },
        ]}
      >
        <Input
          placeholder="Enter your email"
          className="!h-[44px] md:!h-[48px] !rounded-md !border !border-gray-300 !bg-gray-50 !text-black placeholder:!text-sm"
        />
      </Form.Item>

      <Form.Item style={{ marginBottom: 0 }}>
        <Button
          type="primary"
          htmlType="submit"
          className="!mb-0 !h-[44px] md:!h-[48px] !w-full !bg-black !font-bold md:!text-lg !text-white hover:!bg-black/80"
        >
          Send Reset Link
        </Button>
      </Form.Item>

      <Row justify="center" className="!mt-5">
      <Link
        to="/signin"
        className="!text-sm !font-normal !text-black hover:!cursor-pointer"
      >
       Back to Sign In
      </Link>
    </Row>
    </Form>
  );
};

export default ForgetPasswordForm;
