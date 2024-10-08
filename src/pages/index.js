import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageWebDevEverShop from '@site/src/components/HomepageWebDevEverShop';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Школьная математика: <br /> от теории к практике
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/welcome"
          >
            Карта сайта
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Школьная математика: интерактивный учебник с удобной навигацией и поиском для изучения всех разделов школьной программы по математике."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <HomepageWebDevEverShop /> */}
      </main>
    </Layout>
  );
}
