/**
 * URL处理封装
 * @param config
 */

const TDUrl = {
  parseURL(url) { // 把url的所有信息转化成json对象
    try {
      let a = document.createElement('a')
      a.href = url || window.location.href
      return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
          let ret = {}
          let seg = a.search.replace(/^\?/, '').split('&')
          let len = seg.length
          let i = 0
          let s
          for (; i < len; i++) {
            if (!seg[i]) {
              continue
            }
            s = seg[i].split('=')
            ret[s[0]] = s[1]
          }
          return ret
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || ['', ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || ['', ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
      }
    } catch (e) {
      this.printErrorLog(e)
      return {}
    }
  },
  parseURLParam(url) { // 把url的参数部分转化成json对象
    try {
      let a = document.createElement('a')
      a.href = url || window.location.href
      let ret = {}
      let seg = a.search.replace(/^\?/, '').split('&')
      let len = seg.length
      let i = 0
      let s
      for (; i < len; i++) {
        if (!seg[i]) {
          continue
        }
        s = seg[i].split('=')
        ret[s[0]] = s[1]
      }
      return ret
    } catch (e) {
      this.printErrorLog(e)
      return {}
    }
  },
  getURLParam(name, url) { // 通过key获取url中的参数值
    try {
      let a = document.createElement('a')
      a.href = url || window.location.href
      let reg = new RegExp('[?&]' + name + '=([^&]+)')
      return a.search.match(reg) ? RegExp.$1 : null
    } catch (e) {
      this.printErrorLog(e)
      return ''
    }
  },
  printErrorLog(e) { // 打印参数日志
    console.log('error name:', e.name)
    console.log('error message:', e.message)
    console.log('error description:', e.description)
  }
}

export default TDUrl
