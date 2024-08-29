// popup Input Nama
document.getElementById('popup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('popup-name-input').value;
    const welcomeText = document.getElementById('welcome-text');
    
    if (nameInput) {
        welcomeText.textContent = `Hi ${nameInput}, Welcome to our website`;
        welcomeText.style.fontFamily = 'Garet, sans-serif';
        welcomeText.style.fontWeight = '500';
        welcomeText.style.lineHeight = '1.2';
        document.getElementById('name-popup').style.display = 'none';
        document.querySelector('.home-page').classList.remove('blur');
    }
});

// navbar responsive
const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');
 

tombol.addEventListener('click', () => {
	menu.classList.toggle('aktif');
});

// Slide Image home
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");

var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// Submit Form

const form = document.getElementById('submitForm');
const submittedDataDiv = document.getElementById('submittedData');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const message = document.getElementById('message').value;

  
  const formattedDate = new Date(dob).toLocaleDateString();

  
  const currentTime = new Date().toLocaleTimeString();

  
  submittedDataDiv.innerHTML = `
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${formattedDate}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
    <p><strong>Current Time:</strong> ${currentTime}</p>
  `;

  // Reset form setelah submit
  form.reset();
});