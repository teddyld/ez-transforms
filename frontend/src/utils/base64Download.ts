import { saveAs } from "file-saver";

function dataURLtoFile(dataurl: string, filename: string) {
  const arr = dataurl.split(",");
  const matchResult = arr[0].match(/:(.*?);/);

  const mime = matchResult ? matchResult[1] : "";
  if (mime === "") {
    return;
  }

  const bstr = atob(arr[arr.length - 1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

export default function base64Download(base64: string, filename: string) {
  const file = dataURLtoFile(base64, filename);
  saveAs(file as Blob, filename);
}
