import "./App.sass";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="title">Coffee Shop</h1>
        <p className="subtitle light-color">
          Aberto todos os dias das 08h às 18h
        </p>
        <p className="subtitle light-color">Rua Machado de Assis, 397</p>

        <section className="section-title">Cafés</section>

        <section className="section-item">
          <div className="text-left">
            <span className="">Cappuccino</span>
            <br />
            <span className="font-small light-color">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas
            </span>
          </div>
          <div className="text-right">
            <span className="">R$ 8,00</span>
          </div>
        </section>

        <section className="section-item">
          <div className="text-left">
            <span className="">Café Expresso</span>
            <br />
            <span className="font-small light-color">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas
            </span>
          </div>
          <div className="text-right">
            <span className="">R$ 8,00</span>
          </div>
        </section>

        <section className="section-title">Lanches</section>

        <section className="section-item">
          <div className="text-left">
            <span className="">Bolo de Laranja</span>
            <br />
            <span className="font-small light-color">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas
            </span>
          </div>
          <div className="text-right">
            <span className="">R$ 8,00</span>
          </div>
        </section>

        <section className="section-item">
          <div className="text-left">
            <span className="">Brownie</span>
            <br />
            <span className="font-small light-color">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas
            </span>
          </div>
          <div className="text-right">
            <span className="">R$ 8,00</span>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
