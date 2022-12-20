function chamaAlert(message) {
  Toastify({
    text: message,
    duration: 30000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #FFC107, #FFA000)",
    },
    onClick: function () {},
  }).showToast();
}
