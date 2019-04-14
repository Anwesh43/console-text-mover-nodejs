const delay = 100
class Animator {

    start(cb, endcb) {
        if (!this.started) {
            this.started = true
            this.interval = setInterval(() => {
                cb()
                if (typeof(endcb) == "function" && endcb()) {
                    this.stop()
                }
            }, delay)
        }
    }

    stop() {
        if (this.started) {
            this.started = false
            clearInterval(this.interval)
        }
    }
}

module.exports = new Animator()
