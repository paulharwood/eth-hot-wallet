
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'Local': { rpc: 'http://127.0.0.1:8545', tx_explorer: null },
  'Testnet': { rpc: 'https://rinkeby.infura.io/GjiCzFxpQAUkPtDUpKEP', tx_explorer: 'https://rinkeby.etherscan.io/tx/' },
  'Live': { rpc: 'https://mainnet.infura.io/GjiCzFxpQAUkPtDUpKEP', tx_explorer: 'https://etherscan.io/tx/' },
};

module.exports = Network;
