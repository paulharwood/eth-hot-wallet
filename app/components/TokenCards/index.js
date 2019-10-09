/**
*
* TokenCards
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { List, Card } from 'antd';

import TokenIcon from 'components/TokenIcon';

/**
 * Create list of rows, one row per token for given address
 * @param  {object} tokenDecimalsMap
 * @param  {object} tokenMapIN
 * @param  {string} address current address
 * @param  {number} startKey the first key of the given address
 *
 * @return {object[]} array as rows, one row per token/address
 * row:
{
  key: '1',
  index: '1',
  token: 'eth',
  address: '13c...9d06',
  balance: '3',
  convert: '',
} */
const splitAddrToCards = (tokenDecimalsMap, tokenMapIN, address, startKey) => {
  let key = startKey;
  const tokenMap = tokenMapIN;
  const index = tokenMap.index;
  delete tokenMap.index;
  console.log(tokenDecimalsMap);
  console.log(tokenMapIN);
  console.log(address);
  console.log(startKey);
}

  // return Object.keys(tokenMap).map((token) => {
  //   const sameAddressRow = {};
  //   sameAddressRow.index = index;
  //   sameAddressRow.key = key;
  //   key += 1;
  //   sameAddressRow.token = token;
  //   sameAddressRow.address = address;
  //   const balance = tokenMap[token].balance;
  //   const decimals = tokenDecimalsMap[token];
  //   sameAddressRow.balance = balance ? balance.div((10 ** decimals).toString()).toString(10) : 'n/a';
  //   // sameAddressRow.convert = '';
  //   return sameAddressRow;
//   });
// };


const TokenCard = styled.div`
 text-align:right;
 border-top: 1px solid #bbb;
 border-top: 1px solid rgba(90,90,90,0.2);
 border-radius:12px;
 margin: 4px 10px -100px 8px;
 padding:20px 30px;
 box-shadow: 0px 2px 16px rgba(33,33,33,0.2);
 height:200px;
 max-width:360px;
 background:#ffffff;
 transform: rotateX(-5deg);
 background-position: 0% 0%;
 background-repeat: no-repeat;
 background-size: cover;
`;

const Div = styled.div`
  perspective: 500px;
`;

const data = [
  // {
  //   alias: '@booscoffee',
  //   name: 'Boos',
  //   color: '#eae9eb',
  //   backgroundImage: '-webkit-linear-gradient(310deg, rgba(200,200,200,0.5) 0%, rgba(90,90,90,0.9) 100%),url("/token-icons/boos.png")',
  //   logo: '',
  //   points: 602
  // },
  // {
  //   alias: '@airmiles',
  //   name: 'Airmiles inc.',
  //   color: '#ffffff',
  //   backgroundImage:  '-webkit-linear-gradient(310deg, rgba(255,255,255,0.6) 0%, rgba(60,60,60,0.2) 100%),url("/token-icons/airmiles.png")',
  //   logo: '',
  //   points: 491100
  // },
  // {
  //   alias: '@aramco',
  //   name: 'Saudi Arabian Oil Co.',
  //   color: '#0053a2',
  //   backgroundImage: '-webkit-linear-gradient(310deg, rgba(255,255,255,0.6) 0%, rgba(60,60,60,0.2) 100%),url("/token-icons/aramcoin.png")',
  //   logo: '',
  //   points: 598211
  // },
  // {
  //   alias: '@nike',
  //   name: 'Nike inc.',
  //   color: 'white',
  //   backgroundImage: '-webkit-linear-gradient(310deg, rgba(255,255,255,0.6) 0%, rgba(60,60,60,0.2) 100%),url("/token-icons/nike.png")',
  //   logo: '',
  //   points: 4590
  // },
  //
  // {
  //   alias: '@btc',
  //   name: 'Bitcoin',
  //   color: 'white',
  //   backgroundImage: '-webkit-linear-gradient(310deg, rgba(255,255,255,0.6) 0%, rgba(60,60,60,0.2) 100%),url("/token-icons/bitcoin.png")',
  //   logo: '',
  //   points: 4.777865
  // },
  // {
  //   alias: '@eth',
  //   name: 'Ethereum',
  //   color: '#5c66c3',
  //   backgroundImage: '-webkit-linear-gradient(310deg, rgba(255,255,255,0.6) 0%, rgba(200,200,200,0.1) 100%),url("/token-icons/ethereum.png")',
  //   logo: '',
  //   points: 24.13799
  //},
];
function TokenCards(props) {
  return (
    <Div>
      <List
          grid={{ gutter: 8, column: 1 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <TokenCard style={{color:item.color, backgroundImage: item.backgroundImage}}>
              <h2 style={{color:item.color,fontSize:'1.6em'}}>{item.alias}</h2>
              {item.name}
              <h3 style={{color:item.color,fontSize:'1.4em'}}>{item.points}</h3>
              </TokenCard>
            </List.Item>
          )}
        />
    </Div>
  );
}

export default TokenCards;

// import { LocaleProvider } from 'antd';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// /**
//  * Create list of rows, one row per token for given address
//  * @param  {object} tokenDecimalsMap
//  * @param  {object} tokenMapIN
//  * @param  {string} address current address
//  * @param  {number} startKey the first key of the given address
//  *
//  * @return {object[]} array as rows, one row per token/address
//  * row:
// {
//   key: '1',
//   index: '1',
//   token: 'eth',
//   address: '13c...9d06',
//   balance: '3',
//   convert: '',
// } */
// const splitAddrToCards = (tokenDecimalsMap, tokenMapIN, address, startKey) => {
//   let key = startKey;
//   const tokenMap = tokenMapIN;
//   const index = tokenMap.index;
//   delete tokenMap.index;
//
//   return Object.keys(tokenMap).map((token) => {
//     const cardContent = {};
//     cardContent.index = index;
//     cardContent.key = key;
//     key += 1;
//     cardContent.token = token;
//     cardContent.address = address;
//     const balance = tokenMap[token].balance;
//     const decimals = tokenDecimalsMap[token];
//     cardContent.balance = balance ? balance.div((10 ** decimals).toString()).toString(10) : 'n/a';
//     // sameAddressRow.convert = '';
//     return cardContent;
//   });
// };
//
// /**
//  * Transforms addressMap into Array of rows
//  * @param  {object} addressMap
//  * @param  {object} tokenDecimalsMap number of decimal for each currency
//  * @param  {boolean} showTokens should show token in the table
//  * return example: addressArray =
//   [{{
//     key: '1',
//     index: '1',
//     token: 'eth',
//     address: '13c...9d06',
//     balance: '3',
//     convert: '200 USD',
//   },
//     key: '2',
//     index: '1',
//     token: 'eos',
//     address: '13c...9d06',
//     balance: '3',
//     convert: '15 USD',
//   }, {
//     key: '3',
//     index: '1',
//     token: 'ppt',
//     address: '13c...9d06',
//     balance: '3',
//     convert: '13 USD',
//   },
// ] */
// const transformList = (addressMap, tokenDecimalsMap, showTokens) => { //eslint-disable-line
//   // const showTokens = true;
//   let iKey = 1;
//   const list = Object.keys(addressMap).map((address) => {
//     const tokenMap = addressMap[address];
//     const sameAddressList = splitAddrToRows(tokenDecimalsMap, tokenMap, address, iKey);
//
//     iKey += sameAddressList.length;
//     return sameAddressList;
//   });
//   return [].concat(...list); // flaten array
// };
//
// /**
//  * return conversion rate from given token
//  * @param  {object} exchangeRates available exchange rates
//  * @param  {string} from symbol to convert from: 'eth' / 'usd' / ..
//  * @param  {string} to the convertion pair to use: ie "eth_usd"
//  *
//  * @return {Array} array as data for table, see example above
//  */
// const getConvertRate = (exchangeRates, from, to) => {
//   const fromKey = `eth_${from}`;
//   // convert token to eth by invert(eth_token)
//   const toEthRate = exchangeRates[fromKey].rate.toPower(-1);
//   const toTokenRate = exchangeRates[to].rate;
//   return toEthRate && toTokenRate && toEthRate.times(toTokenRate);
// };
//
// /**
//  * Add converted rates to all rows
//  * adds nothing if exchange rate not found
//  * @param  {object[]} rowList table rows contains balance
//  * @param  {object} exchangeRates all available exchange rates
//  * @param  {string} convertTo the convertion pair to use: ie "eth_usd"
//  *
//  * @return {Array} array as data for table, see example above
//  */
// const addConvertRates = (rowList, exchangeRates, convertTo) =>
//   rowList.map((row) => {
//     try {
//       // const convertToSymbol = convertTo.slice(4).toUpperCase();
//       if (`eth_${row.token}` === convertTo) {
//         row.convert = row.balance; // eslint-disable-line
//       } else {
//         const convertRate = getConvertRate(exchangeRates, row.token, convertTo);
//         row.convert = convertRate.times(row.balance).round(5).toString(10); // eslint-disable-line
//       }
//       return row;
//     } catch (err) {
//       // no rates found
//       return row;
//     }
//   });
//
// function TokenCards(props) {
//   const {
//     addressMap,
//     tokenDecimalsMap,
//     onShowSendToken,
//     exchangeRates,
//     onSelectCurrency,
//     convertTo,
//   } = props;
//
//   const currencyDropdownProps = { exchangeRates, onSelectCurrency, convertTo };
//
//   const rowList = transformList(addressMap, tokenDecimalsMap, true);
//   const completeRowList = addConvertRates(rowList, exchangeRates, convertTo);


//
//
//
// <AddrTable
//   dataSource={completeRowList}
//   bordered
//   scroll={{ x: 860 }}
//   pagination={false}
//   locale={{
//     filterTitle: null,
//     filterConfirm: 'Ok',
//     filterReset: 'Reset',
//     emptyText: 'No Data',
//   }}
//
// >
//   <Column
//     title="Address"
//     dataIndex="address"
//     key="address"
//     width="267px"
//     className="columnCenter"
//     colSpan="1"
//     rowSpan="3"
//     render={(text, record) => {
//       const obj = {
//         children: text,
//         props: {},
//       };
//       if (record.token !== 'eth') {
//         // obj.props.rowSpan = 0;
//         obj.props.rowSpan = 0;
//         // obj.children = '~';
//       } else {
//         obj.props.rowSpan = Object.keys(tokenDecimalsMap).length || 2;
//       }
//       return obj;
//     }}
//   />
//   {/* <Column
//     title="#"
//     dataIndex="key"
//     key="key"
//     width="10px"
//     sorter={(a, b) => parseInt(a.key, 10) - parseInt(b.key, 10)}
//     sortOrder="ascend"
//     className="columnCenter"
//   /> */}
//   <Column
//     title="Icon"
//     key="Icon"
//     width="12px"
//     render={(text, record) => (
//       <TokenIcon tokenSymbol={record.token} />
//     )}
//     className="columnCenter"
//   />
//
//   <Column
//     title="Token"
//     dataIndex="token"
//     key="token"
//     width="65px"
//     className="columnCenter"
//     render={(text, record) => (
//       record.token.toUpperCase()
//     )}
//   />
//   <Column
//     title="Balance"
//     dataIndex="balance"
//     key="balance"
//     width="80px"
//     filters={[{
//       text: 'Remove empty',
//       value: '0 ETH',
//     }]}
//     onFilter={(value, record) => record.balance !== value}
//   />
//   <Column
//     title={<CurrencyDropdown {...currencyDropdownProps} />}
//     dataIndex="convert"
//     key="convert"
//     width="80px"
//   />
//   <Column
//     width="65px"
//     title="Action"
//     key="action"
//     render={(text, record) => (
//       <span>
//         {/* <a href="#" >Show QR</a>
//         <span className="ant-divider" /> */}
//         {/* eslint-disable */}
//         <a onClick={() => onShowSendToken(record.address, record.token)}>Send</a>
//         {/* eslint-enable */}
//       </span>
//     )}
//   />
// </AddrTable >

// AddressTable.propTypes = {
//   addressMap: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   tokenDecimalsMap: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
//   onShowSendToken: PropTypes.func,
//   exchangeRates: PropTypes.object,
//   onSelectCurrency: PropTypes.func,
//   convertTo: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
// };
