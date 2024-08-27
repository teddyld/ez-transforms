import "./axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { Toaster } from "sonner";
import { handleWindowBlurChangeTitle } from "./utils/handleWindowBlurChangeTitle";

function App() {
  handleWindowBlurChangeTitle([
    "Something need doing?",
    "Work, work.",
    "Ready to work.",
  ]);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <Body />
      <Footer />
      <Toaster
        position="bottom-center"
        richColors={true}
        duration={5000}
        closeButton={true}
      />
    </div>
  );
}

export default App;
