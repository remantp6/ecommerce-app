import { Col, Row } from "antd";
import NavLayout from "../components/main-layout/NavLayout";
import type { FormProps } from "antd";
import { useNavigate } from "react-router-dom";
import PasswordCreateForm from "../components/auth/PasswordCreateForm";

type FieldType = {
  password?: string;
  confirm_password?: string;
};

const PasswordCreatePage = () => {
  const navigate = useNavigate();

  // Form submission handler
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { password, confirm_password } = values;
    if (password && confirm_password) {
      //signupMutation.mutate({ email, password, confirm_password });
      navigate("/verify-email");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <NavLayout>
      <div
        className="h-[calc(100dvh-133px)]"
        style={{
          // minHeight: "calc(100vh - 165px)",
          backgroundColor: "#f0f2f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Row justify="center" style={{ width: "100%" }}>
          <Col xs={24} sm={20} md={16} lg={8}>
            <PasswordCreateForm
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            />
          </Col>
        </Row>
      </div>
    </NavLayout>
  );
};

export default PasswordCreatePage;
