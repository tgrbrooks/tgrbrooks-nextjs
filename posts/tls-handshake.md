---
title: 'TLS Handshake'
date: '2021-06-10'
tag: 'TIL'
---

A TLS handshake is a series of messages between a client and server that verifies that the server is who it says it is. In the public key infrastructure of the modern web, identity is governed by the possession of private keys. If you want someone to know that you are the real owner of the domain example.com, you would create a public-private key pair and then find a trusted party who will vouch for your ownership of the domain. A digital certificate will be created and signed by the trusted party to prove your ownership of the public key and hence domain. This certificate is then signed by the trusted party (or certificate authority). Every browser has a list of trusted certificate authorities and when someone visits your domain they will check that your public key certificate has been signed by a member of that list, if it has then they can feel confident sending data to the holder of the private key via TLS.

The TLS handshake proves that a server holds the private key corresponding to the public key in the digital certificate and sets up the symmetric encryption keys used for further communication. This forms the beginning of a secure communication session facilitated using TLS encryption. Messages are exchanged between client and server to:
* Specify the version of TLS.
* Decide on the cipher suites to use.
* Authenticate the server identity using its public key and certificate.
* Generate session keys to use symmetric encryption after handshake complete.

This occurs after the initial TCP handshake establishes a connection. The TLS protocol is not limited to a specific type of asymmetric key pair, but RSA key exchange is most commonly used.

### Detailed steps (RSA)

**Client hello**
* The client initialises the handshake by sending a message with the TLS versions and cipher suites that it supports. It also includes a string of random bytes called the client random.

**Server hello**
* The server sends a message containing its digital certificate, the chosen cipher suite and another random string called the server random. The cipher suite is chosen by identifying the suites supported by both client and server and then selecting the top choice from the list ordered by server preference (hopefully ordered by security).

**Authentication**
* The client verifies the certificate with the certificate authority that issued it. The certificates are almost always signed in a chain, with the root certificate authority keys signing more numerous and shorter lived delegated keys. The delegated keys may sign more delegated keys or the servers certificate. The client will verify up the chain until the root is found, and try to find the root certificate in its allowed list.

**Premaster secret**
* The client sends random string of bytes encrypted with the servers public key obtained from the digital certificate.

**Private key used**
* If the server is who it says it is (and not some scammer intercepting messages) it will be in possession of the corresponding private key and be able to decrypt the premaster secret.

**Session keys created**
* The Client and server generate session keys from the client random, server random and premaster secret.

**Client is ready**
* The client sends finished message encrypted with a session key.

**Server is ready**
* The server sends finished message encrypted with a session key.

Handshake complete, communication continues using the symmetric session keys which are faster than asymmetric encryption.
