import logo from './logo.svg';
import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
const nome = "Matheus"

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="João" />
      <SayMyName nome="Lucas" />
      <SayMyName nome={nome} />
      <Pessoa 
      nome="Rodrigo" 
      idade="28" 
      profissao="Programador"
      foto="https://imgs.search.brave.com/USbJAJlX1WjvvghOPHYrj_vaJonZFaE3Z-ep32Pl9iM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc3/Nzc3MzM4Ny9wdC9m/b3RvL21vdW50YWlu/cy1pbi10aGUtbW9y/bmluZy1vbi1hLWZv/Z2d5LWRheS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9STBP/QUEtLVREd3lQUlpK/TUVSWVltdllLU2Rj/U2JqdjF1czR6LXFU/QXJYQT0"
      />
    </div>
  );
}

export default App;

