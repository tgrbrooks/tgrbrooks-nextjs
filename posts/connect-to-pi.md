---
title: 'Connecting to a Raspberry Pi'
date: '2020-08-11'
tag: 'Project'
---

After connecting a screen to do the initial setup the easiest way to connect to a Raspberry Pi is through SSH or a VNC server.

SSH is faster, but a VNC server can display graphical content.

Both methods require the Pi and your laptop to be connected to the same WiFi network.

The Raspberry Pi is usually availabe under the ``raspberrypi.local`` address, you can check it's visible with:

```bash
ping raspberrypi.local
```

Otherwise, you can find the IP address of your Pi by opening a terminal and using ``ifconfig``. The IP will be under ``eth0`` &rarr; ``inet``.

### SSH

While a screen and mouse are connected to the Pi, enable SSH by going to Preferences &rarr; Raspberry Pi Configuration &rarr; Interfaces. Select enable for SSH and restart the Pi.

You can then ssh into the Pi with

```bash
ssh pi@raspberrypi.local
```

The default username is ``pi`` and password is ``raspberry``.

### VNC

Enable VNC on the pi by first downloading the software

```bash
sudo apt-get update
sudo apt-get install realvnc-server
```

Then go to the same preferences window as in the SSH instructions and make sure VNC is set to enabled, then restart the Pi. You should then be able to connect to the Pi with

```bash
open vnc://raspberrypi.local
```
