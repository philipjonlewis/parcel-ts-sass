const sample = "hwello";
const again = "kinemerlyn";

alert(sample);
console.log(again);

const firstContainer = document.querySelector(".third-container");

const options = {
  root: null,
  threshold: 0.2,
  //   rootMargin: "10%",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("slide-up");
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(firstContainer);

console.log("hilor");
