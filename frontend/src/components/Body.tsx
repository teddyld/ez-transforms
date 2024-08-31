import React from "react";
import axios from "axios";
import InputTransform from "./inputs/InputTransform";
import InputImage from "./inputs/InputImage";
import TransformsList from "./TransformsList";
import OutputTransform from "./OutputTransform";
import { Button } from "@nextui-org/react";
import { toast } from "sonner";

import { Transform } from "../utils/transforms";

export default function Body() {
  const [image, setImage] = React.useState("");
  const [transformProperties, setTransformProperties] = React.useState<
    Transform[] | null
  >(null);
  const [outputs, setOutputs] = React.useState<string[]>([""]);
  const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(
    new Set([]),
  );
  const handleClearOutputs = () => {
    setOutputs(Array(outputs.length).fill(""));
  };

  const handleGenerateTransform = () => {
    if (!transformProperties || transformProperties.length === 0) {
      toast.warning("Please select at least one transform");
      return;
    } else if (!image) {
      toast.warning("Please upload an image");
      return;
    }

    const newOutputs: string[] = Array(outputs.length).fill(image);
    outputs.forEach(async (_value, index) => {
      for (const transform of transformProperties) {
        try {
          const response = await axios.post<string>("/transforms/generate", {
            ...transform,
            image: newOutputs[index],
          });
          newOutputs[index] = response.data;
          setOutputs([...newOutputs]);
        } catch (err) {
          return;
        }
      }
    });
  };

  return (
    <section className="mx-auto flex w-full flex-1 flex-col flex-wrap gap-8 px-8 pb-24 pt-16 md:px-16">
      <div className="flex flex-wrap items-start justify-center gap-4">
        <div className="flex max-w-2xl flex-1 flex-col gap-2">
          <InputTransform
            transformProperties={transformProperties}
            setTransformProperties={setTransformProperties}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
          />
          <TransformsList
            transformProperties={transformProperties}
            setTransformProperties={setTransformProperties}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
          />
          <Button variant="ghost" onClick={handleGenerateTransform}>
            Generate transform
          </Button>
        </div>
        <InputImage
          image={image}
          setImage={setImage}
          handleClearOutputs={handleClearOutputs}
        />
      </div>
      <OutputTransform outputs={outputs} setOutputs={setOutputs} />
    </section>
  );
}
