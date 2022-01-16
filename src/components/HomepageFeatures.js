import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Share application changes',
    Svg: require('../../static/img/collaboration.svg').default,
    description: (
      <>
        Swiftly and conveniently share application changes during development. LiveBundle generates a QR Code that can just be scanned from the application, or a deeplink that can be navigated to.
      </>
    ),
  },
  {
    title: 'GitHub Integration',
    Svg: require('../../static/img/version_control.svg').default,
    description: (
      <>
        LiveBundle comes with a GitHub integration.<br/>When configured, LiveBundle will automatically post a QR Code and deep link on every pull request. Neat !
      </>
    ),
  },
  {
    title: '100% Open Source',
    Svg: require('../../static/img/open_source.svg').default,
    description: (
      <>
        LiveBundle is fully open sourced.<br/>We provide the plumbing, you'll just need to provide the storage.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
