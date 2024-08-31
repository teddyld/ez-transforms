import { Transform } from "./transforms";

const interpolationTooltip: string =
  "cv2.INTER_NEAREST=0\ncv2.INTER_LINEAR=1\ncv2.INTER_CUBIC=2\ncv2.INTER_AREA=3\ncv2.INTER_LANCZOS4=4";

const borderModeTooltip: string =
  "cv2.BORDER_CONSTANT=0\ncv2.BORDER_REPLICATE=1\ncv2.BORDER_REFLECT=2\ncv2.BORDER_WRAP=3\ncv2.BORDER_REFLECT_101=4";

const piecewiseAffineTooltip: string =
  "Valid modes are:\n  'constant',\n  'edge',\n  'symmetric',\n  'reflect',\n  'wrap'";

const glassBlurTooltip: string = "Valid modes are 'fast' and 'exact'";

const equalizeTooltip: string = "Valid modes are 'cv' and 'pil'";

const fromFloatTooltip: string =
  "Valid dtypes are 'uint8', 'uint16', 'float32', and 'float64'";

const imageCompressionTooltip: string =
  "ImageCompressionType.JPEG=0\nImageCompressionType.WEBP=1";

const normalizationTooltip: string =
  "Valid normalization modes are:\n  'standard',\n  'image',\n  'image_per_channel',\n  'min_max',\n  'min_max_per_channel',\n  'inception'";

const rainTypeTooltip: string =
  "Valid rain types are:\n  'drizzle',\n  'heavy',\n  'torrential'";

const grayMethodTooltip: string =
  "Valid methods are:\n  'weighted_average',\n  'from_lab',\n  'desaturation',\n  'average',\n  'max',\n  'pca'";

const spatterModeTooltip: string = "Valid modes are 'rain' and 'mud";

export default function generateTooltip(transform: Transform): string {
  let tooltipMessage = "";

  if (transform.interpolation) {
    tooltipMessage += interpolationTooltip + "\n";
  }

  if (
    transform.border_mode ||
    transform.type === "Affine" ||
    transform.pad_mode
  ) {
    tooltipMessage += borderModeTooltip;
  }

  if (transform.type === "GlassBlur") {
    tooltipMessage += glassBlurTooltip;
  } else if (transform.type === "PiecewiseAffine") {
    tooltipMessage += piecewiseAffineTooltip;
  } else if (transform.type === "Equalize") {
    tooltipMessage += equalizeTooltip;
  } else if (transform.type === "FromFloat") {
    tooltipMessage += fromFloatTooltip;
  } else if (transform.type === "ImageCompression") {
    tooltipMessage += imageCompressionTooltip;
  } else if (transform.type === "Normalize") {
    tooltipMessage += normalizationTooltip;
  } else if (transform.type === "RandomRain") {
    tooltipMessage += rainTypeTooltip;
  } else if (transform.type === "ToGray") {
    tooltipMessage += grayMethodTooltip;
  } else if (transform.type === "Spatter") {
    tooltipMessage += spatterModeTooltip;
  }

  return tooltipMessage;
}
