const personas = [
    {nombre:"cesar",edad:20,numero:3215668657,email:"cesarwamartinez@gmail.com"}
]





const formulario=document.getElementById("formulario")

const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const contraseña= document.getElementById("contraseña")
const emailDisponible = document.getElementById("email-veri")



personas.forEach(persona =>{
    if(persona.email == correo.target.value){
        console.log("es igua")
    }else{
        console.log("no es")
    }
})




document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault()
    nombre.focus()
})


formulario.addEventListener("submit",function(event){
    const nombre=document.getElementById("nombre").value
    const correo=document.getElementById("correo").value
    const contraseña=document.getElementById("contraseña").value

    document.writeln(`<h1>${nombre}   ${contraseña}  ${correo}</h1>`)

})


console.log(emailDisponible)