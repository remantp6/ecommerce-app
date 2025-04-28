import { Row, Col } from "antd";
import ForgetPasswordForm from "../components/ForgetPasswordForm";
import NavLayout from "../components/main-layout/NavLayout";

const ForgetPassword = () => {
  return (
    <NavLayout>
      <Row
        style={{ minHeight: "calc(100vh - 165px)", backgroundColor: "#f0f2f5" }}
        className="!px-4 lg:!px-6 !flex !justify-center !items-center"
      >
        <Col xs={24} sm={18} md={12} lg={8}>
          <ForgetPasswordForm />
        </Col>
      </Row>
    </NavLayout>
  );
};

export default ForgetPassword;
