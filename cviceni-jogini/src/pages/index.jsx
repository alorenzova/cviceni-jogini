import { render } from '@czechitas/render';
import { Header } from '../components/Header';
import { Intro } from '../components/Intro';
import { Pose } from '../components/Pose';
import '../global.css';
import './index.css';

/*
document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header>
    <main>
      <p>Startovací šablona pro webovou aplikaci v JavaScriptu s JSX. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-kodim-app">create-kodim-app</a>.</p>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
*/

document.querySelector('#root').innerHTML = `
<div id="app" class="app container">
    <header>
      <h1 class="site-title">Jogíni</h1>
      <nav>
        <a href="#">domů</a>
        <a href="#">lekce</a>
        <a href="#">náš tým</a>
        <a href="#">události</a>
        <a href="#">kontakt</a>
      </nav>
    </header>

    <div class="intro">
      <h2>Vítejte mezi Jogíny</h2>
      <p>
        Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
        něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
        Postupně se seznámíte se základními principy jógy, jak přístupovat k
        sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
        svoje tělo, pocity a emoce.
      </p>
    </div>
    <img class="pose" src="img/yoga-pose.jpg" />
  </div>
`;
