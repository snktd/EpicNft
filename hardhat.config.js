require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/91vr4z6D84nZ-GGtokcRp_ci295QYtJR',
      accounts: ['8a18869745ef33b0ea31676926ed1a452d2850cf1a2b988171b0e390629ece58'],
    },
  },
};