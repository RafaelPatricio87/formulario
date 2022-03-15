(function(){
    'use strict';

    const txtTitulo = document.getElementById('txtTitulo')
    const btn = document.getElementById('btn')
    const formCadastro = document.querySelector('.formCadastro')

  

    formCadastro.addEventListener("submit",function (e){
        console.log(txtTitulo.value)
        if (!txtTitulo.value){  //se o textTitulo não tiver nenhum valor
            showErrorMessage("Preencha todos os campos",function(){
                txtTitulo.focus() //coloca o foco no input  
            }) 
           e.preventDefault()//interrompe o evento
          
           }  
        })
        const feedbackMessage = document.getElementById('feedbackMessage')
        const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName('button')[0]

        function  showErrorMessage(msg,cb){
            feedbackMessage.classList.add('show')
            feedbackMessage.getElementsByTagName('p')[0].textContent = msg

            feedbackMessageCloseBtn.focus()

            function hideErrorMessage() {
               feedbackMessage.classList.remove('show') 

                  feedbackMessageCloseBtn.removeEventListener('click',hideErrorMessage)
                  feedbackMessageCloseBtn.removeEventListener('keyup',pressedkeyboardOnBtn)
               if(typeof cb ==="function"){
                cb()
               }
            }
             
            function pressedkeyboardOnBtn(e){
               if(e.keyCode === 27){
                 hideErrorMessage()
               }
            }

            feedbackMessageCloseBtn.addEventListener('click',hideErrorMessage)
            
            feedbackMessageCloseBtn.addEventListener('keyup',pressedkeyboardOnBtn)
           
        }
       

          const txtDescricao = document.getElementById('txtDescricao')
          const contadorContainer = document.getElementById('contador')
            const resta = contadorContainer.getElementsByTagName('span')[0]
           const maxima = txtDescricao.maxLength
           mostraNumero(maxima)

           contadorContainer.style.display = 'block'
           
           function checkLength() {
            let numeroLetrasDigitas = this.value.length
            let caractersRestante = parseInt(maxima) - parseInt(numeroLetrasDigitas) 
            mostraNumero (caractersRestante)
        }
            function mostraNumero (n){
               resta.textContent = n
           }
       
           txtDescricao.addEventListener("input",checkLength)

           btn.disabled = true

           const chkAceito = document.getElementById('chkAceito')
           chkAceito.addEventListener('change',function() {
            btn.disabled = !this.checked //habilita o checked de estiver desativado e vice-versa
        })
       
           
        

})()