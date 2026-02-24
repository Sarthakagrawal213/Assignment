const boxes = [
    { element: document.getElementById("box1"), start: 0.0, end: 0.25 },
    { element: document.getElementById("box2"), start: 0.25, end: 0.50 },
    { element: document.getElementById("box3"), start: 0.50, end: 0.75 },
    { element: document.getElementById("box4"), start: 0.75, end: 1.0 }
];

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / maxScroll;

    boxes.forEach(box => {

        if (scrollPercent <= box.start) {
            box.element.style.opacity = 0;
        } 
        else if (scrollPercent >= box.end) {
            box.element.style.opacity = 1;
        } 
        else {
            const progress = 
                (scrollPercent - box.start) / (box.end - box.start);
            box.element.style.opacity = progress;
        }

    });

});
const cover = document.getElementById("cover");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / maxScroll;

    
    cover.style.transform = `translateX(${scrollPercent * 100}%)`;

});