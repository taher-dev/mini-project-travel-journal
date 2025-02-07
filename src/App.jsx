import "./App.css";
import globe from "./assets/images/icon-globe.svg";
import Card from "./components/Card/Card";
import data from "./assets/js/data";

const App = () => {
  // Card List
  const cardList = data.map((item) => {
    return (
      <Card
        key={item.id}
        // img={item.img}
        // title={item.title}
        // country={item.country}
        // googleMapsLink={item.googleMapsLink}
        // dates={item.dates}
        // text={item.text}
        item={item} // short
      />
    );
  });

  // Page Contents
  return (
    <>
      <header>
        <img src={globe} alt="globe icon" />
        <h1>my travel journal</h1>
      </header>

      <main>{cardList}</main>
    </>
  );
};

export default App;
