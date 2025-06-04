# EPIC V Hackathon – Challenge Stage 2

# Isotropic reconstruction of 3D microscopy images using deep generative models

---


## Background & Motivation

3D fluorescence microscopy techniques such as confocal or spinning disk often produce anisotropic images due to limitations in the microscope's point spread function (PSF). As a result, biological structures appear sharp in the lateral (xy) direction but blurry and elongated in the axial (z) direction. This anisotropy poses challenges for accurate image analysis, visualization, and downstream biological interpretation.
Several deep learning methods have been developed to address this issue:

  - CARE (Weigert et al., 2018): A supervised UNet-based model trained on paired lateral and axial views.
  - SelfNet (Ning et al., 2022): A CycleGAN + UNet framework that enables isotropic restoration using unpaired data.


This challenge invites you to develop a new generative deep learning method capable of restoring isotropic resolution in axial views (xz/yz), using only unpaired data. Use of diffusion-based models (e.g., Stable Diffusion) is highly encouraged.



---

##  Your Mission
Build a deep learning model to enhance axial (xz/yz) slices of 3D microscopy stacks to resemble the quality of lateral (xy) (unpaired training data).
Your method should:
Use deep generative approaches (GANs, diffusion models, transformers, etc.).
Take unpaired axial slices as input and generate lateral-quality outputs.
Aim to outperform the provided SelfNet baseline and approach the ground truth (GT).

<div align="center" style="background-color: white; padding: 15px; border-radius: 8px; display: inline-block; margin: 0 auto;">
  <img src="https://ciencialatitud0.github.io/EPIC_5/images/challenge_stage2.png" width="200">
</div>

---

## Dataset
You will receive a set of 3D image stacks (.tif) acquired with confocal fluorescence microscopy.
Step-by-step instructions to prepare the data:

  - Extract lateral (xy) planes: Use individual xy slices from the 3D stack as your target domain (representing high-quality, isotropic views).
  - Extract axial (xz or yz) planes: Use individual xz or yz slices as your source domain (representing distorted views).
  - Generate patches: For both source and target images, extract 2D patches (e.g., 128x128) for training using a sliding window or random sampling.

Example in Python:
```
import numpy as np
from patchify import patchify

# Assume volume is a 3D NumPy array: [z, y, x]
xy_plane = volume[50]        # One lateral slice
xz_plane = volume[:, 50, :]  # One axial slice

xy_patches = patchify(xy_plane, (128, 128), step=64)
xz_patches = patchify(xz_plane, (128, 128), step=64)

```

You are encouraged to extract multiple patches from different planes and apply data augmentation.

---

## General Pipeline
Your solution should follow this workflow:
1. Prepare the Data
  - Extract xy slices and axial xz/yz slices
  - Generate patches (e.g., 128x128) for both domains
2. Train a Model
  - Use only unpaired image patches from source (xz/yz) and target (xy)
  - Your model should learn to map distorted views to isotropic ones
3. Make Predictions
  - Apply your trained model to new axial slices (from the test set) to generate restored versions
4. Evaluate Performance
  - Compare your model’s predictions against the provided ground truth (GT)
  - Also compare your results with the SelfNet baseline
  - Use the provided metrics: SSIM, PSNR, MSE, and CoC


---

## What to Submit
Your submission must include:
1. Python Codebase
  - Data preprocessing (patch extraction)
  - Model definition (architecture)
  - Training pipeline
  - Inference scripts
2. Trained model weights
3. Executable scripts or Jupyter Notebooks to:
  - Prepare data
  - Train the model
  - Run inference on test data
4. Documentation
  -README file
  -Description of your model
  -Instructions to reproduce results
  -Environment details (requirements.txt)
  - All random seeds fixed for reproducibility


---

## Evaluation Criteria
Submissions will be scored as follows:

| **Criterion**                  | **Description**                                             | **Weight** |
|-------------------------------|-------------------------------------------------------------|------------|
| **Image Quality**             | SSIM, PSNR, MSE, CoC on withheld test set                  | 50%        |
| **Visual Quality**            | Qualitative inspection by domain experts                   | 10%        |
| **Code Quality & Reproducibility** | Modularity, fixed seeds, documentation                    | 15%        |
| **Innovation & Technical Rigor**  | Use of novel models, technical soundness                 | 15%        |
| **Usability**                 | Easy-to-run, clear scripts, helpful instructions            | 10%        |


A baseline (SelfNet) and GT results will be provided. Your model should ideally outperform SelfNet and approach GT quality.

---

## Prizes & Opportunities
  - The top team will be invited to co-author a joint publication comparing leading isotropic restoration methods.
  - Top performers will be invited to the Final Hackathon at EPIC V.
  - Final winners receive monetary prizes in EPIC V

---

##Data Use & Embargo Policy
By participating, you agree to:
  - Embargo: Do not publish, share, or distribute results, code, or models from the challenge until the joint publication is released (maximum 1 year).
  - Confidentiality: Do not share the dataset outside the Hackathon.
  - Open Access: The dataset will be released after publication.
A short data use agreement must be signed upon registration.

--- 
## References
  - Weigert, M. et al. (2018). Content-aware image restoration. Nature Methods. https://doi.org/10.1038/s41592-018-0216-7
  - Ning, K. et al. (2023). Deep self-learning enables high-fidelity isotropic restoration. Light: Science & Applications. https://doi.org/10.1038/s41377-023-01230-2
