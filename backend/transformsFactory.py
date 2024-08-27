import albumentations as A
import io
import base64
from PIL import Image
import numpy as np
import cv2
from errors import InputError

def imageToString(image):
    '''
    Convert numpy array to base64 encoded string
    '''
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    _, imagebytes = cv2.imencode('.jpg', image)
    return base64.b64encode(imagebytes)

def stringToImage(base64_string):
    '''
    Convert base64 encoded string to numpy array
    '''
    imgData = base64.b64decode(base64_string)
    return np.array(Image.open(io.BytesIO(imgData)))

def constructTransform(jsonTransform):
    image = stringToImage(jsonTransform["image"])
    p = jsonTransform["p"]

    match jsonTransform["type"]:
        case "Affine":
            scale = jsonTransform["scale"]
            translate_percent = jsonTransform["translate_percent"]
            translate_px = jsonTransform["translate_px"]
            rotate = jsonTransform["rotate"]
            shear = jsonTransform["shear"]
            interpolation = jsonTransform["interpolation"]
            mask_interpolation = jsonTransform["mask_interpolation"]
            cval = jsonTransform["cval"]
            cval_mask = jsonTransform["cval_mask"]
            mode = jsonTransform["mode"]
            fit_output = jsonTransform["fit_output"]
            keep_ratio = jsonTransform["keep_ratio"]
            rotate_method = jsonTransform["rotate_method"]
            tf = A.Affine(scale=scale, translate_percent=translate_percent, translate_px=translate_px, rotate=rotate, shear=shear, interpolation=interpolation, mask_interpolation=mask_interpolation, cval=cval, cval_mask=cval_mask, mode=mode, fit_output=fit_output, keep_ratio=keep_ratio, rotate_method=rotate_method, p=p)
        case "Blur":
            blur_limit = jsonTransform["blur_limit"]
            tf = A.Blur(blur_limit=blur_limit, p=p)
        case "CenterCrop":
            height, width = jsonTransform["height"], jsonTransform["width"]
            tf = A.CenterCrop(height=height, width=width, p=p)
        case "Resize":
            height, width = jsonTransform["height"], jsonTransform["width"]
            interpolation = jsonTransform["interpolation"]
            tf = A.Resize(height=height, width=width, interpolation=interpolation, p=p)
        case "Rotate":
            limit = jsonTransform["limit"]
            interpolation = jsonTransform["interpolation"]
            border_mode = jsonTransform["border_mode"]
            value = jsonTransform["value"]
            mask_value = jsonTransform["mask_value"]
            rotate_method = jsonTransform["rotate_method"]
            crop_border = jsonTransform["crop_border"]
            tf = A.Rotate(limit=limit, interpolation=interpolation, border_mode=border_mode, value=value, mask_value=mask_value, rotate_method=rotate_method, crop_border=crop_border, p=p)
        case "HorizontalFlip":
            tf = A.HorizontalFlip(p=p)

    try:
        image = tf(image=image)["image"]
        return imageToString(image)
    except Exception as e:
        raise InputError(description=e)
    