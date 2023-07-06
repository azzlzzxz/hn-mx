/*
 * @Author: xinxu
 * @Date: 2023-07-06 09:41:14
 * @LastEditors: xinxu
 * @LastEditTime: 2023-07-06 15:36:19
 * @FilePath: /chatgpt-next/app/utils/stream.ts
 */
/**
 * 将 ReadableStream 转为字符串
 */
export async function stream2string(stream: ReadableStream | undefined | null, onMessage?: (content: string) => void) {
  if (!stream) {
    return '';
  }

  const reader = stream.getReader();
  const decoder = new TextDecoder('utf-8');
  let result = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    let trunk = decoder.decode(value, { stream: true });
    trunk = JSON.parse(trunk).answer;
    onMessage?.(trunk);
    result += trunk;
  }
  reader.releaseLock();

  return result;
}
