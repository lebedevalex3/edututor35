import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Удобная и простая навигация',
    Svg: require('@site/static/img/pic1.svg').default,
    description: (
      <>
        {' '}
        Интуитивно понятная навигация, позволяющая легко находить нужные темы и
        курсы. Всё, от арифметики до алгебры, от геометрии до тригонометрии,
        представлено в четко структурированных разделах.
      </>
    ),
  },
  {
    title: 'Фокусируйтесь на главном',
    Svg: require('@site/static/img/pic2.svg').default,
    description: (
      <>
        Сосредоточьте внимание на фундаментальных приницпах и эффективных
        методах обучения. Фокусируйтесь на ясном объяснении и логическом подходе
        к обучению математике.
      </>
    ),
  },
  {
    title: 'Качественный и полезный контент',
    Svg: require('@site/static/img/pic3.svg').default,
    description: (
      <>
        Наш набор математических ресурсов предлагает детальные уроки,
        практические задания и наглядные примеры, каждый из которых нацелен на
        углубленное понимание и практическое применение математических знаний.{' '}
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
