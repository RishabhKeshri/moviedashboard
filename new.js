const videoData = {
    "Tamil": [
        { title: "Tamil Movie 1", img: "thumbnail1.jpg" },
        { title: "Tamil Movie 2", img: "thumbnail2.jpg" },
        { title: "Tamil Movie 3", img: "thumbnail3.jpg" },
        { title: "Tamil Movie 4", img: "thumbnail4.jpg" },
        { title: "Tamil Movie 5", img: "thumbnail5.jpg" }
    ],
    "Hindi": [
        { title: "Hindi Movie 1", img: "thumbnail1.jpg" },
        { title: "Hindi Movie 2", img: "thumbnail2.jpg" },
        { title: "Hindi Movie 3", img: "thumbnail3.jpg" },
        { title: "Hindi Movie 4", img: "thumbnail4.jpg" },
        { title: "Hindi Movie 5", img: "thumbnail5.jpg" }
    ],
    // Additional languages...
};

// Dynamic video loading for movies
const movieGrid = document.getElementById('movies-grid');
loadVideos('Tamil', movieGrid);

const languageOptions = document.querySelectorAll('.language-options span');
languageOptions.forEach(langOption => {
    langOption.addEventListener('click', (e) => {
        const language = e.target.dataset.lang;
        loadVideos(language, movieGrid);
    });
});

function loadVideos(language, gridElement) {
    gridElement.innerHTML = ''; // Clear previous videos
    videoData[language].forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');
        videoCard.innerHTML = `
            <img class="video-thumbnail" src="${video.img}" alt="${video.title}">
            <div class="video-card-content">
                <h3>${video.title}</h3>
                <div class="video-card-buttons">
                    <button onclick="handlePlayNow('${video.title}')">Play Now</button>
                    <button onclick="handleShortlist('${video.title}')">Shortlist</button>
                    <button onclick="handleWatchLater('${video.title}')">Watch Later</button>
                </div>
            </div>
        `;
        gridElement.appendChild(videoCard);
    });
}

// Modal logic for Play Now
const modal = document.getElementById('video-modal');
const modalTitle = document.getElementById('modal-title');
const closeModalBtn = document.querySelector('.close-btn');

function handlePlayNow(title) {
    modalTitle.textContent = title;
    modal.style.display = 'flex';
}

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Sample handlers for other actions
function handleShortlist(title) {
    alert(`"${title}" added to shortlist.`);
}

function handleWatchLater(title) {
    alert(`"${title}" added to Watch Later.`);
}
