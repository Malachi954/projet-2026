// const button = document.getElementById("loveBtn");
const yesButton = document.querySelector('.yes-button');



yesButton.addEventListener("click", (e) => {
  createHeartSplash(e);
},{ once: true });
//  { once: true });

function createHeartSplash(event) {

  const heartCount = 1000;

  for (let i = 0; i < heartCount; i++) {

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    document.body.appendChild(heart);

    // Position de départ (centre du bouton)
    const rect = yesButton.getBoundingClientRect();
    const startX = rect.left + rect.width;
    const startY = rect.top + rect.height;
    

    gsap.set(heart, {
      x: startX,
      y: startY,
      scale: 0
    });

    // Explosion aléatoire
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 2000 + 100;
        // const distance = Math.random() * 1200 + 600;
       

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    gsap.to(heart, {
      duration: 0.6,
      x: startX + x,
      y: startY + y,
      scale: 1,
      ease: "back.out(2)"
    });

    // Pluie (retombée)
    gsap.to(heart, {
      duration: 1.5,
      y: startY + y + 300,
      rotation: Math.random() * 360,
      opacity: 0,
      ease: "power1.in",
      delay: 0.6,
      onComplete: () => {
        heart.remove();
      }
    });
  }
}
