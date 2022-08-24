import React from 'react'
import styles from './styles/container.module.scss'

class Vegeta extends React.Component {

  imageUp = "https://vegeta-flexiones.netlify.app/static/media/up.fd9f3c14.png";
  imageDown = "https://vegeta-flexiones.netlify.app/static/media/down.2f147ccd.png";

  constructor(props) {
    super(props);

    this.state = {
      contador: 1,
      image: this.imageUp,
      flexion: 0
    }

    this.incrementar = this.incrementar.bind(this);

  }

  incrementar = () => {
    this.setState(
      {
        contador: this.state.contador + 1,
        image: (this.state.contador % 2 === 0 ? this.imageUp : this.imageDown), // funcion modulo % 2 con if ternario
        flexion: (this.state.contador % 2 === 0 ? this.state.flexion + 1 : this.state.flexion)

      }
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <button onClick={this.incrementar} className={styles.btn}>PushUP</button>
        <img  src={this.state.image} alt="imagen arriba" />
        <h2>{this.state.flexion}</h2>
      </div>
    )
  }

};
export default Vegeta;
