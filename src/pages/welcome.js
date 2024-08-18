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
              <li><Link to="/docs/Naturalnye-chisla-i-nul">Целые числа</Link></li>
                <li><Link to="/docs/modul-deliteli-i-kratnye">Делимость натуральных чисел</Link></li>
                <li><Link to="/docs/modul-drobi">Обыкновенные дроби</Link></li>
              </ul>
            </li>
            <li>
            <h3>Алгебра</h3>
              <ul>
                <li><Link to="/docs/modul-square-equations">Квадратные уравнения</Link></li>
                <li><Link to="/docs/umnozhenie-mnogochlenov">Многочлены</Link></li>
                <li><Link to="/docs/modul-degree-exponent">Степень и свойства степени</Link></li>
              </ul>
              <h3>Геометрия</h3>
              <ul>
              <li><Link to="/docs/osnovnye-geometricheskie-ponyatiya">Основные геометрические понятия</Link></li>
              <li><Link to="/docs/similar-triangles">Подобные треугольники</Link></li>
              <li><Link to="/docs/solution-right-triangles">Решение прямоугольных треугольников</Link></li>
                <li><Link to="/docs/vpisannye-i-opisannye-chetyryohugolniki">Вписанные и описанные четырёхугольники</Link></li>
                <li><Link to="/docs/modul-stereometriya">Введение в стереометрию</Link></li>
              </ul>
            </li>
            <h3><Link to="/blog">Блог</Link></h3>
          </ul>

          
        </section>

        
      </main>
    </Layout>
  );
}
