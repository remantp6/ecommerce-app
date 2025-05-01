import { Row, Col } from "antd";
import ForgetPasswordForm from "../components/ForgetPasswordForm";
import NavLayout from "../components/main-layout/NavLayout";

const ForgetPassword = () => {
  return (
    <NavLayout>
      <div
      className="h-[calc(100dvh-133px)]"
        style={{
          backgroundColor: "#f0f2f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Row justify="center" style={{ width: "100%" }}>
          <Col xs={24} sm={20} md={16} lg={8}>
            <ForgetPasswordForm />
          </Col>
        </Row>
      </div>
    </NavLayout>
  );
};

export default ForgetPassword;
