export type Transform = {
  type: string;
  link: string;
  blur_limit?: number;
  border_mode?: 0 | 1 | 2 | 3 | 4;
  height?: number;
  width?: number;
  interpolation?: 0 | 1 | 2 | 3 | 4;
  mask_interpolation?: 0 | 1 | 2 | 3 | 4;
  mask_value?: number | number[] | null;
  scale?: number | [number, number] | null;
  translate_percent?: number | [number, number] | null;
  translate_px?: number | [number, number] | null;
  rotate?: number | [number, number] | null;
  shear?: number | [number, number] | null;
  cval?: number;
  cval_mask?: number;
  crop_border?: boolean;
  mode?: 0 | 1 | 2 | 3 | 4;
  fit_output?: boolean;
  keep_ratio?: boolean;
  rotate_method?: "largest_box" | "ellipse";
  limit?: number | number[];
  value?: number | number[] | null;
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
    mask_value: null,
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
