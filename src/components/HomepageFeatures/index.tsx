import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use Wade Site',
    Image: require('@site/static/img/Wade_logo.png').default,
    description: (
      <ul>
        <li>Tutorial: Each coding skill or technical skill which I have learned will be shared at here.</li>
        <li>Blog: Every project I have done will share the procedure from start to end. Also, if I got any error during project, I will share my solution.</li>
      </ul>
    ),
  },
  {
    title: 'About Me',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    Image: require('@site/static/img/Personal_logo.jpg').default,
    description: (
      <ul>
        <li>2019-2021 National Taiwan University of Science and Technology - Computer Science Master.</li>
        <li>2022-? Teradyne Inc. - Field Application Engineer.</li>
      </ul>
    ),
  },
  {
    title: 'My Resume',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    Image: require('@site/static/img/Resume_logo.png').default,
    description: (
      <ul>
        <li>Chinese: You can find my Chinese resume in <a href= "https://www.cakeresume.com/a0926151140">here</a>.</li>
        <li>Chinese: You can find my English resume in <a href= "https://drive.google.com/file/d/1ZrTDU1pcjXRVd8c6wcdT2nON2GrPJAs-/view?usp=drive_link">here</a>.</li>
      </ul>
    ),
  },
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className="text--left">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
