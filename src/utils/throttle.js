export function throttle(fn, delay = 1000) {
    let timer = null
    let lastTime = 0

    return function (...args) {
        const now = Date.now()

        if (now - lastTime >= delay) {
            fn.apply(this, args)
            lastTime = now
        } else if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                lastTime = Date.now()
                timer = null
            }, delay)
        }
    }
} 