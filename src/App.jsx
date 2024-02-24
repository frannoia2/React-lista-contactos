import styles from "./App.module.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { NuevoContacto } from "./paginas/NuevoContacto";
import { HomePage } from "./paginas/HomePage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/" >
          <h1 className={styles.title}>Lista de contactos</h1>
        </Link>
        <Link to="/new" className={styles.newLink}>
          <button className={`${styles.newButton} ${styles.textNewButton}`} type="submit">Nuevo contacto</button>
        </Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/new"  element={<NuevoContacto />}/>
        </Routes>
      </main>
    </Router>
    
  );
}

export default App;
