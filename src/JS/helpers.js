import swal from 'sweetalert';

export const showError = message => {
  swal('Error!', `${message}`, {
    className: 'swal-red',
    icon: 'error',
    buttons: false,
    timer: 5000,
  });
};

export const showSuccess = message => {
  swal('Success!', `${message}`, {
    className: 'swal-green',
    icon: 'success',
    buttons: false,
    timer: 5000,
  });
};
