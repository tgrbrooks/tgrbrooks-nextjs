---
title: 'Verifying Algorand Ed25519 signatures'
date: '2022-01-09'
tag: 'TIL'
---

Algorand is a proof of stake blockchain with support for smart contracts. There are two types of smart contract in Algorand, stateless and stateful. Stateless contracts, or logic signatures, can be used to approve transactions if they satisfy the logic specified in the contract code. Stateful contracts are also used to approve or deny transactions but also have read and write access to global and local (account) state in the form of key-value pairs.

A lot of the functionality of blockchains are built around the core cryptographic mechanisms of hashing and signing. In Algorand, the signature scheme used is Edwards-curve Digital Signature Algorithm (EdDSA) using SHA-512 and the Curve25519 elliptic curve. This combination is known as Ed25519. A lot of what goes on under the hood relies on this algorithm, but it can also be used to explicitly verify signatures in smart contracts. This opens up a range of possibilities such as trusted key holders (such as oracles) attesting to the validity of off-chain data.

The `ed25519verify` opcode can be used in both stateless and stateful contracts from TEAL 5 and the method contains some hangovers from the internal usage of the algorithm. This means that it requires a bit of tweaking in order sign data in a way that can be verified. The opcode expects:
  * Arbitrary data bytes
  * 64 signature bytes
  * Public key bytes

When the opcode is called the data is transformed before the signature is verified, hence this transformation must also be done when signing the data:
  * "ProgData" + SHA512-256(compiled program bytes) + data

For a stateless contract the contract address is derived from the program bytes. This is not the case for a stateful contract, so don't try to work out the hash from the application address. Decoding an Algorand address is just converting to bytes and stripping off the last 4 bytes. Calculate the hash of program bytes with

```bash
python3 program.py
goal clerk compile program.teal #prints address
python3 -c "import sys, algosdk; [print(algosdk.encoding.decode_address(line.strip()).hex()) for line in sys.stdin if line.strip()]" <<< address
```

Stateful smart contract application calls are limited to a total cost of 700 and the cost of the verification opcode is 1900, so a single application call to a contract containing this opcode is impossible. However, Algorand allows transactions to be pooled together to increase the total cost limit, so adding in another two application calls that don't do anything will increase the limit to 2100.
