---
id: libs
title: Libraries Used
sidebar_label: Libraries Used
slug: /libs
---

The MouDio library relies on other open source libraries to operate its hardware.

[Software](https://github.com/Mala2/Moudio/tree/main/Software)

## Haptic Controller

### Adafruit_DRV2605

[Adafruit_DRV2605](https://github.com/adafruit/Adafruit_DRV2605_Library) is a library for the Adafruit DRV2605 haptic motor driver. This library allows users to control the DRV2605 and produce haptic feedback effects. Visit <ins>[https://learn.adafruit.com/adafruit-drv2605-haptic-controller-breakout](https://learn.adafruit.com/adafruit-drv2605-haptic-controller-breakout)</ins> for more details.

## Time Keeping

### RV-8803

[RV-8803](https://github.com/sparkfun/SparkFun_RV-8803_Arduino_Library) An Arduino library for the SparkFun Real Time Clock Module - RV-8803 (Qwiic). This library demonstrates how to use all the unique features of the RV-8803 RTC Module.

## Fuel Gauge

### MAX17320
[max1704x](https://github.com/porrey/max1704x) Arduino library for the MAX17043/44 and MAX17048/49 LiPo Battery Fuel Gauge. However, it is been altered to work with MAX17320.

## Connectivity & Data (ESP32)

### WiFiManager

[WiFiManager](https://github.com/tzapu/WiFiManager) sets up an access point captive portal, allowing you to connect and enter your WiFi credentials. These credentials are then saved in ESP32's flash, thus only requiring you to enter them once. Alternatively, you can also hard code your credentials in the ```config.h```.

### Arduino_JSON

[Arduino_JSON](https://github.com/arduino-libraries/Arduino_JSON) is used for parsing JSON string responses from API calls. Check out Watchy's [```getWeather()```](https://github.com/sqfmi/Watchy/blob/1.2.5/src/Watchy.cpp#L591) method example on how its used for parsing data from OpenWeather's REST API.
