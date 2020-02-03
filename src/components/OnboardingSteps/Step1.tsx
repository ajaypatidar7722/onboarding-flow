import React, { SyntheticEvent } from 'react';
import { Row, Col, Form } from 'antd';
import Button from '../Button';
import Input from '../Input';
import * as formRules from '../../utils/formRules';

const styles = {
  buttonWrapper: {
    padding: 15,
  },
  form: {
    marginTop: 25,
  },
  formItem: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    marginBottom: 0,
  },
};

const Step1Form = ({ form, onSubmit }: any) => {
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
    <Form style={styles.form} onSubmit={handleSubmit}>
      <Row gutter={8}>
        <Col md={12} xs={24}>
          <Form.Item label="First Name">
            {getFieldDecorator('firstName', {
              rules: formRules.firstName,
            })(<Input type="text" />)}
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item label="Last Name">
            {getFieldDecorator('lastName', {
              rules: formRules.lastName,
            })(<Input type="text" />)}
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Email">
            {getFieldDecorator('email', {
              rules: formRules.email,
            })(<Input type="text" />)}
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Phone number">
            {getFieldDecorator('phone', {
              rules: formRules.phoneNumber,
            })(<Input type="number" />)}
          </Form.Item>
        </Col>
        <Col span={24} style={styles.buttonWrapper}>
          <Button type="primary" htmlType="submit">
            Continue
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

const Step1 = Form.create<any>({ name: 'step1Form' })(Step1Form);

export default Step1;
