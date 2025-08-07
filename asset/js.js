
function loadHTML(selector, file, callback) {
    fetch(file)
        .then(res => {
            if (!res.ok) throw new Error(`Không tải được file: ${file}`);
            return res.text();
        })
        .then(data => {
           const header = document.querySelectorAll(selector)
           header.forEach((hed)=>{
              hed.innerHTML = data;
           });
           if (callback) callback();
        })
        .catch(err => console.error(err));
}

loadHTML(".Banner", "banner.html", head);
loadHTML(".Header", "header.html", head);
loadHTML(".Footer", "footer.html", 3);

function head(){
  const toggleBtn = document.querySelectorAll(".menu-btn");
  const closeBtn = document.querySelector(".close-btn");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  
  // Mở sidebar khi bấm nút menu
  toggleBtn.forEach((btn)=> {  
    btn.addEventListener("click", () => {
     sidebar.classList.add("active");
     overlay.classList.add("show");
  }); 
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
}  

// button
var btn1  = document.querySelectorAll(".section-four .button-65");

btn1.forEach((x)=> {
  x.addEventListener("click", ()=>{
    window.open("https://cit.ctu.edu.vn/mmt/mmt.html", "_blank");
  }); 
});



const slides = document.querySelectorAll(".slide");
let indexx = 0;


let showSlide = () => {
    slides[indexx].classList.remove("active");
    indexx = (indexx + 1 ) % 3;
    slides[indexx].classList.add("active");
}

setInterval(showSlide, 5000);

  const sections = document.querySelectorAll('.section-four');

  //section 4
const observer4 = new IntersectionObserver((entries, observer4) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer4.unobserve(entry.target); // Chỉ cần hiện 1 lần
    }
  });
}, {
  threshold: 0.1 // phần tử xuất hiện 10% trở lên thì hiện ra
});

sections.forEach(section => {
  observer4.observe(section);
});


// let image = document.querySelectorAll(".section-four .inner-image img");
// image.forEach((el) => {
//     el.addEventListener("click", ()=>{
//       el.classList.add('full');
//     });
// });

//section 3
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.inner-box, .inner-box-big');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Nếu muốn chỉ chạy 1 lần thì bỏ quan sát sau khi hiện
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // 20% phần tử xuất hiện mới kích hoạt
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});

//end section 3



  //section 4
                 
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
    if (index < items.length/visibleCount - 1) {
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
    if (index < items.length/visibleCount - 1){
        index++;
    }
    else index = 0;
    updateSlide();
  },20000);


// section 7

let circle = document.querySelector(".section-seven .inner-wrap");
let angle = 0;

let limage  = document.querySelectorAll(".section-seven .inner-image");
let idx = 0
function rotate(direction){

  angle += direction * 90;
  circle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  idx = (idx + direction + limage.length) % limage.length;
  limage.forEach((img, i) => {
    if (4- i -1 === idx) img.classList.add("active");
    else img.classList.remove("active");
  });
}

let prev2 =document.querySelector("#prev2");
let next2 = document.querySelector("#next2");

next2.addEventListener("click" ,()=>{
    rotate(1);
});
prev2.addEventListener("click" ,()=>{
    rotate(-1);
});


// update 

// end update 


//---------------
loadHTML("#Header", "header.html");