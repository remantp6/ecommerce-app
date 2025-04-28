import { Col, Image, Row, Typography } from "antd";
import NavLayout from "../components/main-layout/NavLayout";
import main from "../assets/main.png";
import type { FormProps } from "antd";
import LoginForm from "../components/LoginForm";

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

const Login = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Login form values:", values);
    // Implement your login logic here
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <NavLayout>
      <Row
        style={{ minHeight: "calc(100vh - 165px)", backgroundColor: "#f0f2f5" }}
        className="!px-4 lg:!px-6"
      >
        {/* Left Side Image */}
        <Col
          xs={24}
          md={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            //  padding: "20px"
          }}
        >
          <Image
            src={main}
            alt="login_image"
            preview={false}
            className="md:!w-[630px] !h-[380px] md:!h-[700px]"
          />
        </Col>

        {/* Right Side Form */}
        <Col
          xs={24}
          md={12}
          className="!flex !justify-center !items-center !mb-8 !mt-2 md:!mb-0 md:!mt-0"
        >
          <Row className="!bg-white !p-4 lg:!p-8 !rounded-lg !flex !items-center !w-full max-w-[580px]">
            <Row className="!w-full !flex !flex-col !items-start !space-y-1">
              <Typography.Text className="!text-lg sm:!text-2xl !font-bold !text-black">
                Sign In
              </Typography.Text>
              <Typography.Text className="!text-xs sm:!text-sm md:!text-[16px] !text-gray-500">
                Enter your credentials to access your account.
              </Typography.Text>
            </Row>

            <Row className="!w-full !pt-4">
              <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
            </Row>
          </Row>
        </Col>
      </Row>
    </NavLayout>
  );
};

export default Login;
