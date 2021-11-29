---
title: 'TLS Handshake'
date: '2021-06-10'
tag: 'TIL'
---

A TLS handshake is a series of messages between the client and server that verify the server and set up the symmetric encryption keys used for further communication.

The beginning of a secure communication session can be facilitated using TLS encryption. Messages/datagrams are exchanged between client and server to:
* Specify the version of TLS
* Decide on the cipher suites to use
* Authenticate the server identity using its public key and certificate
* Generate session keys to use symmetric encryption after handshake complete

This occurs after the initial TCP handshake and RSA key exchange most commonly used.

### Detailed steps (RSA)
Client hello
* Client initialises by sending message with TLS version and cipher suites supported, and a string of random bytes (the client random).

Server hello
* Server send message containing SSL certificate, chosen cipher suite and the server random.

Authentication
* Client verifies certificate with the certificate authority that issued it.

Premaster secret
* Client sends random string of bytes encrypted with the servers public key (from the SSL certificate).

Private key used
* Server decrypts the premaster secret.

Session keys created
* Client and server generate session keys from the client random, server random and premaster secret (should be the same).

Client is ready
* Client sends finished message encrypted with a session key.

Server is ready
* Server sends finished message encrypted with a session key.

Handshake complete, communication continues using session keys