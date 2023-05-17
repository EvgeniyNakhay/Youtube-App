import {Layout} from 'antd';
import React from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import MainInput  from '../../components/MainInput/MainInput';

const MainPage = () => {
  return (
  <Layout
    style = {{
      height: '100vh'
    }}
  >
    <MainHeader/>
    <MainInput/>
  </Layout>
  )
};

export default MainPage;