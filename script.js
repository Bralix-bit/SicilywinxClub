document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('stars-container');
    const totalStars = 25;
    const starSymbols = ['★', '✧', '✦', '⋆'];

    for (let i = 0; i < totalStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star-sparkle');
        star.textContent = starSymbols[Math.floor(Math.random() * starSymbols.length)];
        
        // Random position & animation duration
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${4 + Math.random() * 4}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.fontSize = `${10 + Math.random() * 12}px`;
        
        // Random color tint for stars
        const colors = ['#f472b6', '#38bdf8', '#fde047', '#34d399', '#c084fc', '#ffffff'];
        star.style.color = colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(star);
    }
    console.log("✨ Winx Starry Project ready! ✨");
});