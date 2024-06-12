
//FUNCION ALERT

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    '<h4 class="alert-heading" data-titulo-alert="Prueba Titulo Alerta Azulito :)" data-titulo-formulario="">Well done!</h4>',
    '<p data-contenido-alert="Prueba Contenido Alert Bluey :3" data-descripcion-formulario="">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>',
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}



//FUNCION CAMBIO ALERT

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('', 'primary')

    //FUNCION CAMBIO TITULO
    let cajaTituloAlert = alertPlaceholder.querySelector('h4')
    let tituloAlert = cajaTituloAlert.getAttribute('data-titulo-alert')
    cajaTituloAlert.innerText = tituloAlert

    //FUNCION CAMBIO CONTENIDO
    let cajaContenidoAlert = alertPlaceholder.querySelector('p')
    let contenidoAlert = cajaContenidoAlert.getAttribute('data-contenido-alert')
    cajaContenidoAlert.innerText = contenidoAlert
  })
}


/*
//FUNCION POPOVER

//INICIALIZADOR
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



//FUNCION
//FUNCION EVENTO BOOTSTRAP
const myPopoverTrigger = document.getElementById('myPopover')
myPopoverTrigger.addEventListener('click', function() {
  miPopover = document.querySelectorAll('[data-bs-toggle="popover"]')

//FUNCION CAMBIO TITULO POPOVER

miPopover.addEventListener('click',function(event){
  let botonPopover = event.relatedTarget

  let tituloPopover = botonPopover.getAttribute('data-titulo-popover')
  document.querySelector('[data-bs-title]').innerHTML = tituloPopover


  //CAMBIO CONTENIDO OFFCANVA
  let contenidoPopover = botoncanva.getAttribute('data-contenido-popover')
  document.querySelector('.offcanvas-body').textContent = contenidoPopover
  
  
})
  
})


*/






/*
miPopover = document.querySelectorAll('[data-bs-toggle="popover"]')

//FUNCION CAMBIO TITULO POPOVER

miPopover.addEventListener('click',function(event){
  let botonPopover = event.relatedTarget

  let tituloPopover = botonPopover.getAttribute('data-titulo-popover')
  document.querySelector('[data-bs-title]').innerHTML = tituloPopover


  //CAMBIO CONTENIDO OFFCANVA
  let contenidoPopover = botoncanva.getAttribute('data-contenido-popover')
  document.querySelector('.offcanvas-body').textContent = contenidoPopover
  
  
})
*/





//FUNCION TOAST

//INICIALIZADOR

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

//FUNCION CAMBIO DE DATA

//FUNCION TOAST PARA MANIPULAR LOS ELEMENTOS
const miToast = document.getElementById('liveToastBtn')

//AGREGAR UN OBSERVADOR SOBRE EL TOAST

miToast.addEventListener('click', function(){

  //RECONOCER EL ELEMENTO QUE HABILITA EL TOAST


  //CAMBIO TITUTLO TOAST

  let cajaTituloToast = toastLiveExample.querySelector('strong');

  let toastTitulo = cajaTituloToast.getAttribute('data-titulo-toast');
  
  cajaTituloToast.textContent = toastTitulo;


  //CAMBIO CONTENIDO TOAST

  
  let cajaContenidoToast = toastLiveExample.querySelector('.toast-body');

  let toastContenido = cajaContenidoToast.getAttribute('data-contenido-toast');

  cajaContenidoToast.innerText = toastContenido;


})


//FUNCION OFFCANVA

//FUNCION OFFCANVA PARA MANIPULAR LOS ELEMENTOS

const miOffcanva = document.getElementById('offcanvasExample')

//AGREGAR UN OBSERVADOR AL OFFCANVA
miOffcanva.addEventListener('show.bs.offcanvas', function(event){

  //CAMBIO TITULO OFFCANVA
  let botoncanva = event.relatedTarget

  let tituloCanva = botoncanva.getAttribute('data-titulo-canva')
  document.getElementById('offcanvasExampleLabel').innerText = tituloCanva


  //CAMBIO CONTENIDO OFFCANVA
  let contenidoCanva = botoncanva.getAttribute('data-contenido-canva')
  document.querySelector('.offcanvas-body').textContent = contenidoCanva
})


//FUNCION PARA ASIGNAR LA RUTA DE LOS DATOS FORMULARIO

document.getElementById('subirTituloContenido').addEventListener('click', function(){
  let formularioTitulo = document.getElementById('tituloFormulario').value
  console.log(formularioTitulo)

  let formularioDescripcion = document.getElementById('descripcionFormulario').value
  console.log(formularioDescripcion)

  if(formularioTitulo == '' && formularioDescripcion == '') {
    //NINGUN CAMBIO ALERT TITULO NI CONTENIDO
    cajaTituloAlert.innerText = tituloAlert
    cajaContenidoAlert.innerText = contenidoAlert

    //NINGUN CAMBIO TOAST TITULO NI CONTENIDO
    cajaTituloToast.textContent = toastTitulo
    cajaContenidoToast.innerText = toastContenido

    //NINGUN CAMBIO OFFCANVA TITULO NI CONTENIDO
    document.getElementById('offcanvasExampleLabel').innerText = tituloCanva
    cajaContenidoToast.innerText = toastContenido

  } else {
    //CAMBIO ALERT
    cajaTituloAlert.textContent = formularioTitulo
    cajaContenidoToast.innerText = formularioDescripcion


    //CAMBIO TOAST
    cajaTituloToast.textContent = formularioTitulo
    cajaContenidoToast. innerText = formularioDescripcion

    //CAMBIO OFFCANVA
    document.getElementById('offcanvasExampleLabel').innerText = formularioTitulo
    document.querySelector('.offcanvas-body').textContent = formularioDescripcion
    
  }



})

//DATOS TITULO Y DESCRIPCION FORMULARIO



let formularioTitulo = document.getElementById('tituloFormulario').value



let formularioDescripcion = document.getElementById('descripcionFormulario').value

console.log(formularioDescripcion)
