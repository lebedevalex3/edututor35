/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  algebra: [
    'algebra/introAlgebra',
    {
      type: 'category',
      label: 'Квадратные уравнения',
      link: {type: 'doc', id:'algebra/square-equations/introSquareEquations'},
      items: ['algebra/square-equations/doc2'],
    },
    {
      type: 'category',
      label: 'Степень и свойства степени',
      
      link: {type: 'doc', id:'algebra/degree_exponent/introToDegreeExponent'},
      items: [
        'algebra/degree_exponent/doc1',
        'algebra/degree_exponent/doc2',
        'algebra/degree_exponent/doc3',
        
      ],
    },
    {
      type: 'category',
      label: 'Многочлены',
      items: ['algebra/polinomials/doc3'],
    },
  ],

  arifmet: [
    'arithmetic/introArifmet',
 
    {
      type: 'category',
      label: 'Целые числа',
      items: ['arithmetic/001wholeNumbers/doc1'],
    },
    {
      type: 'category',      
      link: {type: 'doc', id:'arithmetic/01divNumbers/introTodivNumbers'},
      label: 'Делимость натуральных чисел', 
            items: [
        'arithmetic/01divNumbers/doc1',
        'arithmetic/01divNumbers/doc2',
        'arithmetic/01divNumbers/doc3',
        'arithmetic/01divNumbers/doc4',
        'arithmetic/01divNumbers/doc5',
        
      ],
    },
    {
      type: 'category',
      label: 'Обыкновенные дроби',
      link: {type: 'doc', id:'arithmetic/02commonFraction/introToCommonFraction'},
      items: [
        'arithmetic/02commonFraction/doc1',
        'arithmetic/02commonFraction/doc2',
        'arithmetic/02commonFraction/doc3',
        'arithmetic/02commonFraction/doc4',

      ],
    },
    
  ],
  geo: [
    'geometry/introGeometry',
    {
      type: 'category',
      label: 'Начала геометрии',
      items: ['geometry/01basic-of-geometry/doc1'],
     
    },
    {
      type: 'category',
      label: 'Вписанные и описанные четырехугольники',
      link: {type: 'doc', id:'geometry/inscribed-quadrilateral/introInscribed'},
      items: [
        'geometry/inscribed-quadrilateral/doc1',
        'geometry/inscribed-quadrilateral/doc2'
   
      ],
    },
    {
      type: 'category',
      label: 'Подобные треугольники',
      items: [
        'geometry/similar_triangles/doc1',
        
      ],
    },
    {
      type: 'category',
      label: 'Решение прямоугольных треугольников',
      items: ['geometry/solution-right-triangles/doc1'],
    },
    {
      type: 'category',
      label: 'Стереометрия',
      link: {type: 'doc', id:'geometry/stereo-basic/introStereo'},
      items: [
        'geometry/stereo-basic/doc01',
        'geometry/stereo-basic/doc1',   
        'geometry/stereo-basic/doc2',    
        'geometry/stereo-basic/doc3',  
        'geometry/stereo-basic/doc4',       
      ],
    },
  ]
};

export default sidebars;
