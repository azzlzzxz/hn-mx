/*
 * @Author: xinxu
 * @Date: 2023-07-06 09:41:14
 * @LastEditors: xinxu
 * @LastEditTime: 2023-07-06 11:53:30
 * @FilePath: /chatgpt-next/app/utils/env.ts
 */
export const env = {
  NODE_ENV: process.env.NODE_ENV,

  /** apiKey 別名 */
  OPENAI_API_KEY_ALIAS: '',

  /** 禁止陌生人通过他自己的 apiKey 访问 */
  CHATGPT_NEXT_DISABLE_PUBLIC: process.env.CHATGPT_NEXT_DISABLE_PUBLIC ?? 'false',

  /** 配置 API 请求的 host（包含端口） */
  CHATGPT_NEXT_API_HOST: 'http://127.0.0.1:8000',
};
