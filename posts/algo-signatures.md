---
title: 'Verifying Algorand Ed25519 signatures'
date: '2022-01-09'
tag: 'TIL'
---

* The `ed25519verify` opcode can be used in both stateless and stateful contracts from TEAL 5
* Application calls are limited to a total cost of 700 and the cost of the verification opcode is 1900, so transactions need to be pooled to meet the cost
* The opcode expects:
  * Arbitrary data bytes
  * 64 signature bytes
  * Public key bytes
* The data is transformed before the signature is verified (hence this transformation must also be done when signing the data)
  * "ProgData" + SHA512-256(compiled program bytes) + data
* For a stateless contract the contract address is related to the program bytes
  * This is not the case for a stateful contract (so don't try to work out the hash from the application address)
  * Calculate the hash of program bytes with

```bash
python3 program.py
goal clerk compile program.teal #prints address
python3 -c "import sys, algosdk; [print(algosdk.encoding.decode_address(line.strip()).hex()) for line in sys.stdin if line.strip()]" <<< address
```

* Decoding address is just converting to bytes and stripping off the last 4 bytes
