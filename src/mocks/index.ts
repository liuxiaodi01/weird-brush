import mockjs from "mockjs";
export default function () {
  const fileMock: any = import.meta.glob("./*.mock.ts", {
    eager: true,
  });
  Object.keys(fileMock).forEach((v: any) => {
    fileMock[v].default.forEach((r: any) => {
      mockjs.mock(r.url, r.method, r.data);
    });
  });
  // 1s 后返回数据
  mockjs.setup({ timeout: 0 });
}
