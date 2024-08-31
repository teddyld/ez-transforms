type ObjectKeys = {
  [key: string]: any;
};

type PiecewiseAffineMode =
  | "constant"
  | "edge"
  | "symmetric"
  | "reflect"
  | "wrap";

type GlassBlurMode = "fast" | "exact";

type EqualizeMode = "cv" | "pil";

type SpatterMode = "rain" | "mud";

export type Transform = ObjectKeys & {
  type: string;
  link: string;
  blur_limit?: number | number[];
  border_mode?: 0 | 1 | 2 | 3 | 4;
  height?: number;
  width?: number;
  interpolation?: 0 | 1 | 2 | 3 | 4;
  mask_interpolation?: 0 | 1 | 2 | 3 | 4;
  scale?: number | [number, number] | null;
  translate_percent?: number | [number, number] | null;
  translate_px?: number | [number, number] | null;
  rotate?: number | [number, number] | null;
  shear?: number | [number, number] | null;
  cval?: number;
  cval_mask?: number;
  crop_border?: boolean;
  mode?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | GlassBlurMode
    | PiecewiseAffineMode
    | EqualizeMode
    | SpatterMode;
  fit_output?: boolean;
  keep_ratio?: boolean;
  rotate_method?: "largest_box" | "ellipse";
  limit?: number | number[];
  value?: number | number[] | null;
  sigma?: number;
  sigma_limit?: number | number[];
  sigma_x_limit?: number | number[];
  sigma_y_limit?: number | number[];
  rotate_limit?: number | [number, number];
  beta_limit?: number | number[];
  noise_limit?: number | number[];
  clip_limit?: number | number[];
  tile_grid_size?: number[];
  channel_drop_range?: number[];
  fill_value?: number | "random";
  radius?: number | [number, number];
  alias_blur?: number | [number, number];
  iterations?: number;
  max_delta?: number;
  allow_shifted?: boolean;
  max_factor?: number | [number, number];
  step_factor?: number | [number, number];
  x_min?: number;
  y_min?: number;
  x_max?: number;
  y_max?: number;
  crop_left?: number;
  crop_right?: number;
  crop_top?: number;
  crop_bottom?: number;
  px?: number | number[] | null;
  percent?: number | number[] | null;
  pad_mode?: 0 | 1 | 2 | 3 | 4;
  pad_cval?: number | number[];
  pad_cval_mask?: number | number[];
  keep_size?: boolean;
  sample_independently?: boolean;
  size?: number | number[];
  ratio?: number | number[];
  min_max_height?: [number, number];
  w2h_ratio?: number;
  num_holes_range?: [number, number];
  hole_height_range?: [number, number];
  hole_width_range?: [number, number];
  unit_size_min?: number | null;
  unit_size_max?: number | null;
  holes_number_x?: number | null;
  holes_number_y?: number | null;
  shift_x?: number;
  shift_y?: number;
  random_offset?: boolean;
  num_masks_x?: number | [number, number];
  num_masks_y?: number | [number, number];
  mask_x_length?: number | [number, number];
  mask_y_length?: number | [number, number];
  max_size?: number | number[];
  scale_limit?: number | [number, number];
  alpha?: number | [number, number];
  strength?: [number, number];
  alpha_affine?: number;
  approximate?: boolean;
  same_dxdy?: boolean;
  num_steps?: number;
  distort_limit?: number | [number, number];
  normalized?: boolean;
  shift_limit?: number | [number, number];
  min_height?: number;
  min_width?: number;
  pad_height_divisor?: number | null;
  pad_width_divisor?: number | null;
  position?:
    | "center"
    | "top_left"
    | "top_right"
    | "bottom_left"
    | "bottom_right"
    | "random";
  pad_val?: number | number[];
  nb_rows?: number | [number, number];
  nb_cols?: number | [number, number];
  absolute_scale?: boolean;
  shift_limit_x?: number | [number, number] | null;
  shift_limit_y?: number | [number, number] | null;
  brightness?: number | [number, number];
  contrast?: number | [number, number];
  saturation?: number | [number, number];
  hue?: number | [number, number];
  scale_range?: [number, number];
  interpolation_pair?: {
    upscale: 0 | 1 | 2 | 3 | 4;
    downscale: 0 | 1 | 2 | 3 | 4;
  };
  by_channels?: boolean;
  max_value?: number | null;
  dtype?: "uint8" | "uint16" | "float32" | "float64";
  var_limit?: number | [number, number];
  mean?: number | number[];
  std?: number | number[];
  max_pixel_value?: number | null;
  normalization?:
    | "standard"
    | "image"
    | "image_per_channel"
    | "min_max"
    | "min_max_per_channel"
    | "inception";
  per_channel?: boolean;
  noise_scale_factor?: number;
  hue_shift_limit?: number | [number, number];
  sat_shift_limit?: number | [number, number];
  val_shift_limit?: number | [number, number];
  color_shift?: [number, number];
  intensity?: number | [number, number];
  quality_lower?: number;
  quality_upper?: number;
  compression_type?: 0 | 1;
  elementwise?: boolean;
  dropout_prob?: number;
  drop_value?: number | number[];
  num_bits?: number | number[];
  r_shift_limit?: number | [number, number];
  g_shift_limit?: number | [number, number];
  b_shift_limit?: number | [number, number];
  brightness_limit?: number | [number, number];
  contrast_limit?: number | [number, number];
  brightness_by_max?: boolean;
  fog_coef_range?: [number, number];
  alpha_coef?: number;
  gamma_limit?: [number, number];
  gravel_roi?: [number, number, number, number];
  number_of_patches?: number;
  grid?: [number, number];
  slant_range?: [number, number];
  drop_length?: number;
  drop_width?: number;
  drop_color?: [number, number, number];
  blue_value?: number;
  brightness_coefficient?: number;
  rain_type?: "drizzle" | "heavy" | "torrential" | null;
  shadow_roi?: [number, number, number, number];
  num_shadows_limit?: [number, number];
  shadow_dimension?: number;
  shadow_intensity_range?: [number, number];
  snow_point_range?: [number, number];
  brightness_coeff?: number;
  flare_roi?: [number, number, number, number];
  src_radius?: number;
  src_color?: [number, number, number];
  angle_range?: [number, number];
  num_flare_circles_range?: [number, number];
  cutoff?: number | [number, number];
  lightness?: [number, number];
  threshold?: number;
  gauss_sigma?: number | [number, number];
  cutout_threshold?: number | [number, number];
  color?: number[] | null;
  p_replace?: [number, number];
  n_semgents?: [number, number];
  num_output_channels?: number;
  method?:
    | "weighted_average"
    | "from_lab"
    | "desaturation"
    | "average"
    | "max"
    | "pca";
  p: number;
};

export const transforms: Transform[] = [
  {
    type: "Affine",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.geometric.transforms.Affine",
    scale: null,
    translate_percent: null,
    translate_px: null,
    rotate: null,
    shear: null,
    interpolation: 1,
    mask_interpolation: 0,
    cval: 0,
    cval_mask: 0,
    mode: 0,
    fit_output: false,
    keep_ratio: false,
    rotate_method: "largest_box",
    p: 1,
  },
  {
    type: "AdvancedBlur",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.blur.transforms.AdvancedBlur",
    blur_limit: [3, 7],
    sigma_x_limit: [0.2, 1.0],
    sigma_y_limit: [0.2, 1.0],
    rotate_limit: [-90, 90],
    beta_limit: [0.5, 8.0],
    noise_limit: [0.9, 1.1],
    p: 1,
  },
  {
    type: "Blur",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.blur.transforms.Blur",
    blur_limit: 7,
    p: 1,
  },
  {
    type: "CenterCrop",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.crops.transforms.CenterCrop",
    width: 256,
    height: 256,
    p: 1,
  },
  {
    type: "Resize",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.geometric.resize.Resize",
    height: 256,
    width: 256,
    interpolation: 1,
    p: 1,
  },
  {
    type: "Rotate",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.geometric.rotate.Rotate",
    limit: [-90, 90],
    interpolation: 1,
    border_mode: 4,
    value: null,
    rotate_method: "largest_box",
    crop_border: false,
    p: 1,
  },
  {
    type: "HorizontalFlip",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.geometric.transforms.HorizontalFlip",
    p: 1,
  },
  {
    type: "CLAHE",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.CLAHE",
    clip_limit: 4.0,
    tile_grid_size: [8, 8],
    p: 1,
  },
  {
    type: "ChannelDropout",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.ChannelDropout",
    channel_drop_range: [1, 1],
    fill_value: 0,
    p: 1,
  },
  {
    type: "Defocus",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.DefocusBlur",
    radius: [3, 10],
    alias_blur: [0.1, 0.5],
    p: 1,
  },
  {
    type: "GaussianBlur",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.GaussianBlur",
    blur_limit: [3, 7],
    sigma_limit: 0,
    p: 1,
  },
  {
    type: "GlassBlur",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.GlassBlur",
    sigma: 0.7,
    max_delta: 4,
    iterations: 2,
    mode: "fast",
    p: 1,
  },
  {
    type: "MedianBlur",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.MedianBlur",
    blur_limit: 7,
    p: 1,
  },
  {
    type: "MotionBlur",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.MotionBlur",
    blur_limit: 7,
    allow_shifted: true,
    p: 1,
  },
  {
    type: "ZoomBlur",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.ZoomBlur",
    max_factor: [1, 1.31],
    step_factor: [0.01, 0.03],
    p: 1,
  },
  {
    type: "Crop",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.crops.transforms.Crop",
    x_min: 0,
    y_min: 0,
    x_max: 1024,
    y_max: 1024,
    p: 1,
  },
  {
    type: "CropAndPad",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.crops.transforms.CropAndPad",
    px: null,
    percent: -0.1,
    pad_mode: 0,
    pad_cval: 0,
    pad_cval_mask: 0,
    keep_size: true,
    sample_independently: true,
    interpolation: 1,
    p: 1,
  },
  {
    type: "RandomCrop",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.crops.transforms.RandomCrop",
    height: 256,
    width: 256,
    p: 1,
  },
  {
    type: "RandomCropFromBorders",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.crops.transforms.RandomCropFromBorders",
    crop_left: 0.1,
    crop_right: 0.1,
    crop_top: 0.1,
    crop_bottom: 0.1,
    p: 1,
  },
  {
    type: "RandomResizedCrop",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.crops.transforms.RandomResizedCrop",
    size: [256, 256],
    scale: [0.08, 1.0],
    ratio: [0.75, 1.3333333333333333],
    interpolation: 1,
    p: 1,
  },
  {
    type: "RandomSizedCrop",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.crops.transforms.RandomSizedCrop",
    min_max_height: [64, 64],
    size: [256, 256],
    w2h_ratio: 1.0,
    interpolation: 1,
    p: 1,
  },
  {
    type: "CoarseDropout",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.CoarseDropout",
    num_holes_range: [5, 10],
    hole_height_range: [32, 32],
    hole_width_range: [32, 32],
    fill_value: 0,
    p: 1,
  },
  {
    type: "GridDropout",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.GridDropout",
    ratio: 0.5,
    unit_size_min: null,
    unit_size_max: null,
    holes_number_x: null,
    holes_number_y: null,
    shift_x: 0,
    shift_y: 0,
    random_offset: false,
    fill_value: 0,
    p: 1,
  },
  {
    type: "XYMasking",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.XYMasking",
    num_masks_x: [1, 5],
    num_masks_y: [1, 5],
    mask_x_length: [8, 32],
    mask_y_length: [8, 32],
    fill_value: 0,
    p: 1,
  },
  {
    type: "LongestMaxSize",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.LongestMaxSize",
    max_size: [128, 256, 512, 1024],
    interpolation: 1,
    p: 1,
  },
  {
    type: "RandomScale",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.geometric.transforms.RandomScale",
    scale_limit: [-0.1, 0.1],
    interpolation: 1,
    p: 1,
  },
  {
    type: "SmallestMaxSize",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.SmallestMaxSize",
    max_size: [128, 256, 512, 1024],
    interpolation: 1,
    p: 1,
  },
  {
    type: "RandomRotate90",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RandomRotate90",
    p: 1,
  },
  {
    type: "SafeRotate",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.geometric.transforms.SafeRotate",
    limit: [-90, 90],
    interpolation: 1,
    border_mode: 4,
    value: null,
    rotate_method: "largest_box",
    p: 1,
  },
  {
    type: "D4",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.D4",
    p: 1,
  },
  {
    type: "ElasticTransform",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.ElasticTransform",
    alpha: 3,
    sigma: 50,
    alpha_affine: 50,
    interpolation: 1,
    border_mode: 4,
    value: null,
    approximate: false,
    same_dxdy: false,
    p: 1,
  },
  {
    type: "GridDistortion",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.GridDistortion",
    num_steps: 5,
    distort_limit: [-0.3, 0.3],
    interpolation: 1,
    border_mode: 4,
    value: null,
    normalized: false,
    p: 1,
  },
  {
    type: "OpticalDistortion",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.OpticalDistortion",
    distort_limit: [-0.05, 0.05],
    shift_limit: [-0.05, 0.05],
    interpolation: 1,
    border_mode: 4,
    value: null,
    p: 1,
  },
  {
    type: "PadIfNeeded",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.PadIfNeeded",
    min_height: 1024,
    min_width: 1024,
    pad_height_divisor: null,
    pad_width_divisor: null,
    position: "center",
    border_mode: 4,
    value: null,
    p: 1,
  },
  {
    type: "Perspective",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.geometric.transforms.Perspective",
    scale: [0.05, 0.1],
    keep_size: true,
    pad_mode: 0,
    pad_val: 0,
    fit_output: false,
    p: 1,
  },
  {
    type: "PiecewiseAffine",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.geometric.transforms.PiecewiseAffine",
    scale: [0.03, 0.05],
    nb_rows: 4,
    nb_cols: 4,
    interpolation: 1,
    cval: 0,
    mode: "constant",
    absolute_scale: false,
    p: 1,
  },
  {
    type: "ShiftScaleRotate",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.geometric.transforms.ShiftScaleRotate",
    shift_limit: [-0.0625, 0.0625],
    scale_limit: [-0.1, 0.1],
    rotate_limit: [-45, 45],
    interpolation: 1,
    border_mode: 4,
    value: 0,
    shift_limit_x: null,
    shift_limit_y: null,
    p: 1,
  },
  {
    type: "Transpose",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.geometric.transforms.Transpose",
    p: 1,
  },
  {
    type: "VerticalFlip",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.geometric.transforms.VerticalFlip",
    p: 1,
  },
  {
    type: "ChannelShuffle",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.ChannelShuffle",
    p: 1,
  },
  {
    type: "ColorJitter",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.ColorJitter",
    brightness: [0.8, 1],
    contrast: [0.8, 1],
    saturation: [0.8, 1],
    hue: [-0.5, 0.5],
    p: 1,
  },
  {
    type: "Downscale",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.Downscale",
    scale_range: [0.25, 0.25],
    interpolation_pair: { upscale: 0, downscale: 0 },
    p: 1,
  },
  {
    type: "Emboss",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.Emboss",
    alpha: [0.2, 0.5],
    strength: [0.2, 0.7],
    p: 1,
  },
  {
    type: "Equalize",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.Equalize",
    mode: "cv",
    by_channels: true,
    p: 1,
  },
  {
    type: "FancyPCA",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.FancyPCA",
    alpha: 0.1,
    p: 1,
  },
  {
    type: "FromFloat",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.FromFloat",
    max_value: null,
    dtype: "uint16",
    p: 1,
  },
  {
    type: "GaussNoise",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.GaussNoise",
    var_limit: [10.0, 50.0],
    mean: 0,
    per_channel: true,
    noise_scale_factor: 1,
    p: 1,
  },
  {
    type: "HueSaturationValue",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.HueSaturationValue",
    hue_shift_limit: 20,
    sat_shift_limit: 30,
    val_shift_limit: 20,
    p: 1,
  },
  {
    type: "ISONoise",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.ISONoise",
    color_shift: [0.01, 0.05],
    intensity: [0.1, 0.5],
    p: 1,
  },
  {
    type: "ImageCompression",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.ImageCompression",
    quality_lower: 99,
    quality_upper: 100,
    compression_type: 0,
    p: 1,
  },
  {
    type: "InvertImg",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.InvertImg",
    p: 1,
  },
  {
    type: "MultiplicativeNoise",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.MultiplicativeNoise",
    multiplier: [0.9, 1.1],
    per_channel: false,
    elementwise: false,
    p: 1,
  },
  {
    type: "Normalize",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.Normalize",
    mean: [0.485, 0.456, 0.406],
    std: [0.229, 0.224, 0.225],
    max_pixel_value: 255.0,
    normalization: "standard",
    p: 1,
  },
  {
    type: "PixelDropout",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.PixelDropout",
    dropout_prob: 0.01,
    per_channel: false,
    drop_value: 0,
    p: 1,
  },
  {
    type: "Posterize",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.Posterize",
    num_bits: 4,
    p: 1,
  },
  {
    type: "RGBShift",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RGBShift",
    r_shift_limit: [-20, 20],
    g_shift_limit: [-20, 20],
    b_shift_limit: [-20, 20],
    p: 1,
  },
  {
    type: "RandomBrightnessContrast",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RandomBrightnessContrast",
    brightness_limit: [-0.2, 0.2],
    contrast_limit: [-0.2, 0.2],
    brightness_by_max: true,
    p: 1,
  },
  {
    type: "RandomFog",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RandomFog",
    fog_coef_range: [0.3, 1.0],
    alpha_coef: 0.08,
    p: 1,
  },
  {
    type: "RandomGamma",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RandomGamma",
    gamma_limit: [80, 120],
    p: 1,
  },
  {
    type: "RandomGravel",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RandomGravel",
    gravel_roi: [0.1, 0.4, 0.9, 0.9],
    number_of_patches: 2,
    p: 1,
  },
  {
    type: "RandomGridShuffle",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RandomGridShuffle",
    grid: [3, 3],
    p: 1,
  },
  {
    type: "RandomRain",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RandomRain",
    slant_range: [-10, 10],
    drop_length: 20,
    drop_width: 1,
    drop_color: [200, 200, 200],
    blur_value: 7,
    brightness_coefficient: 0.7,
    rain_type: null,
    p: 1,
  },
  {
    type: "RandomShadow",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RandomShadow",
    shadow_roi: [0, 0.5, 1, 1],
    num_shadows_limit: [1, 2],
    shadow_dimension: 5,
    shadow_intensity_range: [0.5, 0.5],
    p: 1,
  },
  {
    type: "RandomSnow",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RandomSnow",
    snow_point_range: [0.1, 0.3],
    brightness_coeff: 2.5,
    p: 1,
  },
  {
    type: "RandomSunFlare",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RandomSunFlare",
    flare_roi: [0, 0, 1, 0.5],
    src_radius: 400,
    src_color: [255, 255, 255],
    num_flare_circles_range: [6, 10],
    angle_range: [0, 1],
    p: 1,
  },
  {
    type: "RandomToneCurve",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RandomToneCurve",
    scale: 0.1,
    p: 1,
  },
  {
    type: "RingingOvershoot",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.RingingOvershoot",
    blur_limit: [7, 15],
    cutoff: [0.7853981633974483, 1.5707963267948966],
    p: 1,
  },
  {
    type: "Sharpen",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.Sharpen",
    alpha: [0.2, 0.5],
    lightness: [0.5, 1.0],
    p: 1,
  },
  {
    type: "Solarize",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.Solarize",
    threshold: 128,
    p: 1,
  },
  {
    type: "Spatter",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.Spatter",
    mean: [0.65, 0.65],
    std: [0.3, 0.3],
    gauss_sigma: [2, 2],
    cutout_threshold: [0.68, 0.68],
    intensity: [0.6, 0.6],
    mode: "rain",
    color: null,
    p: 1,
  },
  {
    type: "Superpixels",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.Superpixels",
    p_replace: [0, 0.1],
    n_segments: [100, 100],
    max_size: 128,
    interpolation: 1,
    p: 1,
  },
  {
    type: "ToFloat",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.ToFloat",
    max_value: null,
    p: 1,
  },
  {
    type: "ToGray",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.ToGray",
    num_output_channels: 3,
    method: "weighted_average",
    p: 1,
  },
  {
    type: "ToRGB",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.ToRGB",
    p: 1,
  },
  {
    type: "UnsharpMask",
    link: "https://albumentations.ai/docs/api_reference/full_reference/#albumentations.augmentations.transforms.UnsharpMask",
    blur_limit: [3, 7],
    sigma_limit: 0.0,
    alpha: [0.2, 0.5],
    threshold: 10,
    p: 1,
  },
];

export type TransformProps = {
  transformProperties: Transform[] | null;
  setTransformProperties: React.Dispatch<
    React.SetStateAction<Transform[] | null>
  >;
};

export type KeyProps = {
  selectedKeys: Set<string>;
  setSelectedKeys: React.Dispatch<React.SetStateAction<Set<string>>>;
};
