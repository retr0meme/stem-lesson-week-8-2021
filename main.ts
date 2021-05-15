let male_visitor = 0
let female_visitor = 0
input.onButtonPressed(Button.A, function () {
    male_visitor += 1
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showNumber(male_visitor)
})
input.onButtonPressed(Button.B, function () {
    female_visitor += 1
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showNumber(female_visitor)
})
basic.forever(function () {
    if ((male_visitor && female_visitor) > 19) {
        music.playMelody("- - G - G - - - ", 120)
    }
})
basic.forever(function () {
    if (male_visitor > 9) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    if (female_visitor > 9) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
})
