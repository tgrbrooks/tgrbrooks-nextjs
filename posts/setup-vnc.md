---
title: 'Setting up a VNC Server'
date: '2020-06-10'
tag: 'TIL'
---

A Virtual Network Computing (VNC) server is a valuable (but often slow and painful) way of remotely viewing graphical content. On occasion you may need to work on a remote virtual machine and perform a task that is not possible via SSH alone. I would occasionally have to open an event viewer for very large particle interaction files during my PhD in order to identify files to download and perform further analysis on. Using a VNC server saved a great deal of time and bandwidth.

* To configure the VNC server we will need two terminals open. 
  + **Terminal 1** = Terminal logged in to a virtual machine.
  + **Terminal 2** = Terminal on your local machine.
* **Terminal 1**: Start the VNC server. Replace X with a number from 0 to 99 which must be different for everyone working on the same VM.

```bash
vncserver :X -localhost
```

* **Terminal 1**: Choose a password for accessing the server.
* **Terminal 1**: Push the output of a remote terminal to the VNC desktop.

```bash
export DISPLAY=localhost:X
```

* **Terminal 2**: Tunnel the VNC through SSH to keep it encrypted. If X is less than 10 add a zero to the front. The ``-N`` flag means that a remote command won't be executed as we are just forwarding ports and ``-f`` sends ssh to the background.

```bash
ssh -L 59X:localhost:59X -N -f -l < username > < vmaddress >
```

* **Terminal 2**: Open the window locally.
  + On linux/ubuntu we will use vinagre but you might need to download it first with ``sudo apt-get install vinagre``.
  + On mac the command is ``open``.

```bash
vinagre vnc://localhost:59X
```

At this point you should see the desktop of the remote machine pop up, it should capture your mouse automatically so you can click around to explore.
