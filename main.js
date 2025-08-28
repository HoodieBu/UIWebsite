  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Filtering logic
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.category;
    cards.forEach(card => {
      card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
    });
  });
});

// Modal logic
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.getElementById('modal-close');

cards.forEach(card => {
  card.querySelector('.view-btn').addEventListener('click', () => {
    const img = card.querySelector('img');
    modalImg.src = img.src;
    modalCaption.textContent = card.querySelector('.overlay h3').textContent;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});


// ===== Prices Modal =====
const priceModal = document.getElementById("price-modal");
const priceModalClose = document.getElementById("price-modal-close");
const choosePlanBtns = document.querySelectorAll(".price-btn");

choosePlanBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    priceModal.style.display = "flex";
    // trigger animation
    requestAnimationFrame(() => {
      priceModal.classList.add("show");
    });
  });
});

function closePriceModal() {
  priceModal.classList.remove("show");
  setTimeout(() => {
    priceModal.style.display = "none";
  }, 300); // matches CSS transition time
}

priceModalClose.addEventListener("click", closePriceModal);

priceModal.addEventListener("click", (e) => {
  if (e.target === priceModal) closePriceModal();
});

