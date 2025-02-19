import React from "react";
import styles from "./styles.module.css";
function Produtos() {
  return (
    <div >
      <h1>This weeks specials!</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia11568/slide/decoracao-de-pratos-13-cursos-cpt.jpg" alt="p1" />
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
          </p>
        </div>
        <div className={styles.card}>
          <div>
            <img src="https://cdn.deliway.com.br/blog/base/675/956/759/prato-executivo.jpg" alt="p2" />
          </div>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
          </p>
        </div>
        <div className={styles.card}>
          <div>
            <img src="https://www.gastronomia.com.br/wp-content/uploads/2024/01/comida-com-f-feijoada-falafel-fondue-e-muito-mais.jpg" alt="p3" />
          </div>
          <p>
            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
