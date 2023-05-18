import Swal from "sweetalert2";
export const SuccessNotification = () => {
  
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Əlaqə uğurla yaradıldı'
    })
  };
 export  const onFinishFailed = (errorInfo) => {
  Swal.fire({
    icon: 'error',
    title: 'Xəta...',
    text: errorInfo,
   
  })
  };
  
    export const Remove=()=>{
      Swal.fire({
        title: 'Silmək istəyirsiz?',
        text: "Yenidən geri qaytarmaq olmaz!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Razıyam!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'SİLİNDİ!',
            'Məlumat artiq silidi.',
            'success'
          )
        }
      })
    }
    export const ShowContactDetails=(contactdata)=>{
      const message = "Ad: " + contactdata.name + ",<br>" +
      "Soyad: " + contactdata.surname + ",<br>" +
      "Ata adı: " + contactdata.father + ",<br>" +
      "Ixtisas: " + contactdata.profession;
      Swal.fire({
        icon: 'info',
        title: message,
        footer: '2023.05.18'
        
      })
      
    }
    
