import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './welcome.module.css';

export default function Welcome() {
  return (
    <Layout
      title="Навигация"
      description="Описание сайта и карта сайта для удобства навигации"
    >
      <main className={styles.mainContent}>

      <section className={styles.siteMapSection}>
          <h2 className={styles.siteMapTitle}>Карта сайта</h2>
          <p>На сайте представлены материалы, которые помогут вам эффективно подготовиться к контрольным работам и экзаменам, включая ЕГЭ.</p>
          <ul className={styles.siteMap}>
            <li>
            <h3>Арифметика</h3>
              <ul>
                <li><Link to="/docs/modul-deliteli-i-kratnye">Делимость натуральных чисел</Link></li>
                <li><Link to="/docs/modul-drobi">Обыкновенные дроби</Link></li>
              </ul>
            </li>
            <li>
            <h3>Алгебра</h3>
              <ul>
                <li><Link to="/docs/modul-square-equations">Квадратные уравнения</Link></li>
                <li><Link to="/docs/modul-degree-exponent">Степень и свойства степени</Link></li>
              </ul>
              <h3>Геометрия</h3>
              <ul>
                <li><Link to="/docs/vpisannye-i-opisannye-chetyryohugolniki">Вписанные и описанные четырёхугольники</Link></li>
                <li><Link to="/docs/modul-stereometriya">Введение в стереометрию</Link></li>
              </ul>
            </li>
            <li><Link to="/blog">Блог</Link></li>
            <li><Link to="/community">Сообщество</Link></li>
            <li><Link to="/about">О нас</Link></li>
          </ul>
          
               <li><Link to="/blog">Блог</Link></li>
            <li><Link to="/community">Сообщество</Link></li>
            <li><Link to="/about">О нас</Link></li>
          
        </section>

        
      </main>
    </Layout>
  );
}