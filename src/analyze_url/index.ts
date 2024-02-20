// 解析 url 链接参数
export function analyzeUrl1(url: string): Record<string, string> {
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

// 正则匹配参数
export function analyzeUrl2(url: string): Record<string, string> {
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

// URLSearchParams
export function analyzeUrl3(url: string): Record<string, string> {
  // 正则匹配 ? 和 # 之间的内容
  const reg = /(?<=\?)(.*?)(?=#|$)/;
  const search = url.match(reg)?.[0] || "";
  const params = new URLSearchParams(search)
  return Object.fromEntries(params.entries())
}

// URL
export function analyzeUrl(url: string): Record<string, string> {
  // 正则匹配 ? 和 # 之间的内容
  const reg = /(?<=\?)(.*?)(?=#|$)/;
  const search = url.match(reg)?.[0] || "";
  const _url = new URL(url);
  const params = _url.searchParams;
  return Object.fromEntries(params.entries())
}

