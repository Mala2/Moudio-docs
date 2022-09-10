import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Digital Signal Processor Configurable',
    imageUrl: 'img/DSP.png',
    description: (
      <>
        Beautiful E-Paper display with 200x200 pixel resolution. Glare free visibility under bright sunlight, near 180 degree view angle, and ultra low power consumption.
      </>
    ),
  },
  {
    title: 'Powered by ATmega328 Platformio',
    imageUrl: 'img/ATmega328.png',
    description: (
      <>
        ESP32-PICO-D4 at its core, with built-in WiFi/Bluetooth LE and compatibility with Arduino, MicroPython, and ESP-IDF
      </>
    ),
  },  
  {
    title: 'Open Source HW & SW',
    imageUrl: 'img/oshw-logo.svg',
    description: (
      <>
        Certified open source hardware (OSHWA) and open source  software.
      </>
    ),
  },
  
    {
    title: 'Dual stereo 2.2, 50W',
    imageUrl: 'img/Duel.png',
    description: (
      <>
2x Texas Instruments® TAS5825M drive two-way speakers in stereo. One device
drives two tweeters and one device drives two woofers, and can output at full charge: 
2 × 10 W, 2.0 Mode (8-Ω, 12 V, THD+N=1%, Woofers) 
2 × 15 W, 2.0 Mode (6-Ω, 12 V, THD+N=1%, Tweeters) 
    </>
    ),
  },
  
      {
    title: 'Connectivity',
    imageUrl: 'img/bluetooth2.jpg',
    description: (
      <>
The FSC-BT806 Feasycom features Qualcomm® CSR8675 - Bluetooth V5.0 Support HSP, HFP, A2DP, AVRCP, PBAP,MAP,SPP,BLE profile - Coverage up to 15m - 2 microphone inputs - Audio interfaces: I²S/PCM and SPDIF

    </>
    ),
  },
];


 
function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} by SQFMI`}
      description="MouDio by Mo">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
