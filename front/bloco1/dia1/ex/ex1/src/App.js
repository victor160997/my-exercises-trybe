import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const Compromissos = ['Fazer o almoço', 'Fazer a janta', 'Exercícios de React', 'Arrumar as malas', 'Limpar o quarto'];

function App() {
  return (
    Compromissos.map((compromisso) => Task(compromisso))
  );
}

export default App;
