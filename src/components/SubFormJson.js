
function SubFormJson({ link, styleLink, styleLinkAd, labelNombre, labelArchivo, handleChange, nameLink, nameArchivo, btnName }) {

  function getNewFileHandle(data) {

    const opts = {
      excludeAcceptAllOption: true ,
      suggestedName: data,
      types: [{
        description: 'Text file',
        // accept: {
        //   'text/plain': ['.txt']
        // },
        accept: {
          'image/*': ['.jpg', '.txt']
        }

      }],
    };

    const prueba = window.showSaveFilePicker(opts);

    console.log(prueba)
    return prueba;
  }


  return (
    <>
        <div style={{display: `${link}`}} className={`${styleLink} ${styleLinkAd}`}>
                <div className="form-group">
                    <label>{labelNombre}</label>
                    <input
                      onChange={handleChange}
                      className="form-control"
                      type="text"
                      name={nameLink}
                    />
                </div>
                <div className="form-group">
                    <label>{labelArchivo}</label>
                    <input
                      id={nameArchivo}
                      onChange={handleChange}
                      className="form-control"
                      type="text"
                      name={nameArchivo}
                    />
                    <button onClick={() => {
                      var valor = document.getElementById(nameArchivo).value;
                      return getNewFileHandle(valor)
                    }} >{btnName}</button>
                </div>
          </div>
    </>
  )
}



export default SubFormJson;