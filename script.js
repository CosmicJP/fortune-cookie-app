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
    "Faith is the highest form of knowledge.",
    "Faith is the highest form of knowledge.",
    "Faith is the highest form of knowledge."
];

const fortuneCookie = document.getElementById('fortuneCookie');
const fortuneMessage = document.getElementById('fortuneMessage');
let isOpen = false;

fortuneCookie.addEventListener('click', () => {
    if (!isOpen) {
        // Add opening animation
        fortuneCookie.classList.add('opening');
        
        // Get random fortune
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        
        // Update message after a short delay
        setTimeout(() => {
            fortuneMessage.innerHTML = `<p>${randomFortune}</p>`;
            isOpen = true;
            
            // Remove animation class after it completes
            setTimeout(() => {
                fortuneCookie.classList.remove('opening');
            }, 500);
        }, 300);
    }
}); 