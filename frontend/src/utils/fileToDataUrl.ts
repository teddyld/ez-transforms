export default function fileToDataUrl(file: string | File) {
  if (typeof file === "string") {
    return fetch(file)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        const dataUrlPromise = new Promise<string>((resolve, reject) => {
          reader.onload = () =>
            resolve((reader.result as string)?.split("base64,")[1]);
          reader.onerror = reject;
        });
        reader.readAsDataURL(blob);
        return dataUrlPromise;
      });
  } else {
    const validFileTypes = ["image/jpeg", "image/png", "image/jpg"];
    const valid = validFileTypes.find((type) => type === file.type);

    if (!valid) {
      return Promise.reject(
        "Invalid file type. Valid file types are .jpg, .png, and .jpeg",
      );
    }

    const reader = new FileReader();

    const dataUrlPromise = new Promise<string>((resolve, reject) => {
      reader.onerror = () => {
        reject("File reading has failed");
      };
      reader.onload = () => {
        resolve((reader.result as string)?.split("base64,")[1]);
      };
    });
    reader.readAsDataURL(file);
    return dataUrlPromise;
  }
}
