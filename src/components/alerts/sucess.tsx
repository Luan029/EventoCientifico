import Swal from 'sweetalert2';

const Sucess = {
    cadastro: () => {
        return Swal.fire(
            'Cadastrado!',
            'A operação de cadastro bem sucedida!',
            'success'
        )
    },
    cadastroArtigo: () => {
        return Swal.fire(
            'Artigo Cadastrado!',
            'O seu artigo foi cadastrado com sucesso!',
            'success'
        )
    },

};


export default Sucess