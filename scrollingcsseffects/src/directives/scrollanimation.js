const animatedScrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('enter')
      }else {
        entry.target.classList.remove('enter')
      }
    })
  })

export default {
  bind (el) {
    el.classList.remove('enter')
    el.classList.add('before-enter')
    animatedScrollObserver.observe(el)
  }
}