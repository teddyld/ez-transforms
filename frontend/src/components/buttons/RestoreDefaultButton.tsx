import React from "react";
import { Button } from "@nextui-org/react";
import { GrPowerReset } from "react-icons/gr";
import fileToDataUrl from "../../utils/fileToDataUrl";
import { images } from "../../utils/images";

type DefaultButtonProps = {
  currentDefault: string;
  setCurrentDefault: React.Dispatch<React.SetStateAction<string>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  handleClearOutputs: () => void;
};

export default function RestoreDefaultButton({
  currentDefault,
  setCurrentDefault,
  setImage,
  handleClearOutputs,
}: DefaultButtonProps) {
  const handleRestoreDefaultImage = () => {
    const currentIndex = images.indexOf(currentDefault);
    const nextImage = images[currentIndex + 1] || images[0];
    setCurrentDefault(nextImage);

    fileToDataUrl(nextImage).then((dataUrl) => {
      setImage(dataUrl);
      localStorage.setItem("image", dataUrl);
    });
    handleClearOutputs();
  };

  return (
    <Button
      className="bg-background/50 text-lg"
      isIconOnly
      onClick={handleRestoreDefaultImage}
    >
      <GrPowerReset />
    </Button>
  );
}
