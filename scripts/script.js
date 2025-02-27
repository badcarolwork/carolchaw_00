// const animation = (el) => {
//     const about = [
//         "Front End Developer",
//         "Web UI/UX Specialist",
//         "Reactjs user",
//         "Cat person",
//         "Food hunter",
//         "Carol Chaw",
//         "Freelancer",
//     ]

//     let current = 0;


//     setInterval(() => {
//         el.classList.add('bounce-in-top');
//         el.innerHTML = about[current === about.length ? current = 0 : current++];
//         setTimeout(() => {
//             el.classList.remove('bounce-in-top');
//         }, 1300);
//     }, 2000);
// };

const handleNavClick = () => {
    const buttons = document.querySelectorAll(".nav-item");

    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            buttons.forEach(button => button.classList.remove("active"));
            e.currentTarget.classList.add("active");
        })
    });
}

// const el = document.querySelector('.infos .title');
// animation(el);
handleNavClick();

//// Init Type.sj
const selectTyped = document.querySelector('.typed');
if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}