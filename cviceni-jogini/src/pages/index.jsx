import { render } from '@czechitas/render';
import { Header } from '../components/Header';
import { Intro } from '../components/Intro';
import { Pose } from '../components/Pose';
import './index.css';
import '../global.css';
import yogaPose from '../img/yoga-pose.jpg';

const HomePage = () => {
  return( 
    <div id="app" className="app container">
      <Header title="Jogíni" />
      <Intro heading="Vítejte mezi Jogíny" text="Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
      Postupně se seznámíte se základními principy jógy, jak přístupovat k
      sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
      svoje tělo, pocity a emoce."/>
      <Pose src={yogaPose} />
    </div>
  )
}

document.querySelector('#root').innerHTML = render(
  <HomePage />
);