/**
 * 匹配 p 标签内容
 */

export const getMatchStr = (str: string): string[] => {
  const reg = /<\s*p[^>]*>(.*?)<\/p\s*>/g;
  const result: string[] = [];
  while (true) {
    const match = reg.exec(str);
    if (match) {
      const matchStr = match[1];
      result.push(matchStr);
    } else {
      break;
    }
  }
  return result;
}

/**
 * 匹配 img src 属性
 */
export const getImgSrc = (str: string): string[] => {
  const reg = /<\s*img[^>]+src=["']([^"']+)["'][^>]*>/g;
  const result: string[] = [];
  while (true) {
    const match = reg.exec(str);
    if (match) {
      result.push(match[1]);
    } else {
      break;
    }
  }
  return result;
}