
import './App.css';
import { TatumSDK} from '@tatumio/sdk'
import {TatumEthSDK} from '@tatumio/eth';
import { TatumPolygonSDK } from '@tatumio/polygon'
import { TatumBtcSDK } from '@tatumio/btc'
import { TatumBchSDK } from '@tatumio/bch'
import { TatumLtcSDK } from '@tatumio/ltc'
import { TatumCeloSDK} from '@tatumio/celo'
import { TatumKcsSDK} from '@tatumio/kcs'
import { TatumOneSDK} from '@tatumio/one'
import { TatumAlgoSDK} from '@tatumio/algo'
import { TatumSolanaSDK} from '@tatumio/solana'
import { TatumXrpSDK } from '@tatumio/xrp'
import { TatumXlmSDK} from '@tatumio/xlm'


const ethSDK = TatumEthSDK({ apiKey: 'be8215a0-7504-40b3-9ae2-6667554b56f8' })
const polygonSDK = TatumPolygonSDK({ apiKey: 'be8215a0-7504-40b3-9ae2-6667554b56f8' })
const btcSDK = TatumBtcSDK({ apiKey: 'be8215a0-7504-40b3-9ae2-6667554b56f8' })
const bchSDK = TatumBchSDK({ apiKey: 'be8215a0-7504-40b3-9ae2-6667554b56f8' })
const ltcSDK = TatumLtcSDK({ apiKey: 'be8215a0-7504-40b3-9ae2-6667554b56f8' })

const sdk = TatumSDK({ apiKey: 'be8215a0-7504-40b3-9ae2-6667554b56f8' })

const celoSDK = TatumCeloSDK({ apiKey: 'be8215a0-7504-40b3-9ae2-6667554b56f8' })
const oneSDK = TatumOneSDK({ apiKey: 'be8215a0-7504-40b3-9ae2-6667554b56f8' })
const algoSDK = TatumAlgoSDK({ apiKey: 'be8215a0-7504-40b3-9ae2-6667554b56f8' })
const solSDK = TatumSolanaSDK({ apiKey: 'be8215a0-7504-40b3-9ae2-6667554b56f8' })
const xlmSDK = TatumXlmSDK({ apiKey: 'be8215a0-7504-40b3-9ae2-6667554b56f8' })
const xrpSDK = TatumXrpSDK({ apiKey: 'be8215a0-7504-40b3-9ae2-6667554b56f8' })

const key = '0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279'
const rpc = 'https://rpc-mumbai.matic.today'


function App() {


    const feat = async() => {
    // Pick any function you want to test, find parameters in related specs/examples
        const test = await solSDK.blockchain.generateWallet()
    // Check test result in console
        console.log(test)
    }


    return (
        <div className="App">
            <header className="App-header">
            Test app 
                 <button onClick={feat}>Check feature</button>
            </header>
        </div>
    );
}

export default App;
