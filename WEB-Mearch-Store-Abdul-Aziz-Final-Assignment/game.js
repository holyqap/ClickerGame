let points = 0;

document.querySelector(".click img").addEventListener("click", e => {
	document.querySelector("#counter").textContent = ++points;
}, {passive: true})

