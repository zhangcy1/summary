class Utils {
  // 定时器节流
  throttle(fn, wait) {
    let timeout = null
    return () => {
      let args = arguments
      if (!timeout) {
        timeout = setTimeout(() => {
          fn(args)
          timeout = null
        }, wait)
      }
    }
  }
}