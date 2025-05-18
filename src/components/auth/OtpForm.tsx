import { Button, Form, Input, Typography } from "antd";
import type { GetProps } from "antd";
import type { FormProps } from "antd";

type OTPProps = GetProps<typeof Input.OTP>;

const { Title, Paragraph } = Typography;
export interface FieldType {
  otp?: string;
}

interface OtpFormProps {
  onFinish: FormProps<FieldType>["onFinish"];
  onFinishFailed: FormProps<FieldType>["onFinishFailed"];
}

const OtpForm: React.FC<OtpFormProps> = ({ onFinish, onFinishFailed }) => {
  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };

  const onInput: OTPProps["onInput"] = (value) => {
    console.log("onInput:", value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  return (
    <Form
      name="otp-form"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="!w-full !bg-white !rounded-lg !p-5 md:!p-7 !border-2 !border-gray-300"
    >
      <div  style={{ borderBottom: "1px solid #E4E7EC", marginBottom: '20px'}}>
      <Title level={5} className="!text-center">
        Enter OTP
      </Title>
      <Paragraph className="!text-center !text-[14px] md:!text-[16px] !text-gray-500 !mb-[20px]">
        We've sent a 5-digit code to xyz@gmail.com. Enter it below to continue.
      </Paragraph>
      </div>
      <Form.Item name="otp" rules={[{ required: true, message: "Please input the OTP!" }]}>
        <Input.OTP
        length={5}
          separator={(i) => (
            <span style={{ color: i & 1 ? "red" : "blue" }}>—</span>
          )}
          {...sharedProps}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="!mb-0 !h-[44px] md:!h-[48px] !w-full !bg-black !font-bold md:!text-lg !text-white hover:!bg-black/80"
        >
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OtpForm;
