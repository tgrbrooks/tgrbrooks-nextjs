---
title: 'Signing an SGX enclave with OpenSSL'
date: '2022-01-16'
tag: 'TIL'
---

* Compile the enclave in hardware and release mode to get a `enclave.so` file
* Generate the hash of the enclave file to be signed

```bash
sgx_sign gendata -enclave enclave.so –config enclave/enclave.config.xml -out enclave_sig.dat
```

* Generate a 3072 bit RSA key pair with an exponent of 3 (the specific number of bits and exponent are a fixed requirement)

```bash
openssl genrsa -aes128 -3 -passout pass:< password > -out private.pem 3072
openssl rsa -in private.pem -passin pass:< password > -pubout -out public.pem
```

* Sign the binary file with the private key to get a signature in binary format

```bash
openssl dgst -sha256 -sign private.pem -out signature.dat enclave_sig.dat
```

* Use the signature and the public key to generate the signed enclave object

```bash
sgx_sign catsig -enclave enclave.so -config enclave/enclave.config.xml -out enclave_signed.so -key public.pem -sig signature.dat -unsigned enclave_sig.dat
```

* Generate the SigStruct file and metadata

```bash
sgx_sign dump -enclave enclave_signed.so -cssfile sigstruct.bin -dumpfile metadata_info.txt
```
