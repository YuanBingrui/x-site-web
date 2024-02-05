import openBrowser from '@xbaijun/open-browser';
import pico from 'picocolors';

const PORT = process.env.PORT;

// 自动打开浏览器
const openB = new openBrowser({
  ip: true,
  port: PORT,
});

/**
 * 由于crm业务组暂无直接获取token的api，目前只能用固定账号的token，此token永久不过期
 * 固定账号为: 13862057151， 密码: dbbliuge6
 * 若要切换账号，需要手动操作，替换token
 * 手动获取token的步骤，通过 https://crm-web-base.iwosai.com/ 的Local Storage的access_token拿到对应账号的token
 */
const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJsb2dpblRpbWVcIjoxNjk2NjQzODI5MDIxLFwibmFtZVwiOlwid2ViXCIsXCJjbGllbnRcIjpcImNybV93ZWJcIixcImlkXCI6XCJhMGM4YWExYi0yYWVmLTQzNDQtYmFiMi0wNTc1MzlhYzJkODVcIixcInR5cGVcIjpcIiAoaVBob25lOyBDUFUgaVBob25lIE9TIDEzXzJfMyBsaWtlIE1hYyBPUyBYXCIsXCJ1bmlxdWVJZFwiOlwiMTc5NTQyY2EtMzNkMy00Mzg3LTlmZjAtNDhkN2EzNGQxYWZmXCIsXCJleHBpcmVkVGltZVwiOjE2OTY3MDUyMDAwMDB9In0.-ieHcZjUjZiBGHBZRU3r6GngCEf2hdp8mZjGynUN_MVOkcXa27_4Xq2auo26KVZDWD_QHaVtLKHWPEKrxpKuug';
// const path = `/dbb?token=${token}`;
const path = `/dbb`;

export const openBrowserByUrl = (isHttps) => {
  const localIp = openB.getLocalIP();
  const protocol = isHttps ? 'https' : 'http';
  const url = `${protocol}://${localIp}:${PORT}${path}`;
  console.log(pico.green(`[local ip] ${pico.italic(`${url}`)}`));
  openB.open(url);
};
