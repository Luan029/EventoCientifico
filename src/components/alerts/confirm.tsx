import Swal from "sweetalert2";

const Confirm = {
    cadastrar: () =>{
        return Swal.fire({
            title: 'Deseja Realizar este Cadastro?',
            text: 'Confirmando o cadastro, todos os dados serão salvos.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085de',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, cadastre!',
        });
    }

};

export default Confirm;