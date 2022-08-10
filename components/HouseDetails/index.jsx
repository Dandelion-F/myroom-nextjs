import React, { useEffect } from 'react';
import { Col, Row, BackTop } from '@douyinfe/semi-ui';
import { IconArrowLeft, IconArrowUp } from '@douyinfe/semi-icons';
import { getHouseInfo } from '../../api/request';
import { useRequest } from 'ahooks';
// import ModeSwitch from './ModeSwitch';
import HouseCarousel from './HouseCarousel';
import HouseData from './HouseData';
import HouseManager from './HouseManager';
import HouseTest from './HouseTest';
import HouseAssess from './HouseAssess';
import HouseNeighbor from './HouseNeighbor';
import HousePrice from './HousePrice';
import HouseSource from './HouseSource';
import HouseNeighborSource from './HouseNeighborSource';
import HouseFooter from './HouseFooter';

function noop(){
  return {}
}

const useNavigate = noop
const useLocation = noop
const useParams = noop

import axios from 'axios';

if (typeof window !== 'undefined' && window.matchMedia) {
  const mql = window.matchMedia('(prefers-color-scheme: dark)');

  function matchMode(e) {
    const body = document.body;
    if (e.matches) {
      if (!body.hasAttribute('theme-mode')) {
        body.setAttribute('theme-mode', 'dark');
      }
    } else {
      if (body.hasAttribute('theme-mode')) {
        body.removeAttribute('theme-mode');
      }
    }
  }

  mql.addListener(matchMode);
  matchMode(mql);
}

const arrowCommonStyle = {
  backgroundColor: '#fff',
  width: 30,
  height: 30,
  borderRadius: 15,
  lineHeight: '30px',
  boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
};

export default function HomeDetail(props) {
  let { pid } = props;
  let { id: _id } = useParams();
  const id = 103612;

  // const { data: _data, loading } = useRequest(() => axios.get('/api/house', {
  //   params: {
  //     id,
  //   }
  // }), {
  //   refreshDeps: [id],
  //   loadingDelay: 100,
  // });

  const loading = false

  const data = props.data.data
  // console.log(data)

  useEffect(() => {
    setTimeout(() => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, 100);
  }, [id]);

  // const path = useLocation().pathname.split('/')[1];
  const path = 'houseDetails';
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (path === 'activity') {
      navigate('/');
    } else if (path === 'houseDetails') {
      navigate(`/activity/${id}`);
    }
  };

  return (
    <Row className="home-detail-container">
      <Col xs={24} lg={{ span: 12, offset: 6 }}>
        {/* <ModeSwitch></ModeSwitch> */}
        <HouseCarousel loading={loading}></HouseCarousel>
        <div>
          <HouseData data={data} loading={loading}></HouseData>
          <HouseManager loading={loading}></HouseManager>
          <HouseTest loading={loading}></HouseTest>
          <HouseAssess loading={loading}></HouseAssess>
          <HouseNeighbor loading={loading}></HouseNeighbor>
          <HousePrice loading={loading}></HousePrice>
          <HouseSource loading={loading}></HouseSource>
          <HouseNeighborSource loading={loading}></HouseNeighborSource>
        </div>
        <HouseFooter loading={loading}></HouseFooter>
      </Col>
      <BackTop
        style={{
          top: 15,
          left: 10,
          right: 'auto',
          bottom: 'auto',
          ...arrowCommonStyle,
          backgroundColor: '#fd972a',
          color: 'white',
        }}
        onClick={handleNavigate}
        visibilityHeight={-1}
      >
        <IconArrowLeft />
      </BackTop>
      <BackTop
        style={{
          right: 15,
          bottom: 120,
          ...arrowCommonStyle,
          backgroundColor: '#fd972a',
          color: 'white',
        }}
      >
        <IconArrowUp />
      </BackTop>
    </Row>
  );
}
