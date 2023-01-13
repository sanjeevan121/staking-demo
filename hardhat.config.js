require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require("@nomiclabs/hardhat-etherscan");

module.exports = {

  solidity: "0.8.6",
  settings:{
    optimizer:{
      enabled:true,
      runs:200
    }
  },
  networks:{
    hardhat:{
      chainId:1337
    },
    goerli:{
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API}`,
      accounts:[process.env.MAIN_ACCOUNT],
      chainId: 5,
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API}`,
      accounts:[process.env.MAIN_ACCOUNT],
      chainId:80001,
    },


  },
  gasReporter:{
    enabled:true,
    currency:"INR",
    coinmarketcap:process.env.COINMARKETCAP,
    token:"matic",
    outputFile:"gasReports.txt",
    noColors:true
  }
  }
