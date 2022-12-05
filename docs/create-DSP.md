---
id: create-DSP
title: Create Your Own Own Digital Signal Processing (DSP)
sidebar_label: Create Your Own DSP
slug: /create-DSP
---

PurePath Console 3 is a powerful tool provided by Texas Instruments that allows users to create their own digital signal processing (DSP) applications. This intuitive software allows users to design and implement complex DSP algorithms, giving them full control over the processing of digital signals.

With PurePath Console 3, users can create custom filters, gain control blocks, and delay elements to shape and manipulate the signal in any way they desire. The software also features a real-time simulation mode, allowing users to test their designs and make adjustments on the fly.However, it does not have the ability to export settings directly to the C++ programming language.

To use the settings from PurePath Console 3 in a C++ program, you will need to write the program yourself using the C++ programming language and appropriate libraries. You can use the settings and algorithms from PurePath Console 3 as a reference when writing your C++ program, but you will need to manually implement the algorithm using the C++ language.

Once your C++ program is written, you can use a C++ compiler to compile it and then run the resulting program on your computer. This program will be able to use the settings from PurePath Console 3 to process digital signals in real-time. Keep in mind that the C++ language is a general-purpose programming language, so you may need to use additional libraries or specialized tools to effectively implement your DSP algorithm in C++.

TAS5825M has more flexible process flows and SmartAmp speaker protection technology, the TAS5825P has the Hybrid Pro algorithm for battery life extension.

#### Sources:

[PurePath™ Console 3 User Manual](https://www.osaelectronics.com/get/software/ti/ppc3/slou408%20%5BPPC3%20User%20Manual%5D.pdf)

[TAS5825M Process Flows](https://www.ti.com/lit/an/slaa786a/slaa786a.pdf?ts=1670227369436&ref_url=https%253A%252F%252Fwww.ti.com%252Fproduct%252FTAS5825M)

[How to Generate a Header File](https://e2e.ti.com/cfs-file/__key/communityserver-discussions-components-files/6/5314.How-to-Generate-a-Header-File-fro-TAS5805M-in-PPC3.pdf)

[Setting File](https://e2e.ti.com/cfs-file/__key/communityserver-discussions-components-files/6/Setting-File.pdf)



## Basics

To create a Header file .h, for example:

```cpp title="Header.h"
void Amplifier::init(unsigned int digital_volume, unsigned int analog_gain, unsigned int Select_Fsw, unsigned int I2S_Format)  {
  Wire.begin();
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7f, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x03, 0x02);
  writeReg8(TAS5825M_ADDRESS, 0x01, 0x11);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);

  writeReg8(TAS5825M_ADDRESS, 0x7f, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7d, 0x11);
  writeReg8(TAS5825M_ADDRESS, 0x7e, 0xff);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x01);
  writeReg8(TAS5825M_ADDRESS, 0x51, 0x05);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x02);
  writeReg8(TAS5825M_ADDRESS, 0x19, 0xa0);
  writeReg8(TAS5825M_ADDRESS, 0x1d, 0x01);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7f, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x46, 0x01);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x02, 0x40);// DEVICE_CTRL_1
  writeReg8(TAS5825M_ADDRESS, 0x53, 0x60);
  writeReg8(TAS5825M_ADDRESS, 0x54, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7f, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x03, 0x02);

        delay(5);

  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7f, 0x8c);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x06);
  writeReg8(TAS5825M_ADDRESS, 0x38, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x39, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x3a, 0x04);
  writeReg8(TAS5825M_ADDRESS, 0x3b, 0x00);

//Tuning coeffs

  writeReg8(TAS5825M_ADDRESS, 0x00, 0x0b);
  writeReg8(TAS5825M_ADDRESS, 0x50, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x51, 0x20);
  writeReg8(TAS5825M_ADDRESS, 0x52, 0xc4);
  writeReg8(TAS5825M_ADDRESS, 0x53, 0x9c);
  writeReg8(TAS5825M_ADDRESS, 0x5c, 0x7f);
  writeReg8(TAS5825M_ADDRESS, 0x5d, 0xff);
  writeReg8(TAS5825M_ADDRESS, 0x5e, 0xff);
  writeReg8(TAS5825M_ADDRESS, 0x5f, 0xff);

// Book 0x8c

  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7f, 0x8c);

  writeReg8(TAS5825M_ADDRESS, 0x00, 0x01);
  writeReg8(TAS5825M_ADDRESS, 0x28, 0x40);
  writeReg8(TAS5825M_ADDRESS, 0x29, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x2a, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x2b, 0x00);

  writeReg8(TAS5825M_ADDRESS, 0x00, 0x0a);
  writeReg8(TAS5825M_ADDRESS, 0x64, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x65, 0x80);
  writeReg8(TAS5825M_ADDRESS, 0x66, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x67, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x68, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x69, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x6a, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x6b, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x6c, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x6d, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x6e, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x6f, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x70, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x71, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x72, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x73, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x74, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x75, 0x80);
  writeReg8(TAS5825M_ADDRESS, 0x76, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x77, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x78, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x79, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7a, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7b, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7c, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7d, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7e, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7f, 0x00);

  writeReg8(TAS5825M_ADDRESS, 0x00, 0x0b);
  writeReg8(TAS5825M_ADDRESS, 0x08, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x09, 0x80);
  writeReg8(TAS5825M_ADDRESS, 0x0a, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x0b, 0x00);

  writeReg8(TAS5825M_ADDRESS, 0x38, 0x02);
  writeReg8(TAS5825M_ADDRESS, 0x39, 0xa3);
  writeReg8(TAS5825M_ADDRESS, 0x3a, 0x9a);
  writeReg8(TAS5825M_ADDRESS, 0x3b, 0xcc);
  writeReg8(TAS5825M_ADDRESS, 0x3c, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x3d, 0x06);
  writeReg8(TAS5825M_ADDRESS, 0x3e, 0xd3);
  writeReg8(TAS5825M_ADDRESS, 0x3f, 0x72);

  writeReg8(TAS5825M_ADDRESS, 0x48, 0x04);
  writeReg8(TAS5825M_ADDRESS, 0x49, 0xc1);
  writeReg8(TAS5825M_ADDRESS, 0x4a, 0xff);
  writeReg8(TAS5825M_ADDRESS, 0x4b, 0x93);
  writeReg8(TAS5825M_ADDRESS, 0x4c, 0x01);
  writeReg8(TAS5825M_ADDRESS, 0x4d, 0x12);
  writeReg8(TAS5825M_ADDRESS, 0x4e, 0x6e);
  writeReg8(TAS5825M_ADDRESS, 0x4f, 0x98);

  writeReg8(TAS5825M_ADDRESS, 0x54, 0x7b);
  writeReg8(TAS5825M_ADDRESS, 0x55, 0x3e);
  writeReg8(TAS5825M_ADDRESS, 0x56, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x57, 0x6d);
  writeReg8(TAS5825M_ADDRESS, 0x58, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x59, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x5a, 0xae);
  writeReg8(TAS5825M_ADDRESS, 0x5b, 0xc3);

  writeReg8(TAS5825M_ADDRESS, 0x60, 0x08);
  writeReg8(TAS5825M_ADDRESS, 0x61, 0x13);
  writeReg8(TAS5825M_ADDRESS, 0x62, 0x85);
  writeReg8(TAS5825M_ADDRESS, 0x63, 0x62);
  writeReg8(TAS5825M_ADDRESS, 0x64, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x65, 0x80);
  writeReg8(TAS5825M_ADDRESS, 0x66, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x67, 0x00);

  writeReg8(TAS5825M_ADDRESS, 0x6c, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x6d, 0x78);
  writeReg8(TAS5825M_ADDRESS, 0x6e, 0xd6);
  writeReg8(TAS5825M_ADDRESS, 0x6f, 0xfd);
  writeReg8(TAS5825M_ADDRESS, 0x70, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x71, 0x08);
  writeReg8(TAS5825M_ADDRESS, 0x72, 0x13);
  writeReg8(TAS5825M_ADDRESS, 0x73, 0x85);

//Register Tuning

  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7f, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x30, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x60, 0x02);
  writeReg8(TAS5825M_ADDRESS, 0x62, 0x09);
  writeReg8(TAS5825M_ADDRESS, 0x4c, 0x30);
  writeReg8(TAS5825M_ADDRESS, 0x03, 0x03);
  writeReg8(TAS5825M_ADDRESS, 0x00, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x7f, 0x00);
  writeReg8(TAS5825M_ADDRESS, 0x78, 0x80);

  }
