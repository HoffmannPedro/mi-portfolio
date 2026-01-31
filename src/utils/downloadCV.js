import Swal from "sweetalert2";
import { texts } from "../data";

export const handleDownloadCV = (language) => {
    Swal.fire({
        title: texts.contact[language].cvMsg.title,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: texts.contact[language].cvMsg.confirmBtn,
        cancelButtonText: texts.contact[language].cvMsg.cancelBtn,
        background: '#0D1F22',
        color: '#fff',
        confirmButtonColor: '#2E5902',
        cancelButtonColor: '#A62B1F',
        iconColor: '#C50808',
    }).then((result) => {
        if (result.isConfirmed) {
            const link = document.createElement('a');
            link.href = '/CV_Pedro_Hoffmann.pdf';
            link.download = 'CV_Pedro_Hoffmann.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });
};