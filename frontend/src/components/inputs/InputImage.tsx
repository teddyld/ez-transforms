import React from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { FiUpload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";
import RestoreDefaultButton from "../RestoreDefaultButton";
import fileToDataUrl from "../../utils/fileToDataUrl";
import { images } from "../../utils/images";

type ImageProps = {
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  handleClearOutputs: () => void;
};

export default function InputImage({
  image,
  setImage,
  handleClearOutputs,
}: ImageProps) {
  // Handle initial image state
  React.useEffect(() => {
    if (localStorage.getItem("image")) {
      setImage(localStorage.getItem("image") as string);
    } else if (localStorage.getItem("image") !== "") {
      fileToDataUrl(images[0]).then((dataUrl) => {
        setImage(dataUrl);
        localStorage.setItem("image", dataUrl);
      });
    }
  }, []);

  // Handle image upload
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) {
      return;
    }

    const file = acceptedFiles[0];
    fileToDataUrl(file)
      .then((dataUrl) => {
        setImage(dataUrl);
        localStorage.setItem("image", dataUrl);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const [currentDefault, setCurrentDefault] = React.useState(
    "/src/assets/car_coco2014.jpg",
  );

  return (
    <Card className="group relative">
      {image ? (
        <CardBody className="aspect-auto max-w-2xl p-0">
          <Image
            alt="Uploaded image"
            className="rounded-none object-cover"
            src={`data:image/jpg;base64,${image}`}
          />
          <div className="absolute right-2 z-10 flex gap-2 overflow-hidden py-2 opacity-0 transition group-hover:opacity-100">
            <RestoreDefaultButton
              currentDefault={currentDefault}
              setCurrentDefault={setCurrentDefault}
              setImage={setImage}
              handleClearOutputs={handleClearOutputs}
            />
            <Button
              isIconOnly
              className="bg-background/50 text-lg"
              onClick={() => {
                setImage("");
                localStorage.setItem("image", "");
                handleClearOutputs();
              }}
            >
              <IoClose />
            </Button>
          </div>
        </CardBody>
      ) : (
        <CardBody className="flex h-72 w-72 items-center justify-center">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="flex flex-col items-center space-y-1 text-center">
              <FiUpload className="text-3xl" />
              <p className="font-bold uppercase">Drop image here</p>
              <p className="whitespace-nowrap text-default-500">=== or ===</p>
              <p className="font-bold uppercase">Click to upload</p>
              <div className="absolute right-2 top-2">
                <RestoreDefaultButton
                  currentDefault={currentDefault}
                  setCurrentDefault={setCurrentDefault}
                  setImage={setImage}
                  handleClearOutputs={handleClearOutputs}
                />
              </div>
            </div>
          </div>
        </CardBody>
      )}
    </Card>
  );
}
