(function(){
    'use strict';
    
     const txtTitulo = document.getElementById('txtTitulo')
     const btn = document.getElementById('btn')
     const formCadastro = document.querySelector('.formCadastro')
 
      // colocar o addEvebtListe no formularia é o mais semantico
      formCadastro.addEventListener('submit',function (e){
          console.log(txtTitulo.value)
          if(!txtTitulo.value){  //se o textTitulo nãp tiver nenhum valor
              showErrorMessage("Preencha todos os campos") 
             e.preventDefault()//interrompe o evento
             txtTitulo.focus() //coloca o foco no input 
             }  
          })
          const txtDescricao = document.getElementById('txtDescricao')
          const contadorContainer = document.getElementById('contador')
          const resta = contadorContainer.getElementsByTagName('p')[0]
          const maxima = txtDescricao.maxLength
          const chkAceito = document.getElementById('chkAceito')
         mostraNumero(maxima)
         // contadorContainer.removeAt
 
          const feedbackMessage = document.getElementById('feedbackMessage')
          const feedbackMessageCloseBtn = feedbackMessage.getElementsByName('button')[0]
 
          function showErrorMessage(msg){
             //  alert('erro')
             feedbackMessage.classList.add('show')
             feedbackMessage.getElementsByTagName('p')[0].textContent = 
             msg
          }
          feedbackMessageCloseBtn.addEventListener('click',function(){
              feedbackMessage.classList.remove('show')
          })
 
        const txtDescricao = document.getElementById('txtDescricao')
        const contadorContainer = document.getElementById('contador')
        const resta = contadorContainer.getElementsByTagName('span')[0]
        const maxima = txtDescricao.maxLength
        
       mostraNumero(maxima)
       // contadorContainer.removeAttribute('style') mesma funcao da linha 21
        contadorContainer.style.display = 'block'
 
       // funcao conta numeros de caracteres inserido no  input
       function contaCaracter (){
       let numeroLetrasDigitas = this.value.length
           let caractersRestante = parseInt(maxima) - parseInt(numeroLetrasDigitas)
           mostraNumero(caractersRestante)
           console.log(resta)   
       }
       //funcao para mostrar numeros de caracters    
       function mostraNumero (n){
           resta.textContent = n
       }
      
       txtDescricao.addEventListener("input",contaCaracter)
        
       btn.disabled = true
 
      chkAceito.addEventListener('change',function() {
          btn.disabled = !this.checked //habilita o checked de estiver desativado e vice-versa
      })
      const chkAceito = document.getElementById('chkAceito')
      const feedbackMessageCloseBtn = feedbackMessage.getElementsByName('button')[0]
 
      
 })()