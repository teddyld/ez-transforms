import { Link, Divider } from "@nextui-org/react";

export default function Footer() {
  return (
    <>
      <Divider className="bg-line" />
      <footer className="relative z-50 flex h-16 items-center justify-center gap-8 px-4 text-content4-foreground">
        <Link
          href="https://github.com/teddyld/ez-transforms"
          isExternal
          isBlock
          color="foreground"
          className="hover:text-primary"
        >
          Source code
        </Link>
        <Link
          href="https://albumentations.ai/docs/api_reference/full_reference/"
          isExternal
          isBlock
          color="foreground"
          className="hover:text-primary"
        >
          Albumentations Docs
        </Link>
        <Link
          href="https://pytorch.org/vision/0.9/transforms.html"
          isExternal
          isBlock
          color="foreground"
          className="hover:text-primary"
        >
          Torchvision Transforms Docs
        </Link>
      </footer>
    </>
  );
}
