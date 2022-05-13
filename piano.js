// Create lists for keys to map them to keyboard
const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', "i" ,"o", "p", "a", "s", "d", "f"]
const BLACK_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

// add event listener to check when a key is played 
keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]) // sets it so that the right white key is played
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]) // sets is so that the right black key is played
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note) // gets the correct note 
  noteAudio.currentTime = 0
  noteAudio.play()  // plays the note
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')   // removes active status from the key
  })
} 
