---
title: 'Connect an Accelerometer to a Raspberry Pi'
date: '2020-10-17'
tag: 'Project'
---

Accelerometers measure the acceleration in their own rest frame by measuring the movement of a damped mass. During acceleration the mass will move in the opposite direction until the force of the damping mechanism (such as a spring) equals the force of acceleration. The damping force can then be measured to provide a value for the accelerating force.

As Earth's gravity results in a constant upwards acceleration for any body at rest on its surface, accelerometers can be used to determine orientation. This property could be very useful for a navigation system in a Raspberry Pi based robot. The following tutorial will demonstrate how an Accelerometer can be hooked up to a Pi and how the data can be visualised. 

## Equipment required
* 5 male to female wires
* Male headers
* Breadboard
* Soldering iron
* [Adafruit LIS3DH](https://learn.adafruit.com/adafruit-lis3dh-triple-axis-accelerometer-breakout/overview)

## Pi Setup
* Make sure the I2C communication protocol is activated on the pi

```bash
sudo raspi-config
```

* Under `5. Interfacing Options` make sure I2C is enabled
* Make sure the correct modules are included in the module file `/etc/modules`, it should contain the lines:

```bash
i2c-bcm2708
i2c-dev
```

* Restart the Pi

## Connections
An image of connections between the accelerometer and the Pi can be found [here](https://learn.adafruit.com/adafruit-lis3dh-triple-axis-accelerometer-breakout/python-circuitpython).

* Connect Vin to the 3v3 pin (pin 1)
* Connect Gnd to any ground pin (pin 6)
* Connect SCL to the I2C clock (pin 5)
* Connect SDA to the I2C data (pin 3)
* Connect INT to any free digital IO pin (pin 31)

## Testing the connection
* Install the libraries required to talk to I2C devices

```bash
sudo apt-get install i2c-tools python-smbus
```

* Look at the connected I2C devices

```bash
sudo i2cdetect -y 1
```

* The device should appear in the 0x18 address.

## Visualising acceleration and rotation
* In your python virtual environment install the required modules

```bash
pip3 install adafruit-circuitpython-busdevice
pip3 install adafruit-circuitpython-lis3dh
```

* Write a python script to visualise the [acceleration](https://github.com/tgrbrooks/RoboAI/blob/master/src/movement/acceleration.py) and [rotation](https://github.com/tgrbrooks/RoboAI/blob/master/src/movement/orientation.py).
* Run them to see the accelerometer in action.
