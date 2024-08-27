import React from "react";
import { Button } from "@nextui-org/react";
import { GrPowerReset } from "react-icons/gr";
import fileToDataUrl from "../../utils/fileToDataUrl";

const defaultImages = [
  "/src/assets/car_coco2014.jpg",
  "/src/assets/food_coco2014.jpg",
  "/src/assets/person_coco2014.jpg",
  "/src/assets/cat_coco2014.jpg",
];

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
    const currentIndex = defaultImages.indexOf(currentDefault);
    const nextImage = defaultImages[currentIndex + 1] || defaultImages[0];
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
