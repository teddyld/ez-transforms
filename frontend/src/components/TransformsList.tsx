import { TransformProps, KeyProps } from "../utils/transforms";
import { Accordion, AccordionItem, Button, Link } from "@nextui-org/react";
import { FaLink } from "react-icons/fa";
import { toast } from "sonner";
import InputCodeEditor from "./inputs/InputCodeEditor";

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
          <InputCodeEditor
            transformProperties={transformProperties}
            setTransformProperties={setTransformProperties}
            transformType={transform.type}
            handleRemove={handleRemove}
          />
        </AccordionItem>
      ))}
    </Accordion>
  );
}
