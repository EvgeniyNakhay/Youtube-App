import { Button, Layout, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import logo from './auth-img/logo.svg';
import React, {useState} from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';

const Authorization = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const clickEnter = async (e) => {
    e.preventDefault();

    try{
     const result = await fetch(
      "https://first-node-js-app-r.herokuapp.com/api/auth/login",
      {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          email: email, 
          password: password,
        })
      }
    )
    const data = await result.json();
    if(!data.token){
      throw new Error(data.message)
    } else {
      localStorage.setItem('token', data.token);
      navigate("/")
    }
    } catch(error){
      alert("Неправильный логин или пароль!")
    }
  };

  return (
    <Layout className="layout">
      <Form
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        style={{
          background: '#fff',
          padding: '40px 88px 60px',
          border: '1px solid rgba(39, 39, 39, 0.1)',
          borderRadius: '5px',  
        }}  
      > 
        <Form.Item style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={logo} alt = 'logo'/>
        </Form.Item >
          <h1 className="main-label">Вход</h1>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Введите логин!',
            },
          ]}
          style={{marginBottom: '30px'}}
        >
          <Input 
            prefix={<UserOutlined className="site-form-item-icon" />} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Логин"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Введите пароль!',
            },
          ]}
          style={{marginBottom: '30px'}}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={(e) => clickEnter(e)}
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </Layout>  
  )
};

export default Authorization;
