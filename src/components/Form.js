
const Form = ({onSubmit, onChange, formValues}) => {

  const handleClick = e => {
    console.log('Button was clicked');
  };


  return (
        <>
        <form onSubmit={onSubmit}>
            <div className="form-header">
              <h2>Guardar jSon</h2>
            </div>

            <div className="form-group">
                <label>Nombre</label>
                <input
                  onChange={onChange}
                  className="form-control"
                  type="text"
                  name="nombre"
                  value={formValues.nombre}
                />
              </div>
            <div className="form-group">
                <label>Nombrelink</label>
                <input
                  onChange={onChange}
                  className="form-control"
                  type="text"
                  name="nombreLink"
                  value={formValues.nombreLink}
                />
              </div>

            <button onClick={handleClick} className="btn btn-primary">Save</button>
          </form>

        </>
      )

}
export default Form;

