
const Form = ({ handleSubmit, handleChange }) => {


  return (
        <>
          <form onSubmit={handleSubmit}>
            <div className="form-header">
              <h2>Guardar jSon</h2>
            </div>

            <div className="form-group">
                <label>Nombre</label>
                <input
                  onChange={handleChange}
                  className="form-control"
                  type="text"
                  name="nombre"
                />
              </div>
            <div className="form-group">
                <label>Nombrelink</label>
                <input
                  onChange={handleChange}
                  className="form-control"
                  type="text"
                  name="nombreLink"
                />
              </div>

            <button type="submit">Registrar Usuario</button>
          </form>
        </>
      )

}
export default Form;

