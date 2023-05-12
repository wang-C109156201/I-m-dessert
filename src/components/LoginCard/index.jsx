import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

// import { remember } from "../../redux/usersSlice";
import { useSignInWithEmailPassword } from "../../react-query";
// import { selectIsRemember } from "../../redux/usersSlice";

import styles from './logincard.module.css';


const LoginCard = ({ redirect }) => {

  const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword();
  // const isRemember = useSelector(selectIsRemember);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    mutate(values);
  };

  // const onChange = (e) => {
  //   dispatch(remember(e.target.checked));
  // };

  useEffect(() => {
    if (isSuccess) {
      navigate(redirect);
    }
  }, [isSuccess, redirect]);

  return (
    <div className={styles.layout}>
      <img
        className={styles.logImage}
        src="/images/log-img.png"
        alt="news1" />
        <div className={styles.logImg}></div>
      <Form
        name="normal_login"
        className={styles.loginForm}
        form={form}
        // initialValues={{
        //   isRemember: true,
        // }}
        onFinish={onFinish}
      // onFihishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "E-mail格式錯誤",
            },
            {
              required: true,
              message: "請輸入E-mail",
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="E-Mail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "請輸入密碼",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox >
              記得偶
            </Checkbox>
            {/* Checkbox的onchange目前是刪掉的因為remember無法使用 */}
          </Form.Item>

          <Link className={styles.loginForm__forgot} to={"/"}>
            忘記密碼
          </Link>
        </Form.Item>

        <Form.Item>
          {isLoading ? (
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginForm__button}
              loading
            >
              Log in
            </Button>
          ) : (
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginForm__button}
            >
              Log in
            </Button>
          )}
          還不是會員嗎？<Link to={`/auth/register?redirect=${redirect}`}>點此加入</Link>
          {!isError ? (
            <></>
          ) : (
            <div className={styles.loginForm__errorWrap}>
              <h3 className={styles.loginForm__errorTitle}>
                <WarningOutlined />
                {"  "}There was a problem
              </h3>
              <p className={styles.loginForm__errorMessage}>{error.response.data.detail}</p>
            </div>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginCard;
