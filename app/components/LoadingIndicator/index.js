/**
*
* LoadingIndicator
*
*/

import React from 'react';
import { Spin, Icon } from 'antd';
import styled from 'styled-components';

const Div = styled.div`
position: fixed;
top: 50%;
left: 50%;
/* bring your own prefixes */
transform: translate(-50%, -50%);

`;

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

function LoadingIndicator() {
  return (
    <Div>
      <Spin indicator={antIcon} />
    </Div>
  );
}

LoadingIndicator.propTypes = {

};

export default LoadingIndicator;
