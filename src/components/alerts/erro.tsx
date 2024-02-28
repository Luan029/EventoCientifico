import Swal from "sweetalert2"

const Erro = {
    erro: (motivo: string) => {
     

        return Swal.fire({
            title: 'Oops...',
            html: `${motivo.replace(/\n/g, '<br>')}`,
            icon: 'error',
        });
    },
};

export default Erro;