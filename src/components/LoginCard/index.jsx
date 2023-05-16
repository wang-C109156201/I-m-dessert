// import React, { useEffect,useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { Form, Input, Button, Checkbox,Row,Col } from 'antd';
// import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

// // import { remember } from "../../redux/usersSlice";
// import { useSignInWithEmailPassword } from "../../react-query";
// // import { selectIsRemember } from "../../redux/usersSlice";

// import styles from './logincard.module.css';


// const LoginCard = ({ redirect }) => {

//   const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword();
//   // const isRemember = useSelector(selectIsRemember);
//   const [isRemember, setIsRemember] = useState(false);
//   const dispatch = useDispatch();
//   const [form] = Form.useForm();
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     console.log("Received values of form: ", values);
//     mutate(values);
//   };

//   // const onChange = (e) => {
//   //   dispatch(remember(e.target.checked));
//   // };

//   useEffect(() => {
//     if (isSuccess) {
//       navigate(redirect);
//     }
//   }, [isSuccess, redirect]);

//   return (
//     // <div className={styles.layout}>
//     <Row align="middle" style={{ width: "100%", margin: "auto", marginTop: "5rem" }}>
//       <img
//         // className={styles.logImage}
//         className={styles.logImg}
//         src="/images/log-img.png"
//         alt="log-img" />
//         {/* <div className={styles.logImage}></div> */}


//       <Form
//         name="normal_login"
//         className={styles.loginForm}
//         form={form}
//         // initialValues={{
//         //   isRemember: true,
//         // }}
//         onFinish={onFinish}
//       // onFihishFailed={onFinishFailed}
//       >
//         <h2 className={styles.layout}>登入</h2>
//         <Form.Item
//         className={styles.email}
//           name="email"
//           rules={[
//             {
//               type: "email",
//               message: "E-mail格式錯誤",
//             },
//             {
//               required: true,
//               message: "請輸入E-mail",
//             },
//           ]}
//           hasFeedback
//         >
//           <Input
//             prefix={<MailOutlined />}
//             placeholder="E-Mail"
//           />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: "請輸入密碼",
//             },
//           ]}
//           hasFeedback
//         >
//           <Input.Password
//             prefix={<LockOutlined />}
//             type="password"
//             placeholder="Password"
//           />
//         </Form.Item>
//         <Form.Item>
//           <Form.Item name="remember" valuePropName="checked" noStyle>
//             <Checkbox onChange={() => setIsRemember(!isRemember)} checked={isRemember} className={styles.Checktext}>
//               記得偶
//             </Checkbox>
//             {/* Checkbox的onchange目前是刪掉的因為remember無法使用 */}
//           </Form.Item>

//           <Link className={styles.loginForm__forgot} to={"/"}>
//             忘記密碼
//           </Link>
//         </Form.Item>

//         <Form.Item >
//           {isLoading ? (
//             <Button
//               type="primary"
//               htmlType="submit"
//               className={styles.loginForm__button}
//               loading
//               colorBgTextActive="#fff"
//             >
//               登入
//             </Button>
//           ) : (
//             <Button
//               type="primary"
//               htmlType="submit"
//               className={styles.loginForm__button}
//             >
//               登入
//             </Button>
//           )}
//           <div className={styles.textlayout}>
//           還不是會員嗎？&ensp;<Link className={styles.text} to={`/auth/register?redirect=${redirect}`}>點此加入</Link>
//           </div>
//           {!isError ? (
//             <></>
//           ) : (
//             <div className={styles.loginForm__errorWrap}>
//               <h3 className={styles.loginForm__errorTitle}>
//                 <WarningOutlined />
//                 {"  "}There was a problem
//               </h3>
//               <p className={styles.loginForm__errorMessage}>{error.response.data.detail}</p>
//             </div>
//           )}
//         </Form.Item>
//       </Form>
//       </Row>
//     // </div>
//   );
// };

// export default LoginCard;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

import { useSignInWithEmailPassword } from "../../react-query";

import styles from './logincard.module.css';


const LoginCard = ({ redirect }) => {

  const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword();
  const [isRemember, setIsRemember] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(redirect);
    }
  }, [isSuccess, redirect]);

  return (
    <Row align="middle" style={{ width: "100%", margin: "auto", marginTop: "6.5rem" }}>
      <img
        className={styles.logImg}
        src="/images/log-img.png"
        alt="log-img" />
      <Form
        name="normal_login"
        className={styles.loginForm}
        form={form}
        initialValues={{
          isRemember: true,
        }}
        onFinish={onFinish}
      // onFihishFailed={onFinishFailed}
      >
        <h2 className={styles.layout}>登入</h2>
        <Form.Item
          className={styles.email}
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
          <Link className={styles.loginForm__forgot} to={"/"}>
            忘記密碼
          </Link>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox onChange={() => setIsRemember(!isRemember)} checked={isRemember}>
              記得偶
            </Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          {isLoading ? (
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginForm__button}
              loading
            >
              登入
            </Button>
          ) : (
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginForm__button}
            >
              登入
            </Button>
          )}
          <div className={styles.textlayout}>
            還不是會員嗎？&ensp;<Link className={styles.text} to={`/auth/register?redirect=${redirect}`}>點此加入</Link>
          </div>
          {!isError ? (
            <div></div>
          ) : (
            <div className={styles.loginForm__errorWrap}>
              <h3 className={styles.loginForm__errorTitle}>
                <WarningOutlined />
                {"  "}發生錯誤
              </h3>
              <p className={styles.loginForm__errorMessage}>{error.message}</p>
            </div>
          )}
        </Form.Item>
      </Form>
    </Row>
  );
};

export default LoginCard;
