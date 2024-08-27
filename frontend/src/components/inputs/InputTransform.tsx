import React from "react";
import {
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";
import {
  transforms,
  Transform,
  TransformProps,
  KeyProps,
} from "../../utils/transforms";
import { toast } from "sonner";
import { FaChevronDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

export default function InputTransform({
  transformProperties,
  setTransformProperties,
  selectedKeys,
  setSelectedKeys,
}: TransformProps & KeyProps) {
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filter transforms based on search query
  const filteredTransforms = React.useMemo(() => {
    if (!searchQuery) return transforms;
    return [...transforms].filter((transform) =>
      transform.type.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const handleAction = (transformName: string) => {
    const transformEntry = transforms.find(
      (transform) => transform.type === transformName,
    );

    if (!transformEntry) return;

    // Deselect transform
    if (transformProperties?.includes(transformEntry as Transform)) {
      const newTransformProperties = transformProperties?.filter(
        (transform) => transform.type !== transformName,
      );
      setTransformProperties([...newTransformProperties]);
      toast.success(`"${transformName}" transform removed`);
    } else {
      // Select transform
      setTransformProperties([
        ...(transformProperties || []),
        transformEntry as Transform,
      ]);
      toast.success(`"${transformName}" transform added`);
    }
  };

  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200",
        content: "bg-gradient-to-br from-default-100 to-background",
      }}
    >
      <DropdownTrigger>
        <Button variant="faded" endContent={<FaChevronDown />}>
          Select transforms
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Transform dropdown selector"
        variant="faded"
        closeOnSelect={false}
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
        onAction={(e) => handleAction(e as string)}
      >
        <DropdownSection title="Search" showDivider>
          <DropdownItem
            key="search"
            isReadOnly
            hideSelectedIcon
            className="mb-2 p-0"
            textValue="Search"
          >
            <Input
              placeholder="Type to search..."
              value={searchQuery}
              onValueChange={setSearchQuery}
              fullWidth
              isClearable
              onClear={() => setSearchQuery("")}
              startContent={<IoSearch className="text-lg" />}
            />
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Albumentations" showDivider>
          {filteredTransforms.map((transform) => (
            <DropdownItem key={transform.type}>{transform.type}</DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
