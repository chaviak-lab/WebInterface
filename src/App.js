import './App.css';
import Menu from "./components/menu/Menu";
import ShopCard from "./components/shop-card/ShopCard"
import CardItemComponet from './components/card-item-component/CardItem-component';

function App() {
  const itemList = [
    { id: 1, name: "apple granny smith organic", imgurl: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg", price: 20 },
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
