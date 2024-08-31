import { Link, Divider } from "@nextui-org/react";

export default function Footer() {
  const footerLinks = [
    { text: "Source code", href: "https://github.com/teddyld/ez-transforms" },
    {
      text: "Albumentations Docs",
      href: "https://albumentations.ai/docs/api_reference/full_reference/",
    },
    {
      text: "Torchvision Transforms Docs",
      href: "https://pytorch.org/vision/0.9/transforms.html",
    },
  ];
  return (
    <>
      <Divider className="bg-line" />
      <footer className="relative z-50 flex h-16 items-center justify-center gap-8 px-4 text-content4-foreground">
        {footerLinks.map((item) => {
          return (
            <Link
              href={item.href}
              key={item.text}
              isExternal
              isBlock
              color="foreground"
              className="hover:text-primary"
            >
              {item.text}
            </Link>
          );
        })}
      </footer>
    </>
  );
}
