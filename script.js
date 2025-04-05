const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A fresh start will put you on your way.",
    "A golden egg of opportunity falls into your lap this month.",
    "A lifetime of happiness lies ahead of you.",
    "A light heart carries you through all the hard times.",
    "A new perspective will come with the new year.",
    "A pleasant surprise is waiting for you.",
    "Adventure can be real happiness.",
    "All your hard work will soon pay off.",
    "Allow compassion to guide your decisions.",
    "An important person will offer you support.",
    "An inch of time is an inch of gold.",
    "Be careful or you could fall for some tricks today.",
    "Beauty in its various forms appeals to you.",
    "Believe in yourself and others will too.",
    "Change is happening in your life, so go with the flow!",
    "Curiosity kills boredom. Nothing can kill curiosity.",
    "Dedicate yourself with a calm mind to the task at hand.",
    "Depart not from the path which fate has you assigned.",
    "Determination is what you need now.",
    "Disbelief destroys the magic.",
    "Do not be intimidated by the eloquence of others.",
    "Do not make extra work for yourself.",
    "Do not underestimate yourself. Human beings have unlimited potentials.",
    "Don't be discouraged, because every wrong attempt discarded is another step forward.",
    "Don't just think, act!",
    "Don't just spend time. Invest it.",
    "Don't let friends impose on you, work calmly and silently.",
    "Don't let the past and useless detail choke your existence.",
    "Don't let your limitations overshadow your talents.",
    "Don't worry; prosperity will knock on your door soon.",
    "Each day, compel yourself to do something you would rather not do.",
    "Education is the ability to meet life's situations.",
    "Embrace this love relationship you have!",
    "Embrace your dreams of the future.",
    "Emotional intelligence is your strength.",
    "Emphasize your strengths rather than focus on your weaknesses.",
    "Emulate what you respect in your friends.",
    "Every flower blooms in its own sweet time.",
    "Every wise man started as a fool.",
    "Everyday in your life is a special occasion.",
    "Everywhere you choose to go, friendly faces will greet you.",
    "Faith is necessary to success.",
    "Faith is the bridge between dreams and reality.",
    "Faith is the highest form of knowledge."
];

// Sound Effects - Using different online sources for each sound
const sounds = {
    background: new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3'),
    doorOpen: new Audio('https://assets.mixkit.co/active_storage/sfx/2004/2004-preview.mp3'),
    cookieOpen: new Audio('https://assets.mixkit.co/active_storage/sfx/2005/2005-preview.mp3'),
    fortuneReveal: new Audio('https://assets.mixkit.co/active_storage/sfx/2006/2006-preview.mp3'),
    wind: new Audio('https://assets.mixkit.co/active_storage/sfx/2009/2009-preview.mp3')
};

// Test sound element
const testSound = document.getElementById('testSound');
const testSoundButton = document.getElementById('testSoundButton');

// Set background music to loop
sounds.background.loop = true;
sounds.background.volume = 0.3;

// Set wind sound to loop with maximum volume
sounds.wind.loop = true;
sounds.wind.volume = 1.0;

// Sound control
let isMuted = false;
const muteButton = document.getElementById('muteButton');
const muteIcon = muteButton.querySelector('i');

// Check if sound is working and start wind sound
function checkSound() {
    console.log("Testing sound...");
    testSound.play().then(() => {
        console.log("Sound played successfully");
        // Start wind sound after test sound
        console.log("Attempting to play wind sound...");
        sounds.wind.play()
            .then(() => {
                console.log("Wind sound started successfully");
            })
            .catch(error => {
                console.error("Error playing wind sound:", error);
                // Try playing wind sound again after a short delay
                setTimeout(() => {
                    console.log("Retrying wind sound...");
                    sounds.wind.play().catch(e => console.error("Second attempt failed:", e));
                }, 1000);
            });
    }).catch(error => {
        console.error("Error playing test sound:", error);
    });
}

// Call checkSound when page loads
window.addEventListener('load', () => {
    console.log("Page loaded, initializing sounds...");
    checkSound();
});

// Mute button click handler
muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    
    if (isMuted) {
        // Mute all sounds
        Object.values(sounds).forEach(sound => {
            sound.muted = true;
        });
        muteIcon.className = 'fas fa-volume-mute';
        muteButton.classList.add('muted');
    } else {
        // Unmute all sounds
        Object.values(sounds).forEach(sound => {
            sound.muted = false;
        });
        muteIcon.className = 'fas fa-volume-up';
        muteButton.classList.remove('muted');
    }
});

// Test sound button click handler
testSoundButton.addEventListener('click', () => {
    console.log("Test sound button clicked");
    testSound.currentTime = 0; // Reset the audio to the beginning
    testSound.play().then(() => {
        console.log("Test sound played successfully");
    }).catch(error => {
        console.error("Error playing test sound:", error);
    });
});

// Entry Animation Elements
const entryAnimation = document.getElementById('entryAnimation');
const startButton = document.getElementById('startButton');
const mainContainer = document.getElementById('mainContainer');
const castleDoor = document.querySelector('.castle .door');
const castleInterior = document.querySelector('.castle .interior');
const doorLight = document.querySelector('.castle .door-light');
const mountainScene = document.querySelector('.mountain-scene');

// Main App Elements
const fortuneCookieMain = document.getElementById('fortuneCookieMain');
const fortuneMessage = document.getElementById('fortuneMessage');
const lightEffect = document.getElementById('lightEffect');
let isOpen = false;

// Start Button Click Handler
startButton.addEventListener('click', () => {
    // Stop wind sound
    sounds.wind.pause();
    sounds.wind.currentTime = 0;
    
    // Play background music
    sounds.background.play();
    
    // Start the zoom animation
    entryAnimation.classList.add('zooming');
    
    // Open the door after a short delay
    setTimeout(() => {
        castleDoor.classList.add('opening');
        castleInterior.classList.add('visible');
        doorLight.classList.add('active');
        
        // Play door opening sound
        sounds.doorOpen.play();
        
        // Add a slight tilt to the mountain scene for more depth
        mountainScene.style.transform = 'rotateX(10deg)';
    }, 1000);
    
    // After animation completes, show the main app
    setTimeout(() => {
        entryAnimation.classList.add('hidden');
        mainContainer.classList.add('visible');
        // Initialize fortune cookie click handler after transition
        initializeFortuneCookie();
    }, 3000); // 3 seconds for the animation
});

// Initialize Fortune Cookie
function initializeFortuneCookie() {
    fortuneCookieMain.addEventListener('click', handleFortuneCookieClick);
}

// Fortune Cookie Click Handler
function handleFortuneCookieClick() {
    if (!isOpen) {
        // Add opening animation
        fortuneCookieMain.classList.add('opening');
        
        // Play cookie opening sound
        sounds.cookieOpen.play();
        
        // Stop background music when cookie opens
        sounds.background.pause();
        
        // Activate light effect
        lightEffect.classList.add('active');
        
        // Get random fortune
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        
        // Update message after animation
        setTimeout(() => {
            fortuneMessage.innerHTML = `<p>${randomFortune}</p>`;
            fortuneMessage.classList.add('visible');
            isOpen = true;
            
            // Play fortune reveal sound
            sounds.fortuneReveal.play();
            
            // Fade out light effect after a delay
            setTimeout(() => {
                lightEffect.classList.remove('active');
                
                // Close the cookie after showing the fortune for a longer time
                setTimeout(() => {
                    fortuneCookieMain.classList.remove('opening');
                    fortuneMessage.classList.remove('visible');
                    isOpen = false;
                    
                    // Stop all sounds when fortune paper disappears
                    Object.values(sounds).forEach(sound => {
                        sound.pause();
                        sound.currentTime = 0;
                    });
                }, 5000); // Increased from 1000 to 5000 milliseconds (5 seconds)
            }, 1000);
        }, 800);
    }
} 