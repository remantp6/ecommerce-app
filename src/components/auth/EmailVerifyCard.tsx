import React from "react";
import { Button, Typography, Image } from "antd";
import { Link, useNavigate } from "react-router-dom";
import email from "../../assets/email.png";

const { Title, Paragraph } = Typography;

const VerifyEmailCard: React.FC = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/add-password");
  };

  return (
    <div className="w-full bg-white rounded-lg px-5 pb-5 md:pb-7 border-2 border-gray-300">
      <div
        className="flex flex-col items-center p-5 md:p-7"
        style={{ borderBottom: "1px solid #E4E7EC" }}
      >
        <Image
          preview={false}
          width={100}
          height={100}
          src={email}
          alt="Verify Email Image"
        />
        <Title
          level={1}
          className="!mb-2 !text-center !text-[20px] !font-bold !leading-[30px]"
          style={{ color: "#101828" }}
        >
          Verify your email
        </Title>
        <Paragraph className="!text-center !text-[14px] md:!text-[16px] !text-gray-500 !mb-0">
          Thank you, we've sent an email to <b>xyz@gmail.com</b> with a link to
          activate your account.
        </Paragraph>
      </div>

      <div className="flex flex-col gap-3 pt-4 md:pt-6">
        <Button
          type="primary"
          htmlType="button"
          onClick={handleSkip}
          block
          className="!h-[44px] md:!h-[48px] !bg-black !font-bold md:!text-lg !text-white hover:!bg-black/80"
        >
          Skip for now
        </Button>
        <div className="flex items-center justify-center text-[14px] font-medium text-gray-500 mt-2">
          Didn't receive an email?{" "}
          <Link
            to="/forget-password"
            className="!ml-1 !text-[14px] !font-medium !text-black !underline"
          >
            Resend
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailCard;
