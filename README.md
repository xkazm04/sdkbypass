# Tatum API SDK v2

Repository for SDK testing 

## Instal & run

```console
git clone https://github.com/xkazm04/sdktest.git
npm install 
npm start
```

## Update

If you already have installed package and need to upgrade, go to `package.json` and update version of tested package.
Example: Upgrade `"@tatumio/algo": "^2.0.1-alpha.236"` to `"@tatumio/algo": "^2.0.1-alpha.238"` 

Then install and run again
```console
npm install 
npm start
```
### Blockchain subpackage

You can select one or more blockchain packages that you want to use in your project and install them separately.

```console
npm install @tatumio/polygon@alpha
```

Currently supported packages
| Chain      | Package |
| ----------- | ----------- |
| Algorand     | @tatumio/algo   |
| Binance smart chain      | @tatumio/bsc   |
| Bitcoin      | @tatumio/btc   |
| Celo      | @tatumio/celo   |
| Dogecoin      | @tatumio/doge   |
| Ethereum      | @tatumio/eth   |
| HarmonyOne      | @tatumio/one   |
| KuCoin      | @tatumio/kcs   |
| Litecoin      | @tatumio/ltc   |
| Polygon      | @tatumio/polygon   |
| Solana      | @tatumio/solana   |
| XLM      | @tatumio/xlm   |
| XRP      | @tatumio/xrp   |


### Full package

There is possibility to install full package with all supported blockchain although due to installation of all dependencies and size usage is not recommended for frontend apps.

```console
npm install @tatumio/sdk
```

### Node.JS & Browser support

Library is written in TypeScript with ES2017 as the target JS version. Library should work in Node.JS current LTS.

## Configuration and setup

| Variable                  | Required                 | Default value            | Description                                                                                                                                                                                                                                   |
| ------------------------- | ------------------------ | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TESTNET_TYPE              |  | ethereum-ropsten         | For Ethereum, there are 2 testnet chains supported - Ropsten and Rinkeby. To enable Rinkeby, you need to use ethereum-rinkeby.                                                                                                                |
| TATUM_GAS_STATION_API_KEY |  |                          | In the library, there are functions for estimating the Ethereum transaction fee. For the estimation of the transaction fee, we are using https://ethgasstation.info. If you have your API key from https://ethgasstation.info you can use it. |
| YOUR_TRON_PRO_API_KEY     |  |                          | If you want to work with TRON locally, you need to enter API Key for [Trongrid] (https://trongrid.io).                                                                                                                                        |
## Usage

Use structure in App.tsx


Example

```js
// es6
// import blockchain subpackage or full sdk package
import {TatumEthSDK} from '@tatumio/eth';

// pass API key from Tatum account available for free at https://dashboard.tatum.io/
const ethSDK = TatumEthSDK({ apiKey: '<Your API Key>' })

// pick Tatum service available from API docs 
const generatedWallet = await ethSDK.api.ethGenerateWallet('<mnemonic phrase>')
console.log(generatedWallet)
```

Examples
| Service type      | Path example | Description
| ----------- | ----------- |-----------
| Api      |   ethSDK.api.ethGenerateAddress  | Blockchain native services
| Custodial      |   ethSDK.custodial.prepare.generateCustodialWalletSignedTransaction  | Custodial wallet services
| Fungible      |   ethSDK.fungible.deployToken  | ERC20, TRC20, etc.
| NFT      |   ethSDK.nft.deployToken  | ERC721, TRC721, etc.
| NFT Marketplace      |  ethSDK.auction.bid  | NFT Marketplaces services
| NFT Auctions      |  ethSDK.marketplace.getMarketplaceListing  | NFT Auctions services
| Multi tokens      |   ethSDK.multiToken.deployToken  | ERC-1155 services
| httpDriver      |   ethSDK.httpDriver  | Connect directly to Node
| KMS      |   ethSDK.kms.getAllPending  | Tatum KMS
| Ledger      |   ethSDK.ledger.orderBook.newTrade  | Tatum private Ledger
| Offchain     |   ethSDK.offchain.storeTokenAddress  | Tatum Offchain
| Record     |   ethSDK.record.storeLog | Blockchain log
| Security     |   ethSDK.security.checkMaliciousAddress | Security utilities
| Subscriptions  | ethSDK.subscriptions.createSubscription | Notification services
| Tatum  | ethSDK.tatum.freezeApiKey | Tatum Ledger custody services
| Transaction  | ethSDK.transaction.prepare.transferSignedTransaction | Blockchain native transfer
| Wallet  | ethSDK.wallet.generateWallet | Create blockchain wallet and address