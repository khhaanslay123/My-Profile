document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  // Hiệu ứng đổi nền thanh navbar khi cuộn
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// Hiệu ứng tải trang + hiện nội dung chính
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const main = document.getElementById("main-content");

  // Sau 0.5 giây, bắt đầu ẩn preloader
  setTimeout(() => {
    preloader.classList.add("hide");

    // Sau khi hiệu ứng fade-out xong (1.2s), hiện nội dung chính
    setTimeout(() => {
      main.classList.add("show");
    }, 1200);
  }, 500);
});
