function wordSplitter() {
  var letters = document.querySelector("#para1");
  //   console.log(letters.textContent);
  var arr = letters.textContent.trim().split("");
  var clutter = "";
  arr.forEach((elem) => {
    var x = `<span class="splittedText">${elem}</span>`;
    clutter = clutter + x;
  });
  letters.innerHTML = clutter;
}

wordSplitter();

var tl = gsap.timeline();
var tl2 = gsap.timeline();

tl.from(".line1", {
  height: "0vmax",
  opacity: 0,
  duration: 2,
  delay: 0.5,
});

tl.from(".side a", {
  opacity: 0,
  stagger: 0.2,
});

tl2.from(".left-navpart", {
  opacity: 0,
  delay: 2.5,
  duration: 1,
});

tl.from(".right-navpart .nav-links", {
  opacity: 0,
  stagger: 0.2,
});
tl2.from("#heading1", {
  delay: 1,
  x: 100,
  opacity: 0,
  duration: 0.5,
});

tl2.from(".splittedText", {
  duration: 0.3,
  stagger: 0.02,
  opacity: 0,
});
tl2.from("#btn", {
  duration: 0.3,
  opacity: 0,
});

tl.from(".image", {
  opacity: 0,
  scale: 0,
  duration: 1,
});
tl2.from(".skills", {
  duration: 0.3,
  opacity: 0,
});
