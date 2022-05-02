input.onButtonPressed(Button.A, function () {
    playSong(songs[randint(0, songs.length - 1)])
})
function playNote (note: number) {
    if (note < 2) {
        delta = note * 2
    } else if (note < 5) {
        delta = note * 2 - 1
    } else if (note < 9) {
        delta = note * 2 - 2
    } else {
        delta = note * 2 - 3
    }
    delta = delta + half
    music.playTone(A * k ** delta, music.beat(BeatFraction.Whole))
    half = 0
}
function playSong (song: string) {
    initNotes(randint(131, 392))
    for (let index = 0; index <= song.length - 1; index++) {
        note = song.charAt(index)
        if (note == " ") {
            music.rest(music.beat(BeatFraction.Whole))
        } else if (note == "#") {
            half += 1
        } else if (note == "b") {
            half += -1
        } else {
            playNote(parseFloat(note))
        }
    }
}
function initNotes (n: number) {
    music.setTempo(320)
    // k = 2 ** (1 / 12)
    k = 1.059463
    A = n
    half = 0
}
input.onButtonPressed(Button.B, function () {
    playSong("abc")
})
let note = ""
let k = 0
let A = 0
let half = 0
let delta = 0
let songs: string[] = []
songs = [
"2266776 5544332 ",
"44443 221 0 ",
"5544333455443 3 2211000122110 0  ",
"5 67 654  56 2 ",
"02423 214 3 0 ",
"6 4 2 5 432 6 4 2 7 656 ",
"224 2 3 #0   2222#0 2  ",
"5252544 4242455 ",
"4 7 6 7655434 0 ",
"543 543 3457654 ",
"4 4 5 6 6 5 4 3 2 2 3 4 4  33 ",
"2#23#34#33#22",
"444 444 46234   555 544 43343 6 ",
"2466  656b76   9b433  3b456b4 ",
"223 2 5 4  223 2 6 5  229 7 5 4 3 #7#77 5 6 5"
]
