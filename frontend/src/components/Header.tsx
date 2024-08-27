import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const handleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between gap-8 bg-transparent px-4 backdrop-blur-md">
      <div className="inline-flex items-center gap-4 text-xl">
        <GitHub />
        <LinkedIn />
      </div>
      <h1 className="text-xl">
        <span className="text-secondary">ez</span> transforms
      </h1>
      <MdLightMode
        onClick={handleDarkMode}
        className="cursor-pointer text-xl hover:text-primary"
      />
    </header>
  );
}
