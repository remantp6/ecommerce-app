import React from "react";
import { Form, Input, Button, Typography } from "antd";
import type { FormProps } from "antd";

type PasswordFieldType = {
  password?: string;
  confirm_password?: string;
};

const { Title, Paragraph } = Typography;

const AddPasswordForm: React.FC = () => {
  const onFinish: FormProps<PasswordFieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<PasswordFieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
      <Form
        name="add-password-form"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="!w-full !bg-white !rounded-lg !p-5 md:!p-7 !border-2 !border-gray-300"
      >
        <div
          style={{ borderBottom: "1px solid #E4E7EC", marginBottom: "20px" }}
        >
          <Title level={5} className="!text-center">
            Add your password
          </Title>
          <Paragraph className="!text-center !text-[14px] md:!text-[16px] !text-gray-500 !mb-[20px]">
            A strong password for secure transactions
          </Paragraph>
        </div>
        {/* Password Field */}
        <Form.Item<PasswordFieldType>
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            {
              validator: (_, value) =>
                !value || value.length >= 8
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("Password must be at least 8 characters!")
                    ),
            },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="Enter your password"
            className="!h-[44px] md:!h-[48px] !rounded-md !border !border-gray-300 !bg-gray-50 !text-black placeholder:!text-sm"
          />
        </Form.Item>

        {/* Confirm Password Field */}
        <Form.Item<PasswordFieldType>
          label="Retype Password"
          name="confirm_password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Retype your password"
            className="!h-[44px] md:!h-[48px] !rounded-md !border !border-gray-300 !bg-gray-50 !text-black placeholder:!text-sm"
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
             className="!mb-0 !h-[44px] md:!h-[48px] !w-full !bg-black !font-bold md:!text-lg !text-white hover:!bg-black/80"
          >
            Add Password
          </Button>
        </Form.Item>
      </Form>
  );
};

export default AddPasswordForm;
