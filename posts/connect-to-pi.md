---
title: 'Connecting to a Raspberry Pi'
date: '2020-08-11'
tag: 'Project'
---

After connecting a screen to do the initial set up the easiest way to connect to a Raspberry Pi is through SSH or a VNC server.

Both methods require the Pi and your laptop to be connected to the same WiFi network.

Find the Raspberry Pi IP adress.

```bash
ping raspberrypi.local
```

### SSH

Enable SSH on the pi

```bash
ssh pi@raspberrypi.local
```

### VNC

Enable VNC on the pi

```bash
open vnc://raspberrypi.local
```
