const d = document;

export default function scroolSpy(){
const $section = d.querySelectorAll("section[data-scrolll-spy]")


const cb = (entries) => {
    //console.log("entries",entries);

    entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        //console.log(id);
        //console.log("entry",entry);
        if (entry.isIntersecting){
           d.querySelector(`a[data-scrolll-spy][href="#${id}"]`).classList.add("active")
        }else{
            d.querySelector(`a[data-scrolll-spy][href="#${id}"]`).classList.remove("active")
        }
    })
}


    const observer = new IntersectionObserver(cb, {
        //root
        //rootMargin: "-240px"
        threshold: [0.5, 0.75]
    });

    $section.forEach((el) => observer.observe(el));
}