function contactar(){
    // let nombre = document.getElementById(`Nombre`).value; 
    // let correo = document.getElementById(`Correo`).value;
    // let mensaje = document.getElementById(`Mensaje`).value;

    // if(!nombre || !correo || !mensaje){
    //     alert('error faltan datos');
    // }
    // else{
    //  alert(nombre + "✏️su nmensaje ha sido enviado. gracias por contatarnos");
    // }
    // let bolsa = documento.querySelectorAll('.form-control');
    // let nombre = bolsa[0].value;

    // for (let i = 0; i < bolsa.length; i++) {
    //     const elemento = bolsa[i].value; //el array se llama bolsa

    //     if(!nombre || !correo || !mensaje){
    //         alert('error... faltan datos');
    //         return; //se encuentra un campo vacio y de una sale
    //     }

    //     else{
    //         alert(elemento + "✏️su nmensaje ha sido enviado. gracias por contatarnos");
    //         // return;
    //     }
    // }
    
  let bolsa = document.querySelectorAll('.form-control');
  let nombre = bolsa[0].value;

  for (let i = 0; i < bolsa.length; i++) {
    const elemento = bolsa[i].value;   //el array se llama bolsa

      if(!nombre || !correo || !mensaje){
       alert('🎈Error faltan datos')
    return;
    }
  else{
    alert(elemento + "🖋️su mensaje a sido enviado. Gracias por contactarnos")
    return;
  }

  }

}