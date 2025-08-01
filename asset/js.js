const slides = document.querySelectorAll(".slide");
let indexx = 0;


let showSlide = () => {
    slides[indexx].classList.remove("active");
    indexx = (indexx + 1 ) % 3;
    slides[indexx].classList.add("active");
}

setInterval(showSlide, 5000);


const toggleBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

// Mở sidebar khi bấm nút menu
toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("show");
});

// Đóng sidebar khi bấm nút X
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("show");
});
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("show");
});



                 
  const wrap = document.querySelector('.news .inner-wrap');
  const items = document.querySelectorAll('.box-new');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  let visibleCount = 3;
  let index = 0;
  let itemWidth = 0;
  let gap = 20;
  function updateVisibleCount() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 992) {
          visibleCount = 1;
        } else {
            visibleCount = 3;
        }
    }
    function updateItemWidth() {
        itemWidth = items[0].offsetWidth + gap;
    }

  const updateSlide = () => {
    updateVisibleCount();
    updateItemWidth();
    wrap.style.transform = `translateX(-${index * itemWidth * visibleCount}px)`;
  };

  nextBtn.addEventListener('click', () => {
    if (index < items.length - visibleCount*2) {
      index++;
      updateSlide();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateSlide();
    }
  });

  window.addEventListener('resize', () => {
    wrap.style.transform = `translateX(-${0 * itemWidth * visibleCount}px)`;
  });

  setInterval(()=>{
    if (index < items.length - visibleCount*2){
        index++;
    }
    else index = 0;
    updateSlide();
  },8000);