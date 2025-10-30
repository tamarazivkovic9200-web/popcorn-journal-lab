const popup = document.getElementById('popup');
const addWatchedBtn = document.getElementById('addWatched');
const addToWatchBtn = document.getElementById('addToWatch');
const closePopup = document.getElementById('closePopup');
const toast = document.getElementById('toast');
let selectedMovie = null;

// ===== Popup Open =====
document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    selectedMovie = {
      title: button.dataset.title,
      type: button.dataset.type,
      releaseYear: button.dataset.year,
      image: button.dataset.image,
      genre: button.dataset.genre.split(','),
    };
    popup.classList.remove('hidden');
  });
});

// ===== Popup Close =====
closePopup.addEventListener('click', () => popup.classList.add('hidden'));

// ===== Toast Function =====
function showToast(message, type = 'success') {
  toast.textContent = message;
  toast.style.background = type === 'error'
    ? 'rgba(239, 68, 68, 0.95)'   // red for error
    : 'rgba(250, 204, 21, 0.95)'; // gold for success

  toast.classList.remove('hidden');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, 2000);
}

// ===== Add Movie via Fetch =====
async function addMovie(watched) {
  const res = await fetch('/movies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...selectedMovie, watched }),
  });
  popup.classList.add('hidden');
  if (res.ok) {
    showToast('✅ Added to your watchlist!');
  } else {
    showToast('❌ Error adding movie.', 'error');
  }
}

addWatchedBtn.addEventListener('click', () => addMovie(true));
addToWatchBtn.addEventListener('click', () => addMovie(false));

// ===== Active Tab Highlight =====
const tabs = document.querySelectorAll('.tab-link');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
