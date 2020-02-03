/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { SyntheticEvent } from 'react';
import { Row, Col, Form } from 'antd';
import Button from '../Button';
import Input from '../Input';
import * as formRules from '../../utils/formRules';

const Step2Form = ({ form, onSubmit }: any) => {
  const { getFieldDecorator } = form;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    form.validateFields((err: Error, values: any) => {
      if (!err) {
        onSubmit(values);
      }
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col span={24}>
            <Form.Item label="Which College did you go to?">
              {getFieldDecorator('college', {
                rules: formRules.collegeName,
              })(<Input type="text" />)}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="What was the last company you worked at?">
              {getFieldDecorator('lastCompany', {
                rules: formRules.lastCompany,
              })(<Input type="text" />)}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="How many years of experience do you have?">
              {getFieldDecorator('yearsOfExperience', {
                rules: formRules.yearsOfExperience,
              })(<Input type="number" />)}
            </Form.Item>
          </Col>
          <Col span={24} className="Continue_btn">
            <Button type="primary" htmlType="submit">
              Continue
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const Step2 = Form.create<any>({ name: 'step2Form' })(Step2Form);

export default Step2;
