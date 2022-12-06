import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Swipe Gesture',
    imageUrl: 'img/touch1.gif',
    description: (
      <>
The trackpad with gesture recognition allows users to easily adjust the volume and track of their audio with just a few simple gestures. Simply swipe up or down on the trackpad to increase or decrease the volume, and swipe left or right to move to the previous or next track.      </>
    ),
  },

  {
    title: 'Digital Signal Processor Configurable',
    imageUrl: 'img/wave.gif',
    description: (
      <>
DSP has flexible process flows which support Multi-Band DRC, Post AGL,FIR filter, 2*15 BQs,
Spatializer (stereo widening),Dynamic Biquad, Smart Speaker Excursion control, Smart Thermal and Smart
Bass Control for different applications.      </>
    ),
  },

  {
    title: 'Powered by ATmega328 / ESP32',
    imageUrl: 'img/ATmega328.png',
    description: (
      <>
        ATmega328P or ESP32 microcontroller at its core, and compatibility with Arduino, Platformio.
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
The FSC-BT806 Feasycom features Qualcomm® CSR8675 - Bluetooth V5.0 Support HSP, HFP, A2DP, AVRCP, PBAP,MAP,SPP,BLE profile - Coverage up to 15m - 2 microphone inputs - Audio interfaces: I²S/PCM and SPDIF.

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
      title={`${siteConfig.title} by MouDio`}
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
