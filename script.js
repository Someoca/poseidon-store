document.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector(".poseidon-scene");
  const orbs = document.querySelectorAll(".orb");

  if (!scene) return;

  document.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 14;
    const y = (event.clientY / window.innerHeight - 0.5) * 14;

    scene.style.transform = `perspective(1200px) rotateX(${8 - y}deg) rotateY(${x - 10}deg)`;

    orbs.forEach((orb, index) => {
      const offset = index * 10;
      orb.style.transform = `translate(${x * (index + 1)}px, ${y * (index + 1)}px)`;
      orb.style.filter = `blur(${30 + offset}px)`;
    });
  });
});
