---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /getting-started
---
## Arduino Setup

1. Download and install the latest <ins>[Arduino IDE](https://www.arduino.cc/en/software)</ins>
2. Start Arduino and open the *Preferences* window.
3. Under *Additional Board Manager URLs* add:

    ```
    https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
    ```
4. Open **Boards Manager** under Tools > Board menu and install the *ATmega328* or *esp32* platform 
5. Download the code from GitHub.
6. Make sure all the dependencies are updated to the latest version.

### Upload

1. Plug in the USB on MouDio and select the serial port that shows up
2. If nothing shows up, or if you're having trouble uploading, make sure you have the <ins>[USB-Serial drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)</ins> installed.
2. Select **ESP32 Dev Module** under Tools > Board > ESP32 Arduino or *ATmega328*
3. Select **Huge App** under Tools > Partition Scheme
4. Leave everything else as default
6. Choose an example and hit upload
7. Try modifiying the examples or create your own app!

---

## PlatformIO Setup

[PlatformIO](https://platformio.org/) is a compatible alternative to arduino. It's more oriented for the command line user, but it is also more flexible and predictable in build configurations and dependency management (like libraries).

It has two parts: a "core" that has the command line tools that build and upload/flash, and an "ide" which is a bunch of plugins and extensions for editors you can [find here](https://platformio.org/install/integration).

Use whichever extensions you wish but this documentation is related to the core, so:

- [Install with instructions here](https://docs.platformio.org/en/latest//core/installation.html).
