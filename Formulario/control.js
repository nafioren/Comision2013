var btn = document.getElementById('btn');
var pass = document.getElementById('pass');
var user = document.getElementById('user');
var regext = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/


btn.addEventListener('click', function(e){

      if(!regext.test(user.value)){

        alert('Debes colocar una direcciÃ³n de mail valida')
        e.preventDefault();
        return false;

      }else if(user.value === ''){

        alert('El campo Usuario es obligatorio!')
          e.preventDefault();
          return false;

      }else if(pass.value === ''){
        alert('El campo contraseÃ±a es obligatorio!')
        e.preventDefault();
        return false;
      }
});