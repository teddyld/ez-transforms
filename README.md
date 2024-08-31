# ez-transforms

The official <a href="https://huggingface.co/spaces/qubvel-hf/albumentations-demo" target="_blank">albumentations-demo</a> doesn't allow you to apply multiple transforms on a single image and output multiple instances of the resulting data augmentation pipeline.

So I made my own webapp <a href="https://ez-transforms.vercel.app/" target="_blank">ez-transforms</a> (also I think it looks and feels way better)

## Usage

Select a transform from the dropdown menu and upload an image (or use one of the images from the COCO2014 dataset). Modify the transformation parameters or add/remove additional transforms. Generate the transformed image(s) and download the results.

## Support

The version of albumentations used is 1.4.6. I might update this to the latest version in the future, but its the version I use the most right now.
