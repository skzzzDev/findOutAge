import { FormEvent, useState } from "react";
import "./App.css";

interface ResultProps {
  nome: string;
  idade: number;
}

function App() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [result, setResult] = useState<ResultProps>()

  function sendIdade(e: FormEvent) {
    e.preventDefault()

    const year = new Date().getUTCFullYear();
      setResult({
        nome: nome,
        idade: year - Number(idade)
      }) 

      setNome("")
      setIdade("")
  }

  return (
    <div className="conatiner">
      <h1>Descubra sua idade</h1>

      <form className="form" onSubmit={sendIdade}>
        <label>Qual o seu nome?</label>
        <input 
          className="input" 
          placeholder="Digite seu nome..." 
          required 
          value={nome}
          onChange={ (e) => setNome(e.target.value)}
          />

        <label>Qual ano que nasceu?</label>
        <input 
          className="input" 
          placeholder="Digite o ano que nasceu..." 
          required 
          value={idade}
          onChange={ (e) => setIdade(e.target.value)}
          />

        <button 
          type="submit" 
          onClick={sendIdade}
          className="button">
          Descobrir
          
        </button>
      </form>

      {result && result.nome !== "" && (
        <section className="result">
          <h2>{result?.nome} você tem: <span>{result?.idade} anos</span></h2>
        </section>
      )}


      <footer className="footer">DESENVOLVIDO BY @SKZ</footer>

    </div>
  );
}

export default App;
