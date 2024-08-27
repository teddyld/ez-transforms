import React from "react";
import { Transform, TransformProps, KeyProps } from "../utils/transforms";
import { Accordion, AccordionItem, Button, Link } from "@nextui-org/react";
import { FaLink } from "react-icons/fa";
import { toast } from "sonner";

export default function TransformsList({
  transformProperties,
  setTransformProperties,
  selectedKeys,
  setSelectedKeys,
}: TransformProps & KeyProps) {
  const itemClasses = {
    trigger: "px-2 data-[hover=true]:bg-default-100 rounded-lg",
    content: "px-2",
  };

  const handleRemove = (transformType: string) => {
    const newTransformProperties = transformProperties?.filter(
      (transform) => transform.type !== transformType,
    );
    const newSelectedKeys = new Set([...selectedKeys]);
    newSelectedKeys.delete(transformType);
    setSelectedKeys(newSelectedKeys);
    setTransformProperties([...(newTransformProperties || [])]);
    toast.success(`${transformType} transform removed`);
  };

  return (
    <Accordion
      selectionMode="multiple"
      isCompact={true}
      variant="shadow"
      itemClasses={itemClasses}
      className="flex flex-col gap-1 p-2"
    >
      {[...(transformProperties || [])].map((transform) => (
        <AccordionItem
          key={transform.type}
          aria-label={`${transform.type} transform`}
          title={transform.type}
          startContent={
            <Button
              isIconOnly
              className="z-10"
              size="sm"
              variant="light"
              isExternal
              href={transform.link}
              as={Link}
            >
              <FaLink />
            </Button>
          }
        >
          <div className="flex justify-between pt-2">
            <Button
              color="danger"
              variant="flat"
              onClick={() => handleRemove(transform.type)}
            >
              Remove
            </Button>
            <Button color="success" variant="flat">
              Apply
            </Button>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
