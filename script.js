// Tương tác nhỏ: đánh dấu đã ôn xong.
const checkButton = document.getElementById("checkButton");
const checkMessage = document.getElementById("checkMessage");

checkButton.addEventListener("click", function () {
  const completed = checkButton.classList.toggle("done");

  if (completed) {
    checkButton.textContent = "[ ĐÃ ÔN XONG ✓ ]";
    checkMessage.textContent = "Trạng thái: hoàn thành. Chúc bạn làm bài tốt!";
  } else {
    checkButton.textContent = "[ ĐÁNH DẤU ĐÃ ÔN XONG ]";
    checkMessage.textContent = "Trạng thái: chưa hoàn thành.";
  }
});

// Cập nhật mục điều hướng theo phần đang được xem.
const sections = document.querySelectorAll(".lesson");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 130) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});
