import { Row, Col } from "antd";
import NavLayout from "../components/main-layout/NavLayout";
import AddPasswordForm from "../components/auth/AddPasswordForm";

const VerifyEmail = () => {
  return (
    <NavLayout>
      <div
        className="h-[calc(100dvh-133px)] bg-[#f0f2f5]"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Row justify="center" style={{ width: "100%" }}>
          <Col xs={24} sm={20} md={16} lg={8}>
            <AddPasswordForm />
          </Col>
        </Row>
      </div>
    </NavLayout>
  );
};

export default VerifyEmail;
