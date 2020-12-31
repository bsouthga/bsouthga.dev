---
date: 08/05/2017
subtitle: Project for STAT6215 at GWU (part of my M.S. coursework) using classic statistical methods (Principal Component and Linear Discriminant Analysis) to classify images.
title: Image Classification using PCA and LDA
github: https://github.com/bsouthga/pca-image-classification
---


## Abstract

The pervasiveness of images on the internet make them a prime target for statistical analysis. However, the high dimensional nature of images makes them difficult to include in traditional statistical models. This paper explores the effectiveness of Principal Components Analysis (PCA) and Linear Descriminant Analysis (LDA) as tools for dimension reduction and classification of images into distinct populations. 

Facial images of individuals from [Centro Universitário FEI](https://portal.fei.edu.br/) are classified as male or female, and smiling or neutral facial expression. The results suggest that PCA and LDA can be very efficient and accurate tools for classifying images into different populations (reaching $\approx$ 95% accuracy). However, the effectiveness is shown to be sensitive to the variation and quality of the images.

## Background and Dataset

Given a set of images, one common analytical task is to classify them into distinct populations based on their contents. In facial recognition, for example, one needs to first classify an image as containing a face, and then try to match the face against known individuals.

In order to illustrate the range in effectiveness of PCA and LDA for such classification, I examined images from the FEI Face Database[^feifacedatabse]. The data consist of 200 (260x360 pixel) images of individuals, with 50 smiling men, 50 neutral men, 50 smiling women and 50 neutral women.

![Neutral (M)](/assets/images/17a.jpg)

The photographed individuals spanned multiple ethnicities and a wide range of ages. The images themselves were centered on the face, taken at a common distance, and taken with consistent light levels.

![Smile (F)](/assets/images/39b.jpg)

In order to prepare the data for analysis, the images were transformed into multivariate observations by concatenating each column of pixels into one vector, and averaging the red, green, and blue channels of the pixels to create a single gray scale value in the interval $[0,1]$. Additionally, the overall average image was subtracted from each observation to center the data.

The final design matrices $\bm{X}_{g} \in \mathbb{R}^{n\times p}$ (across each group $g$) are shown below, with variable $(p)$ and observation $(n)$ counts.

$$
  \begin{array}{lll}
  \hline
  n & p & g \\
  \hline
   50  & 93600 & \text{Male, Smiling} \\
   50  & 93600 & \text{Female, Smiling} \\
   50  & 93600 & \text{Male, Neutral} \\
   50  & 93600 & \text{Female, Neutral} \\
  \hline
  \end{array}
$$

## Analysis

In order to classify the different images into the various distinct populations, LDA can be applied. However, as the data have extreme dimensionality ($n << p$), feature reduction needs to be performed before LDA analysis is applicable or practical. Additionally, high correlation between adjacent pixels means multicollinearity issues are likely. To reduce $p$ to a reasonable number, and orthogonalize the resulting variables, I chose to use PCA. Fortunately, the common scale of the pixels avoids scaling sensitivity issues with PCA.

### Computational Considerations

While PCA is clearly useful in combatting inherent issues with the image data, one practical problem remains. In order to compute the principal components, one must perform an eigendecomposition of the covariance matrix. As the computational complexity of eigendecomposition can only be greater than that of matrix multiplication, without any simplifications we can expect an asymptotic runtime[^stothers2010complexity] proportional to $\approx O(p^{2.37})$ operations ($\approx 605$ billion for these data).

To get around this issue, we can use the fact that the number of non-zero eigenvalues (corresponding to useful principal components) is bounded by the rank of the matrix. Furthermore, the rank of a covariance matrix is bounded by the number of observations. Therefore, we have for centered $\bm{X}\in\mathbb{R}^{n\times p}$, $\bm{S} = \frac{1}{n-1}\bm{X}\tck\bm{X}$. For some eigenvector $\bm{v}_i$ of $\bm{X}\bm{X}\tck$,

$$
\bm{X}\bm{X}\tck\bm{v}_i = \lambda_i\bm{v}_i
$$

$$
\bm{X}\tck\bm{X}\bm{X}\tck\bm{v}_i = \lambda \bm{X}\tck\bm{v}_i
$$

If $\bm{v}_i$ is an eigenvector of $\bm{X}\bm{X}\tck$, then $\bm{X}\tck\bm{v}_i$ is an eigenvector of $\bm{X}\tck\bm{X}$. We now only need to find the eigenvectors for $\bm{X}\bm{X}\tck\in\mathbb{R}^{n\times n}$ (a much smaller matrix) to get all the eigenvectors (with non-zero eigenvalues) of $\bm{S}$.

### PCA - FEI Face Data

After computing the principal components for the FEI dataset (combining all populations), it is immediately apparent that much of the information present in the images can be effectively represented in far fewer variables than the count of pixels.

![Cumulative explained variance of principal components derived from facial images.](/assets/images/eig_cum_variance.png)

As shown above, over 95% of the variance of the FEI data is captured by fewer than 90 principal components. Furthermore, the first PC alone captures over 30% of the variance. Plotting the first and second components of the FEI data against one another, we can see that the genders are clearly divided.

![First three principal components with gender indicated](/assets/images/pc_pairs_gender.png)

As shown below the pricipal components do not present a clean visual division between the types of facial expression.

![First three principal components with facial expression indicated](/assets/images/pc_pairs_smile.png)

One particularly nice property of PCA for image analysis is that the eigenvectors can be shown as images themselves (often referred to as "eigenfaces")[^heseltine2003face]. This allows for effective and intuitive illustration of image features that effectively divide the different populations.

![Heatmap of first PC from facial images.](/assets/images/eig_1_heatmap.png)

Shown above, the components of the first eigenvector (from the facial image data) are mapped back to pixel positions and shown as a heatmap, where negative values are in blue and positive values in orange.


Comparing this heatmap to the computed average images for both genders, we can immediately see that the first PC captures differences in hair style and head shape between genders.

![Average of all "Female" classified images](/assets/images/avg_female.jpg)

Juxtaposing the clean separation of genders by the first PC to the less clear separation of facial expression suggests that the subtlety / simplicity of the population differences has a strong effect on the efficiency of the resulting PC's.

![Average of all "Male" classified images](/assets/images/avg_male.jpg)


### LDA - FEI Face Data

In order to classify the FEI face images as containing males or females, as well as whether or not the individual was smiling, LDA was performed on the computed principal components.

To test the LDA assumption of multivariate normality, I produced chi-squared plots of the principal components.

![\$\\mathcal{X}^2\$ Plot of \$PC_1-PC_{20}\$ from FEI Data](/assets/images/chi-squared-face.png)

Examining the plot above, we can see a slight deviation from the $45^{\circ}$ line suggesting the principal components might not be mutivariate normal. As the values of the principal components include negative numbers, A Box-Cox transformation could not be applied. A Yeo-Johnson power transformation[^yeo2000new] was tested, though it did not improve appearance of normality in chi-square plots or the Royston normality test.

However, the deviation is not intense and previous work[^i2006using] has shown that for image object recognition, LDA can achieve good performance even with possible non-normality. Therefore, I proceed with LDA as a classification tool in this analysis.

Below, the accuracy rate for separate leave-one-out cross-validation (LOOCV) trials are displayed, with each LOOCV trial including the first $k$ principal components, $k=\crl{1,\dots,195}$.

![LOOCV accuracy for LDA classification of gender, including the first \$k\$ PC's](/assets/images/loo_lda_gender.png)

As shown above, the model acheives high cross-validated accuracy with even just one principal component. This makes intuitive sense, given how well the data are linearly separated via the first principal component. Furthermore, accuracy rapidly decreases as the degrees of freedom fall with the inclusion of more principal components.

Next, examining the prediction accuracy for classifying facial expression as smiling or neutral, we see that it takes more principal components to reach similar levels of accuracy. As shown below, facial expressions are not as cleanly divided as gender in the first few PC's.

Overall, even with potential violation of the assumption of normality, LDA performs well at classifying the FEI images.

In addition to LDA analysis, QDA was performed (to relax the assumption of equal covariance matricies present in LDA). However, as shown below, it appears as if overall performance is roughly equal between the two models, perhaps due to the good linear separation of genders by the first PC.

![LOOCV accuracy for QDA classification of gender, including the first \$k\$ PC's](/assets/images/loo_qda_gender.png)

## Conclusion

After analyzing two different sets of image data, it is clear that PCA and LDA can be effective, accurate tools for classification of images.

The issues of high dimensionality and multicollinearity present in image data are effectively resolved through the use of principal components analysis. For images which have clear patterns separating populations, as was the case for hairstyle separating gender, principal components can be extremely efficient in identifying core object features. 

With regard to Linear Descriminant Analysis, although the assumption of normality is not strictly satisfied, the empirical performance is strong.

Further investigation of this topic might take several routes. To relax the requirement of normality (and potentially further increase performance), logistic regression and support vector machine models might be appropriate alternative classifiers.

Additionally, further exploration of the affect of image quality and attributes on performance is merited. It is possible that LDA and PCA are sensitive to greater differences among images with respect to rotation, skew, and lighting.


## References

[^feifacedatabse]: Centro Universitario da FEI, [FEI Face Database [Data file] (2012)](http://fei.edu.br/~cet/facedatabase.html)
[^stothers2010complexity]: Stothers, Andrew James. ["On the complexity of matrix multiplication." (2010)](https://era.ed.ac.uk/handle/1842/4734).
[^heseltine2003face]: Heseltine, Thomas, et al. ["Face recognition: A comparison of appearance-based approaches." Proc. VIIth Digital image computing: Techniques and applications. Vol. 1. 2003.](https://books.google.com/books?hl=en&lr=&id=oz-Sinxlj08C&oi=fnd&pg=PT91&dq=Face+recognition:+A+comparison+of+appearance-based+approaches&ots=y_rzICpXm_&sig=IpMyVHTGbzMet5JXRCpOAgomY6w#v=onepage&q=Face%20recognition%3A%20A%20comparison%20of%20appearance-based%20approaches&f=false)
[^yeo2000new]: Yeo, In‐Kwon, and Richard A. Johnson. ["A new family of power transformations to improve normality or symmetry." Biometrika 87.4 (2000): 954-959.](https://academic.oup.com/biomet/article-abstract/87/4/954/232908)
[^i2006using]: Li, Tao, Shenghuo Zhu, and Mitsunori Ogihara. ["Using discriminant analysis for multi-class classification: an experimental investigation." Knowledge and information systems 10.4 (2006): 453-472.](https://link.springer.com/article/10.1007/s10115-006-0013-y)
