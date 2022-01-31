const d = document,
w = window;

export default function smartVideo() {
  const $video = d.querySelectorAll("video[data-smart-video]")


  const cb = (entries) => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.play();
        }else{
            entry.target.pause();
        }

        w.addEventListener("visibilitychange", e => d.visibilityState === "visible" 
        ? entry.target.play() 
        : entry.target.pause());
    })
  }
  const observe = new IntersectionObserver(cb, {threshold: 0.5})

  $video.forEach(el => observe.observe(el))
}