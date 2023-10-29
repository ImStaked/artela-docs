---
sidebar_position: 1
---

# Ethereum JSON RPC APIs

The JSON-RPC Server provides an API that facilitates connection to the Artela blockchain and interaction with the EVM. JSON-RPC is a stateless, lightweight protocol for remote procedure calls (RPC). It defines various data structures and the rules governing their processing. JSON-RPC is compatible with multiple transport protocols. Artela, in particular, supports JSON-RPC over HTTP and WebSocket.

Artela Testnet example:
```
   curl https://testnet-rpc1.artela.network -H "Content-Type:application/json" -X POST --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'
```

| Items | Develop | Test | About |
| --- | --- | --- | --- |
| Framework of Json-RPC service | ✅ | ✅ |  |
| startup of Json-RPC service | ✅ | ✅ | start from root command |

| APIs | Develop | Test | About |
| --- | --- | --- | --- |
| web3_clientVersion |  |  |  |
| web3_sha3 |  |  |  |
|  |  |  |  |
| net_version | ✅ | ✅ |  |
| net_listening |  |  |  |
| net_peerCount |  |  |  |
|  |  |  |  |
| debug_traceTransactio |  |  | required by the internal txs of explorer |
|  |  |  |  |
| eth_protocolVersion |  |  |  |
| eth_syncing |  |  |  |
| eth_coinbase |  |  |  |
| eth_chainId | ✅ | ✅ |  |
| eth_mining |  |  |  |
| eth_hashrate |  |  |  |
| eth_gasPrice | ✅ | ✅ |  |
| eth_accounts | ✅ | ✅ |  |
| eth_blockNumber | ✅ | ✅ |  |
| eth_getBalance | ✅ | ✅ |  |
| eth_getStorageAt |  |  |  |
| eth_getTransactionCount | ✅ | ✅ | nonce of account |
| eth_getBlockTransactionCountByHash |  |  |  |
| eth_getBlockTransactionCountByNumber |  |  |  |
| eth_getUncleCountByBlockHash |  |  |  |
| eth_getUncleCountByBlockNumber |  |  |  |
| eth_getCode | ✅ | ✅ |  |
| eth_getLogs | ✅ | ✅ | implemeted on 10/16, needs by  subquery |
| eth_sign |  |  |  |
| eth_signTransaction | ✅ | ✅ |  |
| eth_sendTransaction | ✅ | ✅ |  |
| eth_sendRawTransaction | ✅ | ✅ |  |
| eth_call |  |  |  |
| eth_estimateGas | ✅ | ✅ | Priority: High |
| eth_getBlockByHash | ✅ | ✅ |  |
| eth_getBlockByNumber | ✅ | ✅ |  |
| eth_getTransactionByHash | ✅ | ✅ |  |
| eth_getTransactionByBlockHashAndIndex |  |  |  |
| eth_getTransactionByBlockNumberAndIndex |  |  |  |
| eth_getTransactionReceipt | ✅ | ✅ |  |
| eth_getUncleByBlockHashAndIndex |  |  |  |
| eth_getUncleByBlockNumberAndIndex |  |  |  |
| eth_newFilter |  |  |  |
| eth_newBlockFilter |  |  |  |
| eth_newPendingTransactionFilter |  |  |  |
| eth_uninstallFilter |  |  |  |
| eth_getFilterChanges |  |  |  |
| eth_getFilterLogs |  |  |  |