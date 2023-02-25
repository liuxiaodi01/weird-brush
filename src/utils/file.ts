// base64
export function base64(str: string) {
    return window.btoa(encodeURIComponent(str));
  }
  
// 下载文件方法 文件流
export function downloadFileStream(content: any, fileName: string) {
  var eleLink = document.createElement("a");
  eleLink.download = fileName;
  eleLink.style.display = "none";
  // 字符内容转变成blob地址
  var blob = new Blob([content]);
  eleLink.href = URL.createObjectURL(blob);
  // 自动触发点击
  document.body.appendChild(eleLink);
  eleLink.click();
  // 然后移除
  document.body.removeChild(eleLink);
}
// 下载文件blob
export function downloadFileBlod(
  content: any,
  filename: string,
  blobType: string
) {
  let blob = new Blob([content], {
    type: blobType,
  });
  const blobUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(blobUrl); // 释放内存
}
// 导出文件
export function exportFile(data: any, fileName: string) {
  // 地址不存在时，禁止操作
  if (!data) return;
  // 下载文件并保存到本地
  const callback = (res: any) => {
    // 创建a标签，使用 html5 download 属性下载，
    const link = document.createElement("a"); // 创建url对象
    const objectUrl = window.URL.createObjectURL(new Blob([res]));
    link.style.display = "none";
    link.href = objectUrl; // 自定义文件名称， fileName
    link.download = fileName;
    document.body.appendChild(link);
    link.click(); // 适当释放url
    window.URL.revokeObjectURL(objectUrl);
  };
  // 把接口返回的url地址转换为 blob
  const xhr = new XMLHttpRequest();
  xhr.open("get", data, true);
  xhr.responseType = "blob";
  xhr.onload = () => {
    // 返回文件流，进行下载处理
    callback(xhr.response);
  };
  xhr.send(); // 不要忘记发送
}
//上传单个文件
export function uploadFile(callback: any, data?: object) {
  var fileDom = document.createElement("input") as any;
  fileDom.setAttribute("type", "file");
  fileDom.addEventListener("change", (files: any) => {
    callback && callback(fileDom.files[0], data);
  });
  fileDom.click();
}
//下载表格
export function tableToExcel(htmlData: string, excelName: string) {
  var excelFile =
    "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
  excelFile +=
    "<head><meta charset='UTF-8'><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>";
  excelFile += "<body><table>";
  excelFile += htmlData;
  excelFile += "</table></body>";
  excelFile += "</html>";
  var link = "data:application/vnd.ms-excel;base64," + base64(excelFile);
  var a = document.createElement("a");
  a.download = excelName + ".xls";
  a.href = link;
  a.click();
}
// 将base64转换为文件
function dataURLtoFile(dataurl: any, filename: any) {
  let arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
// 将file文件上传转化为base64进行显示
export function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    ///FileReader类就是专门用来读文件的
    const reader = new FileReader();
    //开始读文件
    //readAsDataURL: dataurl它的本质就是图片的二进制数据， 进行base64加密后形成的一个字符串，
    reader.readAsDataURL(file);
    // 成功和失败返回对应的信息，reader.result一个base64，可以直接使用
    reader.onload = () => resolve(reader.result);
    // 失败返回失败的信息
    reader.onerror = (error) => reject(error);
  });
}
