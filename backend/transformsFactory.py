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

    try:
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
            case "AdvancedBlur":
                blur_limit = jsonTransform["blur_limit"]
                sigma_x_limit = jsonTransform["sigma_x_limit"]
                sigma_y_limit = jsonTransform["sigma_y_limit"]
                rotate_limit = jsonTransform["rotate_limit"]
                beta_limit = jsonTransform["beta_limit"]
                noise_limit = jsonTransform["noise_limit"]
                tf = A.AdvancedBlur(blur_limit=blur_limit, sigma_x_limit=sigma_x_limit, sigma_y_limit=sigma_y_limit, rotate_limit=rotate_limit, beta_limit=beta_limit, noise_limit=noise_limit, p=p)
            case "Blur":
                blur_limit = jsonTransform["blur_limit"]
                tf = A.Blur(blur_limit=blur_limit, p=p)
            case "Defocus":
                radius = jsonTransform["radius"]
                alias_blur = jsonTransform["alias_blur"]
                tf = A.Defocus(radius=radius, alias_blur=alias_blur, p=p)
            case "GaussianBlur":
                blur_limit = jsonTransform["blur_limit"]
                sigma_limit = jsonTransform["sigma_limit"]
                tf = A.GaussianBlur(blur_limit=blur_limit, sigma_limit=sigma_limit, p=p)
            case "GlassBlur":
                sigma = jsonTransform["sigma"]
                max_delta = jsonTransform["max_delta"]
                iterations = jsonTransform["iterations"]
                mode = jsonTransform["mode"]
                tf = A.GlassBlur(sigma=sigma, max_delta=max_delta, iterations=iterations, mode=mode, p=p)
            case "MedianBlur":
                blur_limit = jsonTransform["blur_limit"]
                tf = A.MedianBlur(blur_limit=blur_limit, p=p)
            case "MotionBlur":
                blur_limit = jsonTransform["blur_limit"]
                allow_shifted = jsonTransform["allow_shifted"]
                tf = A.MotionBlur(blur_limit=blur_limit, allow_shifted=allow_shifted, p=p)
            case "ZoomBlur":
                max_factor = jsonTransform["max_factor"]
                step_factor = jsonTransform["step_factor"]
                tf = A.ZoomBlur(max_factor=max_factor, step_factor=step_factor, p=p)
            case "Crop":
                x_min = jsonTransform["x_min"]
                y_min = jsonTransform["y_min"]
                x_max = jsonTransform["x_max"]
                y_max = jsonTransform["y_max"]
                tf = A.Crop(x_min=x_min, y_min=y_min, x_max=x_max, y_max=y_max, p=p)
            case "CropAndPad":
                px = jsonTransform["px"],
                percent = jsonTransform["percent"],
                pad_mode = jsonTransform["pad_mode"],
                pad_cval = jsonTransform["pad_cval"],
                pad_cval_mask = jsonTransform["pad_cval_mask"],
                keep_size = jsonTransform["keep_size"],
                sample_independently = jsonTransform["sample_independently"],
                interpolation = jsonTransform["interpolation"],
                tf = A.CropAndPad(px=px, percent=percent, pad_mode=pad_mode, pad_cval=pad_cval, pad_cval_mask=pad_cval_mask, keep_size=keep_size, sample_independently=sample_independently, interpolation=interpolation, p=p)
            case "RandomCrop":
                height = jsonTransform["height"]
                width = jsonTransform["width"]
                tf = A.RandomCrop(height=height, width=width, p=p)
            case "RandomCropFromBorders":
                crop_left = jsonTransform["crop_left"]
                crop_right = jsonTransform["crop_right"]
                crop_top = jsonTransform["crop_top"]
                crop_bottom = jsonTransform["crop_bottom"]
                tf = A.RandomCropFromBorders(crop_left=crop_left, crop_right=crop_right, crop_top=crop_top, crop_bottom=crop_bottom, p=p)
            case "RandomResizedCrop":
                size = jsonTransform["size"]
                scale = jsonTransform["scale"]
                ratio = jsonTransform["ratio"]
                interpolation = jsonTransform["interpolation"]
                tf = A.RandomResizedCrop(size=size, scale=scale, ratio=ratio, interpolation=interpolation, p=p)
            case "RandomSizedCrop":
                min_max_height = jsonTransform["min_max_height"]
                height = jsonTransform["height"]
                width = jsonTransform["width"]
                w2h_ratio = jsonTransform["w2h_ratio"]
                interpolation = jsonTransform["interpolation"]
                tf = A.RandomSizedCrop(min_max_height=min_max_height, height=height, width=width, w2h_ratio=w2h_ratio, interpolation=interpolation, p=p)
            case "CLAHE":
                clip_limit = jsonTransform["clip_limit"]
                tile_grid_size = jsonTransform["tile_grid_size"]
                tf = A.CLAHE(clip_limit=clip_limit, tile_grid_size=tile_grid_size, p=p)
            case "ChannelDropout":
                channel_drop_range = jsonTransform["channel_drop_range"]
                fill_value = jsonTransform["fill_value"]
                tf = A.ChannelDropout(channel_drop_range=channel_drop_range, fill_value=fill_value, p=p)
            case "CoarseDropout":
                num_holes_range = jsonTransform["num_holes_range"]
                hole_height_range = jsonTransform["hole_height_range"]
                hole_width_range = jsonTransform["hole_width_range"]
                fill_value = jsonTransform["fill_value"]
                tf = A.CoarseDropout(num_holes_range=num_holes_range, hole_height_range=hole_height_range, hole_width_range=hole_width_range, fill_value=fill_value, p=p)
            case "GridDropout":
                ratio = jsonTransform["ratio"]
                unit_size_min = jsonTransform["unit_size_min"]
                unit_size_max = jsonTransform["unit_size_max"]
                holes_number_x, holes_number_y = jsonTransform["holes_number_x"], jsonTransform["holes_number_y"]
                shift_x, shift_y = jsonTransform["shift_x"], jsonTransform["shift_y"]
                random_offset = jsonTransform["random_offset"]
                fill_value = jsonTransform["fill_value"]
                tf = A.GridDropout(ratio=ratio, unit_size_min=unit_size_min, unit_size_max=unit_size_max, holes_number_x=holes_number_x, holes_number_y=holes_number_y, shift_x=shift_x, shift_y=shift_y, random_offset=random_offset, fill_value=fill_value, p=p)
            case "XYMasking":
                num_masks_x, num_masks_y = jsonTransform["num_masks_x"], jsonTransform["num_masks_y"]
                mask_x_length, mask_y_length = jsonTransform["mask_x_length"], jsonTransform["mask_y_length"]
                fill_value = jsonTransform["fill_value"]
                tf = A.XYMasking(num_masks_x=num_masks_x, num_masks_y=num_masks_y, mask_x_length=mask_x_length, mask_y_length=mask_y_length, fill_value=fill_value, p=p)
            case "LongestMaxSize":
                max_size = jsonTransform["max_size"]
                interpolation = jsonTransform["interpolation"]
                tf = A.LongestMaxSize(max_size=max_size, interpolation=interpolation, p=p)
            case "RandomScale":
                scale_limit = jsonTransform["scale_limit"]
                interpolation = jsonTransform["interpolation"]
                tf = A.RandomScale(scale_limit=scale_limit, interpolation=interpolation, p=p)
            case "CenterCrop":
                height, width = jsonTransform["height"], jsonTransform["width"]
                tf = A.CenterCrop(height=height, width=width, p=p)
            case "Resize":
                height, width = jsonTransform["height"], jsonTransform["width"]
                interpolation = jsonTransform["interpolation"]
                tf = A.Resize(height=height, width=width, interpolation=interpolation, p=p)
            case "SmallestMaxSize":
                max_size = jsonTransform["max_size"]
                interpolation = jsonTransform["interpolation"]
                tf = A.SmallestMaxSize(max_size=max_size, interpolation=interpolation, p=p)
            case "RandomRotate90":
                tf = A.RandomRotate90(p=p)
            case "Rotate":
                limit = jsonTransform["limit"]
                interpolation = jsonTransform["interpolation"]
                border_mode = jsonTransform["border_mode"]
                value = jsonTransform["value"]
                mask_value = jsonTransform["mask_value"]
                rotate_method = jsonTransform["rotate_method"]
                crop_border = jsonTransform["crop_border"]
                tf = A.Rotate(limit=limit, interpolation=interpolation, border_mode=border_mode, value=value, mask_value=mask_value, rotate_method=rotate_method, crop_border=crop_border, p=p)
            case "SafeRotate":
                limit = jsonTransform["limit"]
                interpolation = jsonTransform["interpolation"]
                border_mode = jsonTransform["border_mode"]
                value = jsonTransform["value"]
                rotate_method = jsonTransform["rotate_method"]
                tf = A.SafeRotate(limit=limit, interpolation=interpolation, border_mode=border_mode, value=value, rotate_method=rotate_method, p=p)
            case "D4":
                tf = A.D4(p=p)
            case "ElasticTransform":
                alpha = jsonTransform["alpha"]
                sigma = jsonTransform["sigma"]
                alpha_affine = jsonTransform["alpha_affine"]
                interpolation = jsonTransform["interpolation"]
                border_mode = jsonTransform["border_mode"]
                value = jsonTransform["value"]
                approximate = jsonTransform["approximate"]
                same_dxdy = jsonTransform["same_dxdy"]
                tf = A.ElasticTransform(alpha=alpha, sigma=sigma, alpha_affine=alpha_affine, interpolation=interpolation, border_mode=border_mode, value=value, approximate=approximate, same_dxdy=same_dxdy, p=p)
            case "GridDistortion":
                num_steps = jsonTransform["num_steps"]
                distort_limit = jsonTransform["distort_limit"]
                interpolation = jsonTransform["interpolation"]
                border_mode = jsonTransform["border_mode"]
                value = jsonTransform["value"]
                normalized = jsonTransform["normalized"]
                tf = A.GridDistortion(num_steps=num_steps, distort_limit=distort_limit, interpolation=interpolation, border_mode=border_mode, value=value, normalized=normalized, p=p)
            case "OpticalDistortion":
                distort_limit = jsonTransform["distort_limit"]
                shift_limit = jsonTransform["shift_limit"]
                interpolation = jsonTransform["interpolation"]
                border_mode = jsonTransform["border_mode"]
                value = jsonTransform["value"]
                tf = A.OpticalDistortion(distort_limit=distort_limit, shift_limit=shift_limit, interpolation=interpolation, border_mode=border_mode, value=value, p=p)
            case "PadIfNeeded":
                min_height, min_width = jsonTransform["min_height"], jsonTransform["min_width"]
                pad_height_divisor, pad_width_divisor = jsonTransform["pad_height_divisor"], jsonTransform["pad_width_divisor"]
                position = jsonTransform["position"]
                border_mode = jsonTransform["border_mode"]
                value = jsonTransform["value"]
                tf = A.PadIfNeeded(min_height=min_height, min_width=min_width, pad_height_divisor=pad_height_divisor, pad_width_divisor=pad_width_divisor, position=position, border_mode=border_mode, value=value, p=p)
            case "Perspective":
                scale = jsonTransform["scale"]
                keep_size = jsonTransform["keep_size"]
                pad_mode = jsonTransform["pad_mode"]
                pad_val = jsonTransform["pad_val"]
                fit_output = jsonTransform["fit_output"]
                tf = A.Perspective(scale=scale, keep_size=keep_size, pad_mode=pad_mode, pad_val=pad_val, fit_output=fit_output, p=p)
            case "PiecewiseAffine":
                scale = jsonTransform["scale"]
                nb_rows, nb_cols = jsonTransform["nb_rows"], jsonTransform["nb_cols"]
                interpolation = jsonTransform["interpolation"]
                cval = jsonTransform["cval"]
                mode = jsonTransform["mode"]
                absolute_scale = jsonTransform["absolute_scale"]
                tf = A.PiecewiseAffine(scale=scale, nb_rows=nb_rows, nb_cols=nb_cols, interpolation=interpolation, cval=cval, mode=mode, absolute_scale=absolute_scale, p=p)
            case "ShiftScaleRotate":
                shift_limit = jsonTransform["shift_limit"]
                scale_limit = jsonTransform["scale_limit"]
                rotate_limit = jsonTransform["rotate_limit"]
                interpolation = jsonTransform["interpolation"]
                border_mode = jsonTransform["border_mode"]
                value = jsonTransform["value"]
                shift_limit_x, shift_limit_y = jsonTransform["shift_limit_x"], jsonTransform["shift_limit_y"]
                tf = A.ShiftScaleRotate(shift_limit=shift_limit, scale_limit=scale_limit, rotate_limit=rotate_limit, interpolation=interpolation, border_mode=border_mode, value=value, shift_limit_x=shift_limit_x, shift_limit_y=shift_limit_y, p=p)
            case "Transpose":
                tf = A.Transpose(p=p)
            case "VerticalFlip":
                tf = A.VerticalFlip(p=p)
            case "HorizontalFlip":
                tf = A.HorizontalFlip(p=p)
            case "ChannelShuffle":
                tf = A.ChannelShuffle(p=p)
            case "ColorJitter":
                brightness = jsonTransform["brightness"]
                contrast = jsonTransform["contrast"]
                saturation = jsonTransform["saturation"]
                hue = jsonTransform["hue"]
                tf = A.ColorJitter(brightness=brightness, contrast=contrast, saturation=saturation, hue=hue, p=p)
            case "Downscale":
                scale_range = jsonTransform["scale_range"]
                interpolation_pair = jsonTransform["interpolation_pair"]
                tf = A.Downscale(scale_range=scale_range, interpolation_pair=interpolation_pair, p=p)
            case "Emboss":
                alpha = jsonTransform["alpha"]
                strength = jsonTransform["strength"]
                tf = A.Emboss(alpha=alpha, strength=strength, p=p)
            case "Equalize":
                mode = jsonTransform["mode"]
                by_channels = jsonTransform["by_channels"]
                tf = A.Equalize(mode=mode, by_channels=by_channels, p=p)
            case "FancyPCA":
                alpha = jsonTransform["alpha"]
                tf = A.FancyPCA(alpha=alpha, p=p)
            case "FromFloat":
                max_value = jsonTransform["max_value"]
                dtype = jsonTransform["dtype"]
                tf = A.FromFloat(max_value=max_value, dtype=dtype, p=p)
            case "GaussNoise":
                var_limit = jsonTransform["var_limit"]
                mean = jsonTransform["mean"]
                per_channel = jsonTransform["per_channel"]
                noise_scale_factor = jsonTransform["noise_scale_factor"]
                tf = A.GaussNoise(var_limit=var_limit, mean=mean, per_channel=per_channel, noise_scale_factor=noise_scale_factor, p=p)
            case "HueSaturationValue":
                hue_shift_limit = jsonTransform["hue_shift_limit"]
                sat_shift_limit = jsonTransform["sat_shift_limit"]
                val_shift_limit = jsonTransform["val_shift_limit"]
                tf = A.HueSaturationValue(hue_shift_limit=hue_shift_limit, sat_shift_limit=sat_shift_limit, val_shift_limit=val_shift_limit, p=p)
            case "ISONoise":
                color_shift = jsonTransform["color_shift"]
                intensity = jsonTransform["intensity"]
                tf = A.ISONoise(color_shift=color_shift, intensity=intensity, p=p)
            case "ImageCompression":
                quality_lower = jsonTransform["quality_lower"]
                quality_upper = jsonTransform["quality_upper"]
                compression_type = jsonTransform["compression_type"]
                tf = A.ImageCompression(quality_lower=quality_lower, quality_upper=quality_upper, compression_type=compression_type, p=p)
            case "InvertImg":
                tf = A.InvertImg(p=p)
            case "MultiplicativeNoise":
                multiplier = jsonTransform["multiplier"]
                per_channel = jsonTransform["per_channel"]
                elementwise = jsonTransform["elementwise"]
                tf = A.MultiplicativeNoise(multiplier=multiplier, per_channel=per_channel, elementwise=elementwise, p=p)
            case "Normalize":
                mean = jsonTransform["mean"]
                std = jsonTransform["std"]
                max_pixel_value = jsonTransform["max_pixel_value"]
                normalization = jsonTransform["normalization"]
                tf = A.Normalize(mean=mean, std=std, max_pixel_value=max_pixel_value, normalization=normalization, p=p)
            case "PixelDropout":
                dropout_prob = jsonTransform["dropout_prob"]
                per_channel = jsonTransform["per_channel"]
                drop_value = jsonTransform["drop_value"]
                tf = A.PixelDropout(dropout_prob=dropout_prob, per_channel=per_channel, drop_value=drop_value, p=p)
            case "Posterize":
                num_bits = jsonTransform["num_bits"]
                tf = A.Posterize(num_bits=num_bits, p=p)
            case "RGBShift":
                r_shift_limit = jsonTransform["r_shift_limit"]
                g_shift_limit = jsonTransform["g_shift_limit"]
                b_shift_limit = jsonTransform["b_shift_limit"]
                tf = A.RGBShift(r_shift_limit=r_shift_limit, g_shift_limit=g_shift_limit, b_shift_limit=b_shift_limit, p=p)
            case "RandomBrightnessContrast":
                brightness_limit = jsonTransform["brightness_limit"]
                contrast_limit = jsonTransform["contrast_limit"]
                brightness_by_max = jsonTransform["brightness_by_max"]
                tf = A.RandomBrightnessContrast(brightness_limit=brightness_limit, contrast_limit=contrast_limit, brightness_by_max=brightness_by_max, p=p)
            case "RandomFog":
                fog_coef_range = jsonTransform["fog_coef_range"]
                alpha_coef = jsonTransform["alpha_coef"]
                tf = A.RandomFog(fog_coef_range=fog_coef_range, alpha_coef=alpha_coef, p=p)
            case "RandomGamma":
                gamma_limit = jsonTransform["gamma_limit"]
                tf = A.RandomGamma(gamma_limit=gamma_limit, p=p)
            case "RandomGravel":
                gravel_roi = jsonTransform["gravel_roi"]
                number_of_patches = jsonTransform["number_of_patches"]
                tf = A.RandomGravel(gravel_roi=gravel_roi, number_of_patches=number_of_patches, p=p)
            case "RandomGridShuffle":
                grid = jsonTransform["grid"]
                tf = A.RandomGridShuffle(grid=grid, p=p)
            case "RandomRain":
                slant_range = jsonTransform["slant_range"]
                drop_length = jsonTransform["drop_length"]
                drop_width = jsonTransform["drop_width"]
                drop_color = jsonTransform["drop_color"]
                blur_value = jsonTransform["blur_value"]
                brightness_coefficient = jsonTransform["brightness_coefficient"]
                rain_type = jsonTransform["rain_type"]
                tf = A.RandomRain(slant_range=slant_range, drop_length=drop_length, drop_width=drop_width, drop_color=drop_color, blur_value=blur_value, brightness_coefficient=brightness_coefficient, rain_type=rain_type, p=p)
            case "RandomShadow":
                shadow_roi = jsonTransform["shadow_roi"]
                num_shadows_limits = jsonTransform["num_shadows_limits"]
                shadow_dimension = jsonTransform["shadow_dimension"]
                shadow_intensity_range = jsonTransform["shadow_intensity_range"]
                tf = A.RandomShadow(shadow_roi=shadow_roi, num_shadows_limits=num_shadows_limits, shadow_dimension=shadow_dimension, shadow_intensity_range=shadow_intensity_range, p=p)
            case "RandomSnow":
                snow_point_range = jsonTransform["snow_point_range"]
                brightness_coeff = jsonTransform["brightness_coeff"]
                tf = A.RandomSnow(snow_point_range=snow_point_range, brightness_coeff=brightness_coeff, p=p)
            case "RandomSunFlare":
                flare_roi = jsonTransform["flare_roi"]
                src_radius = jsonTransform["src_radius"]
                src_color = jsonTransform["src_color"]
                num_flare_circles_range = jsonTransform["num_flare_circles_range"]
                angle_range = jsonTransform["angle_range"]
                tf = A.RandomSunFlare(flare_roi=flare_roi, src_radius=src_radius, src_color=src_color, num_flare_circles_range=num_flare_circles_range, angle_range=angle_range, p=p)
            case "RandomToneCurve":
                scale = jsonTransform["scale"]
                tf = A.RandomToneCurve(scale=scale, p=p)
            case "RingingOvershoot":
                blur_limit = jsonTransform["blur_limit"]
                cutoff = jsonTransform["cutoff"]
                tf = A.RingingOvershoot(blur_limit=blur_limit, cutoff=cutoff, p=p)
            case "Sharpen":
                alpha = jsonTransform["alpha"]
                lightness = jsonTransform["lightness"]
                tf = A.Sharpen(alpha=alpha, lightness=lightness, p=p)
            case "Solarize":
                threshold = jsonTransform["threshold"]
                tf = A.Solarize(threshold=threshold, p=p)
            case "Spatter": 
                mean, std = jsonTransform["mean"], jsonTransform["std"]
                gauss_sigma = jsonTransform["gauss_sigma"]
                cutout_threshold = jsonTransform["cutout_threshold"]
                intensity = jsonTransform["intensity"]
                mode = jsonTransform["mode"]
                color = jsonTransform["color"]
                tf = A.Spatter(mean=mean, std=std, gauss_sigma=gauss_sigma, cutout_threshold=cutout_threshold, intensity=intensity, mode=mode, color=color, p=p)
            case "Superpixels":
                p_replace = jsonTransform["p_replace"]
                n_segments = jsonTransform["n_segments"]
                max_size = jsonTransform["max_size"]
                interpolation = jsonTransform["interpolation"]
                tf = A.Superpixels(p_replace=p_replace, n_segments=n_segments, max_size=max_size, interpolation=interpolation, p=p)
            case "ToFloat":
                max_value = jsonTransform["max_value"]
                tf = A.ToFloat(max_value=max_value, p=p)
            case "ToGray":
                num_output_channels = jsonTransform["num_output_channels"]
                method = jsonTransform["method"]
                tf = A.ToGray(num_output_channels=num_output_channels, method=method, p=p)
            case "ToRGB":
                tf = A.ToRGB(p=p)
            case "UnsharpMask":
                blur_limit = jsonTransform["blur_limit"]
                sigma_limit = jsonTransform["sigma_limit"]
                alpha = jsonTransform["alpha"]
                threshold = jsonTransform["threshold"]
                tf = A.UnsharpMask(blur_limit=blur_limit, sigma_limit=sigma_limit, alpha=alpha, threshold=threshold, p=p)
    except Exception as e:
        transformType = jsonTransform["type"]
        raise InputError(description=f"Could not construct transform {transformType}, Try checking transform parameter types.")

    try:
        image = tf(image=image)["image"]
        return imageToString(image)
    except Exception as e:
        raise InputError(description=e)
    