// Arrays storing your content catalogs
const memes = [
    "Blood.webp",
    "Clean.jpg",
    "Close One.jpg",
    "Mistake.jpg",
    "WOW.jpeg",
    "DARK.webp",
    "LEGO.jpeg",
    "Sub.jpeg",
    "The Sign.jpeg",
    "Felone.jpeg",
    "Billie.jpg",
    "Cat.jpg",
    "Speed.jpeg",
    "BIG.jpeg",
    "Arson.gif",
    "Hmm.jpeg",
    "Ladder.jpg",
    "Star.jpg",
    "Eco.jpeg",
    "You know.jpg",
    "Yep.jpg",
    "Nope.jpg",
    "I remember.webp",
    "MSMG.webp",
    "Police.gif",
    "So true.gif",
    "A+.gif",
    "Poor.jpg",
    "Zap.jpg",
    "Bad.jpg",
    "Dryer.jpg",
];

// Set to keep track of shown meme indices
const shownMemes = new Set();

const stories = [
    "At the funeral, the preacher said, “He left a mark on everyone he met,” and Greg muttered, “Mostly with his car.” Larry was known for pranking people with his customized hearse. As the service ended, the hearse pulled up, blasting “Highway to Hell,” revealing a mannequin dressed as Larry holding a sign: *“Still late to the party!”* Even in death, Larry got one last laugh.",
];

const youtubeLinks = [
    "https://youtu.be/pdy8q1cGm9M?si=1GTVqS3XBjlVbPFr",
    "https://youtu.be/Vy8moBcKVIM?si=i32dD4ez5dRQMkqi",
    "https://youtu.be/MYpnINrZM_M?si=m6HaiL8wVlVi3Sbg",
    "https://youtu.be/foMC7zgmJ0M?si=h2O9P_f2sZC2ktbO",
    "https://youtu.be/sz87qHr7FE4?si=TBId9XKvyuzJXJU_",
    "https://www.youtube.com/@TRB4008/playlists",
    "https://youtu.be/Kl6Z-WquvZs?si=geflh-jFeb8KmuJD",
    "https://youtu.be/YtuB-7-DMAo?si=6PAF1PBiUE_yPjbP",
    "https://youtu.be/3OAjhbbokmE?si=-n9jYuKy3wYFNiba",
    "https://youtu.be/TiB8swIXYZM?si=vYGrhCQxDPJLqo8b",
    "https://youtu.be/oqmER7914mI?si=ogHS5553asVjwg-E",
    "https://youtu.be/fw1u9-9IhbI?si=CYgdV-daPuZaHRts",
    "https://youtu.be/b7CUtQuIqCg?si=MgN7pUCZiiyFLP0f",
    "https://youtu.be/RtakGzn6DQg?si=pCUNU2kW8o0vKjhn",
    "https://youtu.be/x-VGSvJhlHQ?si=KNEwCR049rY33tV2",
    "https://youtu.be/t3XoCCB4ymc?si=24kiNZ4Vl1t-6a3j",
    "https://youtu.be/3C_cGAM1rrY?si=2FWYtTDXsUrbPJcB",
    "https://youtu.be/iLMUYQ-uSC4?si=E9DaVZNUA5IG7eVk",
    "https://youtu.be/keSyv_OKlE8?si=7XFE6dhB16s91zZN",
    "https://youtu.be/ACiw2gIg1oo?si=mm6S3S__vMyu6TFw",
    "https://youtu.be/nTJzo041V3g?si=dixcCUMZ9rBY66B2",
    "https://youtu.be/3mwkXokgBas?si=lB7sWIT2qXArOYa4",
    "https://youtu.be/nt1dc8d67d8?si=NLAtm_anIuDip_Qj",
    "https://youtu.be/82PzWXBZH1o?si=rUx069jnhvEouD8N",
    "https://youtu.be/P2Lpdop2B50?si=CCrTJHmEba_tjK_P",
    "https://youtu.be/qGjGOd3-duU?si=A2FKf54-bKokx51T",
    "https://youtube.com/playlist?list=PLGIU1uT8DvzM2OyQwnWm3oCug73nh9OB6&si=C0n2HwPCO6dM07S7",
    "https://youtube.com/playlist?list=PLGIU1uT8DvzM4oFu2g1aiZcgvc8cSG_A0&si=bfR9ThPRzy-OgZ0U",
    "https://youtu.be/XIbKhj33hE0?si=IzUZ3wwhS4ZCI_oE",
    "https://youtu.be/hMpc5XJpC8g?si=3sAHkMMVvme-8ru2",
    "https://youtu.be/0UyMEATJmiY?si=oEktLNqbNjJDUZsP",
    "https://youtu.be/HI0PBDpf2qc?si=isrzmCWUFsaaJyYJ",
    "https://youtu.be/TiJtOKEwjDc?si=EkCbBkPJF8oCKW17",
    "https://youtu.be/9tA70xMchmI?si=UUas7Fbw01nFaaa0",
    "https://youtu.be/v3FuhqnSmD4?si=oFt4VvL-6kFg3z0W",
    "https://youtu.be/UuT2FmxnpOQ?si=_VnWa6xAsQuNYKq_",
    "https://youtu.be/rUq1D9GSYzQ?si=Ue8IML5QgoKT3xTW",
    "https://youtu.be/SzzIEHi_5Qk?si=l032MdMvR6BAklmI",
    "https://youtu.be/dkh0SsmPVFo?si=ZjNbNLwR5N9of7_j",
    "https://youtu.be/xGDXQSm4VI0?si=i4desxOfWrodDH9d",
    "https://youtu.be/r7AzOyFywfI?si=HluKrwfkBP2mz07b",
    "https://youtu.be/pNEgPwOpQjQ?si=JqWSWSlV4P1pOsvq",
    "https://youtu.be/Zf-EsVoK6A8?si=Sgb-j4UHFHUbGRWS",
    "https://youtu.be/5PzWFJCMPGI?si=KriZerwSyho0yBAh",
    "https://youtube.com/@rileyreidx3?si=efeSzDPLu_MQVLXh",
    "https://youtu.be/t0ofhhiVB14?si=U8w3OF1OONL6oe9O",
    "https://youtu.be/FqkVictBzH4?si=zemvLR7Q_sr_-dQU",
    "https://youtu.be/uv3ghuwSSf0?si=YsswXhmQz5iH_qu8",
    "https://youtu.be/3SdgI4fJx9M?si=kPnDNS_WMVb8wSGF",
    "https://youtu.be/0zDgRkF6MlQ?si=E4nTme20S6B_Jufl",
    "https://youtu.be/Na_MCF3MSDc?si=N7vGf4Rf4BjCzKg2",
    "https://youtu.be/Bh3iLOUG7DI?si=c_ZiE7DVne1R1qqx",
    "https://youtu.be/bJpisLytQGo?si=GOpy50h3NoTMsqiH",
    "https://youtu.be/1KWMUh6dRZw?si=F0Bs1DYnGyFoCEvo",
    "https://youtu.be/mRU7HXmTcRw?si=RjnD85RCMNu-XKXV",
    "https://youtu.be/LtTQCpORfJ0?si=wFzbhzSBKyTNTab4",
    "https://youtu.be/YUY9Y9RFiHY?si=GyrVAtKt17nE9odI",
    "https://youtu.be/TLnUJzueBOQ?si=sXB1lcIG9KbTSrZt",
    "https://youtu.be/Z6dqIYKIBSU?si=q4IQvWlKUO5zWK-b",
    "https://youtu.be/Ttzijna8mgQ?si=-dxvHjiMFPNLwsTf",
    "https://youtu.be/jj1m1x_2IDQ?si=StLeV-wA47Fsi3MM"
];

// Function to generate a random meme
function generateMeme() {
    // Check if all memes have been shown
    if (shownMemes.size === memes.length) {
        alert("All memes have been shown!");
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * memes.length);
    } while (shownMemes.has(randomIndex)); // Loop until an unseen meme is selected

    // Add the index to the set of shown memes
    shownMemes.add(randomIndex);

    const randomMeme = memes[randomIndex];
    const memeContainer = document.createElement('div');
    const memeElement = document.createElement('img');

    memeElement.src = randomMeme;
    memeElement.alt = 'Generated Meme';
    memeElement.style.maxWidth = '300px';
    memeElement.style.maxHeight = '300px';

    memeContainer.appendChild(memeElement);
    memeContainer.style.position = 'absolute';
    memeContainer.style.zIndex = '1000';
    memeContainer.style.top = Math.random() * (window.innerHeight - 300) + 'px';
    memeContainer.style.left = Math.random() * (window.innerWidth - 300) + 'px';
    memeContainer.style.backgroundColor = 'white';
    memeContainer.style.padding = '10px';
    memeContainer.style.borderRadius = '10px';
    memeContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    document.body.appendChild(memeContainer);
}

// Attach the event listener to the "Generate Meme" button
document.querySelector('.circle-button').addEventListener('click', generateMeme);

// Function to generate a random story
function generateStory() {
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    const storyContainer = document.createElement('div');

    storyContainer.textContent = randomStory;
    storyContainer.style.position = 'absolute';
    storyContainer.style.zIndex = '1000';
    storyContainer.style.top = '50%';
    storyContainer.style.left = '50%';
    storyContainer.style.transform = 'translate(-50%, -50%)';
    storyContainer.style.backgroundColor = 'white';
    storyContainer.style.padding = '10px';
    storyContainer.style.borderRadius = '10px';
    storyContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    storyContainer.style.fontSize = '18px';
    storyContainer.style.textAlign = 'center';

    document.body.appendChild(storyContainer);
}

// Ensure the event listener is added after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-youtube-video').addEventListener('click', generateYouTubeVideo);
});

function generateYouTubeVideo() {
    const randomLink = youtubeLinks[Math.floor(Math.random() * youtubeLinks.length)];
    const linkContainer = document.createElement('div');
    const linkElement = document.createElement('a');

    linkElement.href = randomLink;
    linkElement.textContent = 'Click to lose brain cells!';
    linkElement.target = '_blank';
    linkElement.style.color = 'blue';
    linkElement.style.textDecoration = 'underline';
    linkElement.style.fontSize = '18px';

    linkContainer.appendChild(linkElement);
    linkContainer.style.position = 'absolute';
    linkContainer.style.zIndex = '1000';

    // Set random position, but exclude top area where buttons are located
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;
    const padding = 100; // To prevent positioning too close to the top (e.g., where buttons are)

    const randomX = Math.floor(Math.random() * (maxWidth - 200)); // Adjusts to leave some space at the edges
    const randomY = Math.floor(Math.random() * (maxHeight - padding)) + padding; // Keeps it below the buttons

    linkContainer.style.left = `${randomX}px`;
    linkContainer.style.top = `${randomY}px`;
    linkContainer.style.backgroundColor = 'white';
    linkContainer.style.padding = '10px';
    linkContainer.style.borderRadius = '10px';
    linkContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    document.body.appendChild(linkContainer);
}

// Drag-and-save functionality for memes
function enableDragAndSave() {
    const illuminatiContainer = document.querySelector('.illuminati-container');

    illuminatiContainer.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    illuminatiContainer.addEventListener('drop', (event) => {
        event.preventDefault();
        const draggedImage = document.querySelector('img[src]');
        if (draggedImage) {
            const link = document.createElement('a');
            link.href = draggedImage.src;
            link.download = 'meme';
            link.click();
        }
    });
}

// Get the audio element and the play button
const music = document.getElementById('background-music');
const playMusicButton = document.getElementById('play-music');

// Event listener for toggling play/pause
playMusicButton.addEventListener('click', () => {
    if (music.paused) {
        music.play(); // Play the music
        playMusicButton.textContent = "Pause Music"; // Change button text
    } else {
        music.pause(); // Pause the music
        playMusicButton.textContent = "Play Music"; // Change button text back
    }
});

// Initialize drag-and-save functionality on page load
document.addEventListener('DOMContentLoaded', enableDragAndSave);