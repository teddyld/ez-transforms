import React from "react";
import { Tooltip, Button } from "@nextui-org/react";
import { MdQuestionMark } from "react-icons/md";
import { Transform } from "../utils/transforms";
import generateTooltip from "../utils/generateTooltip";

export default function TooltipHelper({
  transform,
}: {
  transform: Transform | null;
}) {
  const [message, setMessage] = React.useState("");
  const [hidden, setHidden] = React.useState(true);

  React.useEffect(() => {
    if (!transform) {
      return;
    }
    const tooltipMessage = generateTooltip(transform);

    setMessage(tooltipMessage);
    setHidden(tooltipMessage === "");
  }, [transform, hidden]);

  return (
    <Tooltip
      content={
        <div className="px-1 py-2">
          <div className="text-small font-bold">Some helpful information</div>
          <div className="whitespace-pre-wrap text-tiny">{message}</div>
        </div>
      }
      showArrow={true}
    >
      <Button isIconOnly variant="ghost" className={hidden ? "hidden" : "flex"}>
        <MdQuestionMark />
      </Button>
    </Tooltip>
  );
}
