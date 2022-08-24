import { useState } from 'react'
import styles from './styles/container.module.scss'

const VegetaF = () => {

  const imageUp = "https://vegeta-flexiones.netlify.app/static/media/up.fd9f3c14.png";
  const imageDown = "https://vegeta-flexiones.netlify.app/static/media/down.2f147ccd.png";

  const [contador, setContador] = useState(1);
  const [flexion, setFlexion] = useState(0);
  const [image, setImage] = useState(imageUp);


  const incrementar = () => {

    setContador(contador + 1);

    // setFlexion(contador % 2 === 0 ? flexion + 1 : flexion) // Lo mismo on if ternario
    // setImage(contador % 2 === 0 ? imageUp : imageDown)  // Lo mismo on if ternario

    if (contador %2 === 0) {
      setFlexion(flexion + 1)
      setImage(imageUp)
    } else {
      setImage(imageDown)
    }


  }

    return (
      <div className={styles.container}>
        <button onClick={incrementar} className={styles.btn}>PushUP</button>
        <img  src={image} alt="imagen arriba" />
        <h2>{flexion}</h2>
      </div>
    )


};
export default VegetaF;
