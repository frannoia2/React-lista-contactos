import styles from "./NuevoContacto.module.css";

export function NuevoContacto (){

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return(
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.control}>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Nombre de contacto"
        />
        <input
          type="tel"
          name="phone"
          className={styles.input}
          placeholder="Teléfono"
        />
        <input
          type="state"
          name="state"
          className={styles.input}
          placeholder="Ciudad"
        />
      </div>
      <div className={styles.control}>
        <button className={styles.button} type="submit">Submit form</button>
      </div>
    </form>
    
  );
    
}