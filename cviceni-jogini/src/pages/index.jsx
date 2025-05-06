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
  <div class="container">
    <header>
      <h1>Jogíni</h1>
      <nav>
        <ul>
          <li><a href="#home">DOMŮ</a></li>
          <li><a href="#lekce">LEKCE</a></li>
          <li><a href="#tym">NÁŠ TÝM</a></li>
          <li><a href="#udalosti">UDÁLOSTI</a></li>
          <li><a href="#kontakt">KONTAKT</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="home">
        <h2>Vítejte mezi Jogíny</h2>
        <p>Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit něco nového. 
          Cvičíme v pomalém tempu s podrobným slovním doprovodem. Postupně se seznámíte se základními 
          principy jógy, jak přistupovat k sobě i ostatním. Krok za krokem objevíte a dostanete pod 
          kontrolu svoje tělo, pocity a emoce.
        </p>
      </section>

      <section id="image-section">
        <div class="image-container">
          <img src="./img/yoga-pose.jpg" alt="Yoga pose" />
        </div>
      </section>
    </main>
  </div>
`;

