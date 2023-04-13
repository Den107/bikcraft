export default function spoiler() {
  const spoilers = document.querySelectorAll('.spoiler')

  console.log(spoilers);

  spoilers.forEach((spoiler) => {
    spoiler.addEventListener('click', () => {
      if (spoiler.classList.contains('close')) {
        spoiler.classList.remove('close')
      } else {
        spoiler.classList.add('close')
      }
    })
  })
}