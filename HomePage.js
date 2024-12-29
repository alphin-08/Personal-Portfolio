const githubLogo = document.querySelector(".github-logo");
const linkedinLogo = document.querySelector(".linkedin-logo");

document.addEventListener("mousemove", (e) => {
    moveElement(e, githubLogo, 30);
    moveElement(e, linkedinLogo, 45);
});

function moveElement(event, element, intensity) {
    const x = event.clientX;
    const y = event.clientY;

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX) / middleX) * intensity;
    const offsetY = ((y - middleY) / middleY) * intensity;

    element.style.transform = `translate(${offsetX}px, ${-offsetY}px)`;
}
