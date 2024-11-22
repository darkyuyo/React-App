import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  //const [isLoading, setIsLoading] = useState(false);
  //const handleClick = () => setIsLoading(!isLoading);
  const [list, setList] = useState(["Goku", "Tanjiro", "Eren"]);
  const addMinion = () => setList([...list, "Minion"]);
  const delMinion = () => setList(list.slice(0, -1));
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );
  return (
    <Card>
      <Button onClick={addMinion}>Agregar</Button>
      <Button onClick={delMinion}>Quitar</Button>
      <CardBody title="Hola mundo" text="Este es el texto" />
      {contenido}
    </Card>
  );
}
export default App;
