export default function Cambiar() {
  return (
    <>
      <h1>Cambiar color y fuente</h1>
      <p>cuando haga click, cambiarn la fuente y el color de la pagina</p>

      <br />
      <button onClick={cambiar}>Click!</button>
    </>
  );
}

const cambiar = () => {
  const pagina = document.querySelector("#root");
   pagina.classList.contains('dark')?(pagina.classList.add('light'), pagina.classList.remove('dark')):(pagina.classList.add('dark'), pagina.classList.remove('light'))
  
};
