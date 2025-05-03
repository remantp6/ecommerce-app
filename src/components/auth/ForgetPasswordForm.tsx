import { Button, Form, Input, Row, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const ForgetPasswordForm = () => {
  const navigate = useNavigate();

  const onFinish = (values: { email: string }) => {
    console.log("Email submitted:", values.email);
    navigate("/verify-email");
  };

  return (
    <Form
      name="forget-password-form"
      layout="vertical"
      onFinish={onFinish}
      className="!w-full !bg-white !rounded-lg !p-5 md:!p-7 !border-2 !border-gray-300"
    >
      <div  style={{ borderBottom: "1px solid #E4E7EC", marginBottom: '20px'}}>
      <Title level={5} className="!text-center">
        Reset your password
      </Title>
      <Paragraph className="!text-center !text-[14px] md:!text-[16px] !text-gray-500 !mb-[20px]">
        Enter your email address below and we will send you a link to reset your
        password.
      </Paragraph>
      </div>

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
        to="/login"
        className="!text-sm !font-normal !text-black hover:!cursor-pointer"
      >
       Back to Sign In
      </Link>
    </Row>
    </Form>
  );
};

export default ForgetPasswordForm;
