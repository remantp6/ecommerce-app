import { Row, Col } from "antd";
import NavLayout from "../components/main-layout/NavLayout";
import VerifyEmailCard from "../components/auth/EmailVerifyCard";

const VerifyEmail = () => {
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
            <VerifyEmailCard />
          </Col>
        </Row>
      </div>
    </NavLayout>
  );
};

export default VerifyEmail;
