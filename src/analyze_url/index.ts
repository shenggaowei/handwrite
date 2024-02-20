// 解析 url 链接参数
export function _analyzeUrl(url: string): Record<string, string> {
  const start = url.indexOf('?') + 1;
  const end = url.indexOf('#') > -1 ? url.indexOf('#') : url.length;
  const search = url.slice(start, end);
  const ret = search.split("&").reduce((info: any, items: string) => {
    const [key, value] = items.split("=");
    info[key] = value;
    return info
  }, {})
  return ret
}

export function analyzeUrl(url: string): Record<string, string> {
  // 正则匹配 ? 和 # 之间的内容
  const reg = /(?<=\?)(.*?)(?=#|$)/;
  const search = url.match(reg)?.[0] || "";
  const ret = search.split("&").reduce((info: any, items: string) => {
    const [key, value] = items.split("=");
    info[key] = value;
    return info
  }, {})
  return ret
}

const testUrl = "https://hblg.hq-gsc.com/sda/?name=shenggao&age=18#/staging";

console.log(analyzeUrl(testUrl))