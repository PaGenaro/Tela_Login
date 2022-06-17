const emailsValidos = [];

function validarEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');

    if(!email.checkValidity())
         { error.innerHTML = "Email inválido"}
         
   else{return emailsValidos.push(email)}
   }

   console.log(emailsValidos);


    /* Para validar email está ok*/

   /*Agora tentativas para incluir na lista*/

   let input =document.getElementById('#email');
   let btnAdd =document.getElementById('#btn-add');
   let table =document.getElementById('#areaLista');

   function addTarefa(){
    let valorInput = input.value;

    if ((valorInput !== error) && (valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
      let novoItem=`<table id="areaLista">
        <thead>
          <th class="funcaoemail">Emails Validos</th>
          <th class="funcaoacao">Ação</th>
      </thead>

          <tr id="lista">
            <td> ${valorInput}</td>

            <td>x</td>
          </tr>
         <tbody id="tbody">
            
         </tbody>
      </table>`;

    table.innerHTML += novoItem;

    input.value ="";
    input.focus();

    }
   }

  /* Aqui foi a primeira tentativa que não deu certo*/

 /*
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

