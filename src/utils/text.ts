
/**
*  半角文字を全角文字に変換
*/
export const convertToFullwidth = (str: string): string => {
  return str.replace(/[!-~]/g, all => String.fromCharCode(all.charCodeAt(0) + 0xFEE0));
}

/**
*  文字を枠線で囲む
*/
export const textToFrameBorderAa = (text: string): string => {
  const arrText = text.split(/\r\n|\n/);
  const maxMsgLength = arrText.reduce((acc, str) => Math.max(acc, str.length), 0);

  const borderHeader = `┏${"━".repeat(maxMsgLength)}┓`;

  const borderBody = arrText.map(v =>  {
    // 半角文字を全角文字に変換
    const str = convertToFullwidth(v);
    return str.length === maxMsgLength
      ? `┃${str}┃`
      : `┃${str}${"　".repeat(maxMsgLength - str.length)}┃`
  }).join("\n");

  const borderFooter = `┗${"━".repeat(maxMsgLength)}┛`

  const borderAa =`${borderHeader}\n${borderBody}\n${borderFooter}`;
  return borderAa;
}

/**
*  文章を縦書きに変換する
*/
export const textToTategaki = (str: string): string => { 
  const data: string[][] = str.split("\n").map(line => line.split(""));
  const maxLength: number = Math.max(...data.map(arr => arr.length));

  // ['a', 'b', 'c']
  // ['d', 'e', 'f']
  // ↓
  // ['a', 'd']
  // ['b', 'e']
  // ['c', 'f']
  // にして 各行 reverse
  const res: string[][] = Array.from(
    Array(maxLength),
    (_, i) => data.map(line => {
      if (line[i] === " ") {
        return "　";
      }

      const char = line[i] ?? "　";
      // 半角文字を全角文字に変換
      return convertToFullwidth(char);
    }).reverse()
  );

  const resText = res.map(line => line.join("　")).join("\n");
  return resText;
}
