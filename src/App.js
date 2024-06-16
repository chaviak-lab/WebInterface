import './App.css';
import Menu from "./components/menu/Menu";
import ShopCard from "./components/shop-card/ShopCard"
import CardItemComponet from './components/card-item-component/CardItem-component';

function App() {
  const itemList = [
    { id: 1, name: "apple granny smith organic", imgurl: "", price: 20 },
  ]
  return (
    <section className="app">
      <header className="app-header">
        <Menu />
      </header>
      <main>
        <section className="container">

          <div className="row">
            {itemList.map(item => {
              return (
                <CardItemComponet key={item.id} card={item} />
              );
            })}
          </div>
        </section>
      </main>
    </section>
  );
}
export default App
