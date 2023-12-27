let menuMb = document.querySelector(".menuMb");
let listMenu = document.querySelector(".menulist");
menuMb.addEventListener("click", () => {
    listMenu.classList.toggle("toggle");
});
// nut back to top
function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // show nút back top
  var lastScrollTop = 0;
  window.addEventListener("scroll", handleScroll);
  
  function handleScroll() {
    var backToTopButton = document.querySelector(".back-to-top");
    var scrollTop = document.documentElement.scrollTop; // lấy vtri cuộn hiện tại
    if (scrollTop > 20 && scrollTop > lastScrollTop) {
      // Kiểm tra nếu vị trí của trang lớn hơn 20 pixel và trang đang cuộn hoặc đứng im
      backToTopButton.style.display = "flex";
    } else {
      backToTopButton.style.display = "none";
    }
    // Cập nhật trạng thái cuộn trước đó
    lastScrollTop = scrollTop;
  }
  
  // những con số
  let isAnimationTriggered = false;
  function runNumberAnimation() {
    if (isAnimationTriggered) {
      return;
    }
    let numberElements = document.getElementsByClassName('number');
    let targets = [45, 27, 836];
    let currentNumbers = [0, 0, 0];
    let intervalIds = [];
  
    for (let i = 0; i < numberElements.length; i++) {
        let numberElement = numberElements[i];
        let targetNumber = targets[i];
        let currentNumber = currentNumbers[i];
  
        let intervalId = setInterval(function() {
            if (currentNumber >= targetNumber) {
                clearInterval(intervalId);
            } else {
                currentNumber++;
                numberElement.innerText = formatNumber(currentNumber, i);
            }
        },10);
        
        intervalIds.push(intervalId);
    }
  
    function formatNumber(number, index) {
        if (index === 0) {
          return number + '+';
        } else if (index === 1) {
          return number + '+';
        } else if (index === 2) {
            return number + '+';
        } 
    }
    isAnimationTriggered = true;
    return intervalIds;
  }
  
  window.addEventListener("scroll", number);

  function number() {
    var timelines = document.querySelectorAll(".number");
    for (var i = 0; i < timelines.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = timelines[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        runNumberAnimation();
      }
    }
  }