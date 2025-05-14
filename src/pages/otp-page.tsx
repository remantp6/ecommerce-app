import NavLayout from '../components/main-layout/NavLayout';
import { Col, Row } from 'antd';
import OtpForm, { FieldType } from '../components/auth/OtpForm';
import type { FormProps } from "antd";
import { useNavigate } from 'react-router-dom';

const OtpPage = () => {
  const navigate = useNavigate();
  
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Form Submitted:", values);
    navigate("/password-create");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Form Submission Failed:", errorInfo);
  };

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
            <OtpForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
          </Col>
        </Row>
      </div>
    </NavLayout>
  );
};

export default OtpPage;
