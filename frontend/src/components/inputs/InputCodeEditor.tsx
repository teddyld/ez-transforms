import React from "react";
import { useTheme } from "next-themes";
import { TransformProps, Transform } from "../../utils/transforms";
import { Button } from "@nextui-org/react";
import { constrainedEditor } from "constrained-editor-plugin";
import { Monaco, Editor } from "@monaco-editor/react";
import { toast } from "sonner";
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { editor } from "monaco-editor";
import { js2py, py2js } from "../../utils/js2py";
import TooltipHelper from "../TooltipHelper";

export default function InputCodeEditor({
  transformProperties,
  setTransformProperties,
  transformType,
  handleRemove,
}: TransformProps & {
  transformType: string;
  handleRemove: (type: string) => void;
}) {
  const [editor, setEditor] =
    React.useState<editor.IStandaloneCodeEditor | null>(null);
  const { theme } = useTheme();
  const [code, setCode] = React.useState("");
  const [editorLineCount, setEditorLineCount] = React.useState(0);
  const [editorHeight, setEditorHeight] = React.useState(0);
  const [copy, setCopy] = React.useState(false);
  const [apply, setApply] = React.useState(false);
  const [currentTransform, setCurrentTransform] =
    React.useState<Transform | null>(null);

  // Copy code to clipboard
  const handleCopyBtn = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
  };

  const handleApplyTransformBtn = () => {
    const model = editor?.getModel();
    if (!model) return;

    let newCode = model.getValueInRange({
      startLineNumber: 2,
      startColumn: 1,
      endLineNumber: editorLineCount,
      endColumn: 1,
    });

    const transformEntry = transformProperties?.find(
      (transform) => transform.type === transformType,
    );
    if (!transformEntry) return;

    // Modify transform properties
    const params = newCode.split("\n");
    for (let param of params) {
      param = param.trim().slice(0, -1);
      const [key, value] = param.split("=");
      if (!key || !value) continue;

      const parsedValue = py2js(value);

      if (!Object.keys(transformEntry).includes(key)) {
        toast.error(
          `"${key}" is not a valid parameter for ${transformType} transform`,
        );
        return;
      }

      transformEntry[key] = parsedValue;
    }

    toast.success(`${transformType} transform updated`);
    setApply(true);
    setTransformProperties([...(transformProperties || [])]);
  };

  // Initialise code editor
  React.useEffect(() => {
    let transformCode = `A.${transformType}(\n`;
    const transformEntry = transformProperties?.find(
      (transform) => transform.type === transformType,
    );

    if (!transformEntry) return;
    setCurrentTransform(transformEntry);

    for (const [key, value] of Object.entries(transformEntry)) {
      if (key === "type" || key === "link") continue;
      transformCode += `    ${key}=${js2py(value)},\n`;
    }

    transformCode += `)`;
    setCode(transformCode);
  }, []);

  const handleEditorMount = (
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) => {
    setEditor(editor);
    const constrainedInstance = constrainedEditor(monaco);
    const model = editor.getModel();
    constrainedInstance.initializeIn(editor);

    const contentHeight = editor.getContentHeight();
    setEditorHeight(contentHeight);

    const transformEntry = transformProperties?.find(
      (transform) => transform.type === transformType,
    );

    if (!transformEntry) return;

    const endLineCount = Object.keys(transformEntry).length;
    setEditorLineCount(endLineCount);

    // Set code editor restriction parameters
    const restrictions = [
      {
        range: [2, 1, endLineCount, 1],
        allowMultiline: false,
        validate: function (
          _currentlyTypedValue: any,
          newRange: Record<string, number>,
          _info: any,
        ) {
          return endLineCount === newRange.endLineNumber;
        },
      },
    ];
    constrainedInstance.addRestrictionsTo(model, restrictions);
  };

  const handleEditorChange = (value: string | undefined) => {
    if (!value) return;
    setCode(value);
    setCopy(false);
    setApply(false);
    const contentHeight = editor?.getContentHeight();
    setEditorHeight(contentHeight as number);
  };

  return (
    <>
      <div className="group relative">
        <Editor
          language="python"
          height={editorHeight}
          defaultValue={code}
          value={code}
          options={{
            minimap: { enabled: false },
            scrollbar: {
              horizontal: "hidden",
            },
            folding: false,
            scrollBeyondLastLine: false,
          }}
          onMount={handleEditorMount}
          onChange={handleEditorChange}
          theme={theme === "dark" ? "vs-dark" : "light"}
        />
        <div className="absolute right-5 top-2 flex gap-2 opacity-0 transition group-hover:opacity-100">
          <TooltipHelper transform={currentTransform} />
          <Button isIconOnly variant="ghost" onClick={handleCopyBtn}>
            {copy ? <FaCheck /> : <MdContentCopy />}
          </Button>
        </div>
      </div>

      <div className="flex justify-between pt-2">
        <Button
          color="danger"
          variant="flat"
          onClick={() => handleRemove(transformType)}
        >
          Remove transform
        </Button>
        <Button
          color="success"
          variant="flat"
          onClick={handleApplyTransformBtn}
          className="transition"
        >
          {apply ? <FaCheck /> : <>Apply changes</>}
        </Button>
      </div>
    </>
  );
}
