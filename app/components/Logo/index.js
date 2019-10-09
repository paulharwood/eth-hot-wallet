/**
*
* Logo
*
*/

import React from 'react';
import styled from 'styled-components';
import { website } from 'utils/constants';
import walletLogo from './wallets.solo.circle.svg';

const Div = styled.div`
  height: 80px;
  font-size: 18px;
  line-height: 80px;
  text-align:left;
  margin-left: 20px;
`;

const Img = styled.img`
  height: 50px;
  line-height: 80px;
`;

function Logo() {
  return (
    <Div>
      <Img alt="logo" src={walletLogo} />
    </Div>
  );
}

Logo.propTypes = {

};

export default Logo;
