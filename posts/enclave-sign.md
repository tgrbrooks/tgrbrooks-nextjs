---
title: 'Signing an SGX enclave with OpenSSL'
date: '2022-01-16'
tag: 'TIL'
---

Some modern Intel chips contain a set of instructions called Software Guard Exceptions (SGX) that allow you to create encrypted regions of memory that code can be executed in away from the prying eyes of the administrator of that machine. The encrypted regions of memory are called enclaves, and they are particulary useful for dealing with sensitive data in distributed systems such as the public cloud.

Another cool feature of enclaves is that you can prove that certain code has been executed in them. Compiled enclave code is used to produce a unique measurement (a bit like a hash) called an MRENCLAVE, Intel then provide a service that will tell you if an enclave has a certain MRENCLAVE value. If you open source the enclave code and are careful about compiling it, other people can reproduce the MRENCLAVE value and be convinced that your enclave is doing what you say.

As two compiled enclave files with the same MRENCLAVE are be definition identical, there is also a mechanism for differentiating "your" enclave by signing it. This produces another value called the MRSIGNER, which Intel will also verify. The MRSIGNER value can be used to implicitly trust any enclaves created by you even if the code within them has changed. The following describes how to sign an enclave using OpenSSL:

* Compile the enclave in hardware and release mode to get a `enclave.so` file.
* Generate the hash of the enclave file to be signed.

```bash
sgx_sign gendata -enclave enclave.so –config enclave/enclave.config.xml -out enclave_sig.dat
```

* Generate a 3072 bit RSA key pair with an exponent of 3 (the specific number of bits and exponent are a fixed requirement).

```bash
openssl genrsa -aes128 -3 -passout pass:< password > -out private.pem 3072
openssl rsa -in private.pem -passin pass:< password > -pubout -out public.pem
```

* Sign the binary file with the private key to get a signature in binary format.

```bash
openssl dgst -sha256 -sign private.pem -out signature.dat enclave_sig.dat
```

* Use the signature and the public key to generate the signed enclave object.

```bash
sgx_sign catsig -enclave enclave.so -config enclave/enclave.config.xml -out enclave_signed.so -key public.pem -sig signature.dat -unsigned enclave_sig.dat
```

* Generate the SigStruct file and metadata.

```bash
sgx_sign dump -enclave enclave_signed.so -cssfile sigstruct.bin -dumpfile metadata_info.txt
```

Now you have an ``enclave_signed.so`` file which can be distributed and used to securely send data to.
