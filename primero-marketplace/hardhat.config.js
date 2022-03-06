require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
//dont a key to your main accounts
const RINKEBY_KEY = "3af5eaccf2c413d190b63e64c86b26e38c1a5f502d8ac780ef5184ed12f2b0e4"


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      //url:https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}
      url: `https://eth-rinkeby.alchemyapi.io/v2/eRPK-XANyIankxAbgOD_YIDYZxeqDD_f`,
      accounts: [RINKEBY_KEY]
    },
    /*
     /*mumbai: {
      // Alchemy
      // url: `https://polygon-mumbai.g.alchemy.com/v2/${AlchemyId}`
      url: "https://polygon-mumbai.g.alchemy.com/v2/eRPK-XANyIankxAbgOD_YIDYZxeqDD_f",
      accounts: [`${MUMBAI_KEY}`]
    },*/
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

