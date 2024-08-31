import React from "react";
import { Image, Card, Button, ScrollShadow } from "@nextui-org/react";
import { IoMdDownload } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FaImage } from "react-icons/fa6";
import { useHorizontalScroll } from "../utils/useHorizontalScroll";
import base64Download from "../utils/base64Download";

type OutputProps = {
  outputs: string[];
  setOutputs: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function OutputTransform({ outputs, setOutputs }: OutputProps) {
  const handleRemoveOutput = (index: number) => {
    const newOutputs = [...outputs];
    newOutputs.splice(index, 1);
    setOutputs([...newOutputs]);
  };

  const handleAddOutput = () => {
    setOutputs([...outputs, ""]);
  };

  const scrollRef = useHorizontalScroll<HTMLDivElement>();

  return (
    <ScrollShadow
      orientation="horizontal"
      className="mx-auto flex max-w-full gap-4"
      size={25}
      ref={scrollRef}
    >
      {outputs.map((output, index) => {
        if (output === "") {
          return (
            <Card
              className="group relative flex min-h-24 min-w-24 items-center justify-center border-content shadow-sm hover:border-1"
              key={`card-${index}`}
            >
              <FaImage />
              <Button
                isIconOnly
                className="absolute right-2 top-2 flex bg-background/75 text-lg opacity-0 transition group-hover:opacity-100"
                onClick={() => handleRemoveOutput(index)}
              >
                <IoClose />
              </Button>
            </Card>
          );
        }
        return (
          <Card
            className="group relative min-w-max border-content hover:border-1"
            key={`card-${index}`}
          >
            <div className="absolute right-2 top-2 z-20 flex gap-2 opacity-0 transition group-hover:opacity-100">
              <Button
                isIconOnly
                className="bg-background/75 text-lg"
                onClick={() =>
                  base64Download(
                    `data:image/jpg;base64,${output}`,
                    `output_${index}.jpg`,
                  )
                }
              >
                <IoMdDownload />
              </Button>
              <Button
                isIconOnly
                className="bg-background/75 text-lg"
                onClick={() => handleRemoveOutput(index)}
              >
                <IoClose />
              </Button>
            </div>
            <Image
              className="max-w-2xl object-cover"
              src={`data:image/jpg;base64,${output}`}
            />
          </Card>
        );
      })}
      <Card className="flex min-h-24 min-w-24 items-center justify-center shadow-sm">
        <Button
          isIconOnly
          variant="ghost"
          className="h-full w-full bg-background/75 text-2xl font-bold"
          onClick={handleAddOutput}
        >
          <GoPlus />
        </Button>
      </Card>
    </ScrollShadow>
  );
}
