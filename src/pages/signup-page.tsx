import { Col, Image, Row, Typography } from "antd";
import NavLayout from "../components/main-layout/NavLayout";
import main from "../assets/main.png";
import type { FormProps } from "antd";
import SignUpForm from "../components/auth/SignupForm";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../api/authApi";

type FieldType = {
  email?: string;
  password?: string;
  confirm_password?: string;
};

const SignUp = () => {

  // Mutation for signup
  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      alert(data.message);
    },
  });

  // Form submission handler
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { email, password, confirm_password } = values;
    if (email && password && confirm_password) {
      signupMutation.mutate({ email, password, confirm_password });
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <NavLayout>
      <Row className="!min-h-[calc(100dvh-133px)] !bg-[#f0f2f5] !px-4 lg:!px-6">
        {/* Left Side Image */}
        <Col
          xs={24}
          lg={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            //   padding: "20px"
          }}
        >
          <Image
            src={main}
            alt="signup_image"
            preview={false}
            className="md:!w-[630px] !h-[380px] md:!h-[600px] lg:!h-[700px]"
          />
        </Col>

        {/* Right Side Form */}
        <Col
          xs={24}
          lg={12}
          className="!flex !justify-center !items-center !mb-16 !mt-2 md:!mb-28 lg:!mb-0 md:!mt-0"
        >
          <Row className="!bg-white !p-4 lg:!p-8 !rounded-lg !flex !items-center !w-full max-w-[580px] !border-2 !border-gray-300">
            <Row className="!w-full !flex !flex-col !items-start !space-y-1">
              <Typography.Text className="!text-lg sm:!text-2xl !font-bold !text-black">
                Sign Up
              </Typography.Text>
              <Typography.Text className="!text-xs sm:!text-sm md:!text-[16px] !text-gray-500">
                Create a new account to get started.
              </Typography.Text>
            </Row>

            <Row className="!w-full !pt-4">
              <SignUpForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
            </Row>
          </Row>
        </Col>
      </Row>
    </NavLayout>
  );
};

export default SignUp;
