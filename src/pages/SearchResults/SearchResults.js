import {Layout, Input, Segmented} from 'antd';
import React, {useState, useEffect} from 'react';
import {HeartOutlined, AppstoreOutlined, BarsOutlined} from '@ant-design/icons';
import MainHeader from '../../components/MainHeader/MainHeader';
import ModalWind from '../../components/ModalWind/ModalWind';
import VideoList from '../../components/VideosView/VideoList';
import VideoCards from '../../components/VideosView/VideoCards';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalOpen } from '../../redux/actions/isModalOpen';
import {setRequestedVideos} from '../../redux/actions/requestedVideos';
import { setSearchTerm } from '../../redux/actions/searchTermAction';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
const { Content} = Layout;
const { Search } = Input;

const SearchResults = () => {
  const [list, setList] = useState(true);
  const dispatch = useDispatch();
  const searchTerm = useSelector((store) => store.searchTerm);
  const {maxResult, sortByF} = useSelector((store) => store.activeFavRequest)
  const [searchTermInput, setSearchTermInput] = useState(searchTerm);
  const requestedVideos = useSelector((store) => store.requestedVideos);
  const isModalOpen = useSelector((store) => store.isModalOpen);
  
  const api_key = "AIzaSyDuSa_snfrqupxMfqRmOU_NaH7utQtq988"
  const video_http = "https://www.googleapis.com/youtube/v3/videos";

  // const fakeDataUrl =
  // // 'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo'; 
  // // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=AIzaSyDuSa_snfrqupxMfqRmOU_NaH7utQtq988`;
  //    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchTermInput}&type=video&maxResults=12&key=${api_key}`
  
  // const appendData = () => {
  //   fetch(fakeDataUrl)
  //     .then((res) => res.json())
  //     .then((body) => {
  //       // dispatch(setRequestedVideos(requestedVideos.concat(body.results)));
  //       console.log(requestedVideos);
  //     });
  // };

  // useEffect(() => {
  //   appendData();
  // }, [requestedVideos]);

  useEffect(() => {
    console.log(maxResult)
    console.log(sortByF)
    fetchFromAPI(`search?part=snippet&q=${searchTerm}&type=video&key=${api_key}`)
    // fetchFromAPI(`search?part=snippet&order=${sortByF}&maxResults=${searchTerm}&q=${searchTerm}&type=video&key=${api_key}`)
      .then((data) => {
        dispatch(setRequestedVideos(data.items))
    })
  }, [searchTerm]);

  const showModal = () => {
    dispatch(setIsModalOpen(true));
  };

  const handleSearch = () => {
    dispatch(setSearchTerm(searchTermInput))
  };

  const suffix = (
    <HeartOutlined
      onClick={() => showModal()}
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  return <>
      <Layout>
        <MainHeader/>
        <Content 
          style={{
          height: '100%',
          marginInline: '200px',
          }}
        >
          <Content>
            <h1 
              style={{
              fontSize: '28px',
              marginTop: '40px',
              }}
            > 
              Поиск видео 
            </h1>
            <Search
              placeholder="Что хотите посмотреть?"
              enterButton="Найти"
              size="large"
              suffix={suffix}
              value = {searchTermInput}
              onChange={(e) => setSearchTermInput(e.target.value)}
              onSearch={handleSearch}
            />
          </Content> 
          <Content 
            style={{
            marginTop: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px'
            }}
          >
            <p
              style={{
              fontSize: '14px',
              marginBottom: 0,
              display: 'flex'
            }}
            >
              Видео по запросу <span style={{fontWeight:'bold', marginLeft:'5px', marginBottom:0}}>"{searchTerm}"</span>
            </p>
            <Segmented
              onChange={() => setList(!list)}
              options={[
                {
                  value: 'List',
                  icon: <BarsOutlined />,
                },
                {
                  value: 'Kanban',
                  icon: <AppstoreOutlined />,
                },
              ]}
            />
          </Content>
          {list ? <VideoList/> : <VideoCards/>}
        </Content>
      </Layout>
    {isModalOpen && <ModalWind/>}
  </>
};

export default SearchResults;