import { Button, Form, Input } from "antd";
import type { FormProps } from "antd";

// define types for the form fields
type FieldType = {
  email?: string;
  password?: string;
  confirm_password?: string;
};

// define the props for the SignupForm component
interface SignupFormProps {
  onFinish: FormProps<FieldType>["onFinish"];
  onFinishFailed: FormProps<FieldType>["onFinishFailed"];
}

const PasswordCreateForm: React.FC<SignupFormProps> = ({
  onFinish,
  onFinishFailed,
}) => {
  return (
    <Form
      name="signup-form"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="!w-full !bg-white !rounded-lg !p-5 md:!p-7 !border-2 !border-gray-300"
    >
      {/* Password Field */}
      <Form.Item<FieldType>
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
      <Form.Item<FieldType>
        label="Confirm Password"
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
              return Promise.reject(new Error("Passwords does not match!"));
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Confirm your password"
          className="!h-[44px] md:!h-[48px] !rounded-md !border !border-gray-300 !bg-gray-50 !text-black placeholder:!text-sm"
        />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="!mb-0 !h-[44px] md:!h-[48px] !w-full !bg-black !font-bold md:!text-lg !text-white hover:!bg-black/80"
        >
          Create Account
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PasswordCreateForm;
