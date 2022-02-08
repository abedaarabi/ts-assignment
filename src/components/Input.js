import React from "react";
import { Form, InputNumber } from "antd";

export const Input = ({ side, value, onNumberChange }) => {
  return (
    <Form.Item label={`Side ${side}`}>
      <InputNumber value={value} onChange={onNumberChange} data-testid="side" />
    </Form.Item>
  );
};
