import "./App.sass";
import { coffees, snacks } from "./utils/products";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="title">Coffee Shop</h1>
        <p className="subtitle light-color">
          Aberto todos os dias das 08h às 18h
        </p>
        <p className="subtitle light-color">Rua Machado de Assis, 397</p>
      </header>
      <main>
        <section className="section-title">Cafés</section>

        {coffees.map((coffee) => (
          <section className="section-item">
            <div className="text-left">
              <span className="">{coffee.name}</span>
              <br />
              <span className="font-small light-color">
                {coffee.description}
              </span>
            </div>
            <div className="text-right">
              <span className="">R$ {coffee.price}</span>
            </div>
          </section>
        ))}

        <section className="section-title">Lanches</section>

        {snacks.map((snack) => (
          <section className="section-item">
            <div className="text-left">
              <span className="">{snack.name}</span>
              <br />
              <span className="font-small light-color">
                {snack.description}
              </span>
            </div>
            <div className="text-right">
              <span className="">R$ {snack.price}</span>
            </div>
          </section>
        ))}
      </main>
      <p className="footer font-small">
        ♡<br />
        Faça seu pedido através do <br />
        WhatsApp (99) 99999-9999
      </p>
    </div>
  );
}

export default App;
