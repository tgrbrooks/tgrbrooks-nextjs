---
title: 'Setting up a VNC Server'
date: '2020-06-10'
tag: 'TIL'
---

* To configure this we will need two terminals open. 
  + **Terminal 1** = Terminal logged in to a virtual machine.
  + **Terminal 2** = Terminal on your local machine.
* **Terminal 1**: Start the VNC server (replace X with a number, must be different for everyone working on the same VM)

```bash
vncserver :X -localhost
```

* **Terminal 1**: Choose a password
* **Terminal 1**: Push the output of a remote terminal to the VNC desktop

```bash
export DISPLAY=localhost:X
```

* **Terminal 2**: Tunnel the VNC through ssh to keep it encrypted (if X<10 add a zero to the front)

```bash
ssh -L 59X:localhost:59X -N -f -l < username > < vmaddress >
```

* **Terminal 2**: Open the window locally (on mac the command is ``open``) 
  + On linux/ubuntu we will use vinagre but you might need to download it first ``sudo apt-get install vinagre``

```bash
vinagre vnc://localhost:59X
```
