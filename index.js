function validarEmail(){
     var email = document.querySelector('#email');
     var error = document.querySelector('#error-email');

     if(!email.checkValidity())
          { error.innerHTML = "Email inválido";}
         
    }

    function redefinirMsg(){
        var error = document.querySelector('#error=email');
        if (error.innerHTML == "Email inválido"){
            error.innerHTML ="";
        }
    }

    function adicionar(){
        var email = document.querySelector('#email');
        if (!email.checkValidity == true){
            this.adicionar(email);
        }
    }
  
    
    /* 
     Aqui estava tentanto igual o video que vi mas não deu certo.


    class Email{



    constructor(){
        this.id=0;
        this.arrayEmail = [];
    }

    validar(){
        let email = this.lerDados();
        if (this.validarCampo(email) == true){
         this.adicionar(email);
        }
        this.listaTabela();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        let tr =tbody.insertRow();

        for(let i = 0; i < this.arrayEmail.length; i ++){
            let tr = tbody.insertRow();

            let td_email = tr.insertCell();
            let td_acao = tr.insertCell();

            td_email.innerText = this.arrayEmail[i].nomeEmail;
            td_acao.innerText = this.arrayEmail[i].id;
        }
    }
    
    adicionar(email){
        this.arrayEmail.push(email);
        this.id++;
    }


    lerDados(){

        let email = {}

        email.nomeEmail = document.getElementById('email').value;
        return email;

    }

    validaCampos(email){

        let msg='';

        if(msg != ''){
            return false
        }
        return true;
    }
    
}*/

