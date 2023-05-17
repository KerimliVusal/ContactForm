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
    console.log('Failed:', errorInfo);
  };
  
    export const Remove=()=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
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
    
