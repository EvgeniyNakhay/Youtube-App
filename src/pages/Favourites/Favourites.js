import {Layout, List, Button } from 'antd';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import './style.css';
import MainHeader from '../../components/MainHeader/MainHeader';
import {useDispatch, useSelector} from "react-redux";
import { setIsEditModalOpen } from '../../redux/actions/isEditModalOpen';
import EditModalWind from '../../components/ModalWind/EditModalWind'
import { addToFavourites, deleteFavRequest } from '../../redux/actions/favouritesAction';
import { activeFavRequest } from '../../redux/actions/activeFavRequest';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setSearchTerm } from '../../redux/actions/searchTermAction';
const { Content} = Layout;

const Favourites = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState(null)
  const favourites = useSelector((store) => store.favourites);
  const isEditModalOpen = useSelector((store) => store.isEditModalOpen)
  const dispatch = useDispatch();

  const handleEdit = (id, searchTerm, favRequest, sortByF, maxResult) => {
    dispatch(activeFavRequest(id, searchTerm, favRequest, sortByF, maxResult));
    dispatch(setIsEditModalOpen(true));
  }

  const searchFavRequest = (id, searchTerm, favRequest, sortByF, maxResult) => {
    dispatch(activeFavRequest(id, searchTerm, favRequest, sortByF, maxResult));
    dispatch(setSearchTerm(searchTerm))
    navigate(`/search/${searchTerm}`)
  }

  return <>
    <Layout style={{height: '100vh'}}>
      <MainHeader/>
        <>
          <Content 
            style={{
              height: '100vh',
              paddingInline: '200px',
            }}
          >
            <Content>
              <h1 
                style={{
                  fontSize: '36px',
                  marginTop: '40px',
                }}>
                Избранное 
              </h1>
            </Content> 
            <List 
              style={{
                background: '#FFF'
              }}
              size="large"
              dataSource={favourites}
              renderItem={(item) =>
                <List.Item style={{justifyContent: 'space-between'}}>
                  <Button
                    type="text" 
                    style={{fontWeight: 500,color: '#000000', padding: 0}}
                    onClick={() => searchFavRequest(item.id, item.searchTerm, item.favRequest, item.sortByF, item.maxResult)}
                  >
                    {item.favRequest}
                  </Button>
                  <div>
                    <Button onClick = {() => handleEdit(item.id, item.searchTerm, item.favRequest, item.sortByF, item.maxResult)} style={{marginLeft: 20}} type="primary" icon={<EditOutlined />} />
                    <Button onClick = {() => dispatch(deleteFavRequest(item.id))} style={{marginLeft: 20}} type="primary" icon={<DeleteOutlined />} />
                    </div>
                  </List.Item>
              }
            />  
          </Content>
          {isEditModalOpen && <EditModalWind/>}
      </>    
    </Layout> 
  </>
};

export default Favourites;