---
id: battery-life
title: Battery Life
sidebar_label: Battery Life
slug: /battery-life
---

The battery life would be 150 minutes, or 2.5 hours. This is assuming that the battery has a capacity of 7500mA and the device consumes 50W of power at a voltage of 12V. It is also assuming that the device has an efficiency of 100%. It is important to note that this is a rough estimate and the actual battery life may vary depending on a variety of factors.

If the consumption is 20W, then the battery life would be 7500mA / 20W = 375 minutes, or about 6.25 hours. It's worth noting that this calculation assumes 100% efficiency, which is rarely the case in real-world situations. In reality, the battery life would likely be shorter than this. Additionally, other factors such as the battery's age, temperature, and discharge rate can also affect its capacity and therefore its actual runtime.



## Tips

- If the MouDio Speaker is not in use, it should be put into deep sleep mode in order to conserve battery power. The ESP32 is a powerful but power-hungry device, so leaving it idle can quickly drain the battery. By putting the device into deep sleep mode when it is not in use, the battery can last longer.

```cpp
    void MouDio::deepSleep(){
        esp_sleep_enable_ext0_wakeup(RTC_PIN, 0); //enable deep sleep wake on RTC interrupt
        esp_sleep_enable_ext1_wakeup(BTN_PIN_MASK, ESP_EXT1_WAKEUP_ANY_HIGH); //enable deep sleep wake on button press
        esp_deep_sleep_start();
    }
```
- ATmega328
```cpp

void MouDio::sleep_CPU(void)
{
  TAS5825.sleep_AMP();
  // Do not interrupt before we go to sleep, or the
  // ISR will detach interrupts and we won't wake.
  TAS5825.otg_off();

  // will be called when pin D0 goes low
  Serial.println("Sleep");
  delay(100);
  EIFR = bit (INTF0);

  attachInterrupt (0, wake_CPU, CHANGE);
  EIFR = bit (INTF0);
  if (charge == 0) {
    TAS5825.sleep_led();
    EIFR = bit (INTF1);
    attachInterrupt (1, wake_CPU_LED, CHANGE);
  }
  else {
    EIFR = bit (INTF1);
    attachInterrupt (1, wake_CPU_LED, RISING);
  }
  EIFR = bit (INTF1);  // clear flag for interrupt 0
  // We are guaranteed that the sleep_cpu call will be done
  // as the processor executes the next instruction after
  // interrupts are turned on.
  noInterrupts ();
  //  ADCSRA = 0;   // disable ADC
  set_sleep_mode (SLEEP_MODE_PWR_DOWN); // Deepest sleep mode (WDT wakes)
  //  power_twi_disable(); // I2C off
  sleep_enable();
  interrupts ();  // one cycle
  sleep_cpu ();   // one cycle
  //  sleep_mode();        // Power-down MCU.

}
```
