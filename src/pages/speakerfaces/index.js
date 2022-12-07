import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Grill Pattern 1',
    imageUrl: 'img/grill-pattern-1.png',
    description: (
      <>
<Link to="https://github.com/Mala2/MouDio/tree/main/3D-Files/Grill/1" className={styles.customLink}>
Download
</Link>
      </>
    ),
  },
  
  {
    title: 'Grill Pattern 2',
    imageUrl: 'img/grill-pattern-2.png',
    description: (
      <>
      <Link to="https://github.com/Mala2/MouDio/tree/main/3D-Files/Grill/2" className={styles.customLink}>
      Download
</Link>
      </>
    ),
  },
  {
    title: 'Grill Pattern 3',
    imageUrl: 'img/grill-pattern-3.png',
    description: (
      <>
      <Link to="https://github.com/Mala2/MouDio/tree/main/3D-Files/Grill/3" className={styles.customLink}>
      Download
</Link>
      </>
    ),
  },
  {
    title: 'Grill Pattern 4',
    imageUrl: 'img/grill-pattern-4.png',
    description: (
      <>
      <Link to="https://github.com/Mala2/MouDio/tree/main/3D-Files/Grill/4" className={styles.customLink}>
      Download
</Link>
      </>
    ),
  },
];



 
function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--10 text--center', styles.feature)}>
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
      title="Grills"
      description="MouDio by Mo">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{Home.title}</h1>
          <p className="hero__subtitle">{Home.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/speakergrill-customization')}>
              Create Your Own!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row text--center">
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

