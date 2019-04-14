const animator = require('./Animator')
class HorizTextMover {

    constructor(text, by) {
        this.text = text
        this.by = by
        this.total = 0
    }

    animateText() {
        console.clear()
        var newText = ""
        for (var i = 0; i < this.total; i++) {
            newText += " "
        }
        console.log(`${newText}${this.text}`)
        this.total++
    }

    stop() {
        return this.total >= this.by
    }

    start() {
        animator.start(() => {
            this.animateText()
        }, () => {
            return this.stop()
        })
    }

    static create(text, by) {
        const htm = new HorizTextMover(text, by)
        htm.start()
    }
}
module.exports = HorizTextMover.create
