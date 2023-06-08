![alt text](/INFO/Logo.png)
# WildEye
Animal Detection and Classification using YOLO.

You can try the demo [here](https://shreehari-revankar.github.io/WildEye/).

![Demo](/INFO/demoImg.png)

This repository contains the implementation of an animal detection system using transfer learning on YOLO (You Only Look Once) which trained on the COCO (Common Objects in Context) dataset. The goal of this project is to develop an accurate animal detection model by leveraging the knowledge learned from a pre-trained YOLO model on a large-scale dataset.

## Description

Human activities have significantly altered large areas of the Earth's surface, resulting in the disruption of natural habitats and the behaviors of animal species. This has led to the disappearance of many wild species from the face of the earth, while others have been forced to migrate to new areas, causing the destruction of natural resources and impacting both the environment and human livelihoods.

In this report, we aim to explore the potential of machine learning (ML) algorithms for animal detection and analyze different approaches to assess their effectiveness. We will delve into the application of ML in detecting and classifying animals, focusing on its relevance and impact in wildlife conservation, agriculture, and urban planning.

Our animal detection project aims to develop a robust and accurate system that can automatically detect and classify various animal species in images or videos. By leveraging advanced computer vision techniques, machine learning algorithms, and large-scale datasets, we strive to create a reliable solution that can assist in wildlife conservation efforts, animal monitoring, and research initiatives.

The primary objective of this project is to utilize state-of-the-art object detection models, such as YOLO (You Only Look Once), to identify animals in their natural habitats or controlled environments. By employing deep learning techniques, we can train models to recognize specific animal categories and provide precise bounding box coordinates for their locations within the images.

## Dataset

Our dataset consists of a diverse collection of images showcasing various animals. The YOLO model used in this project has been pretrained on this dataset, enabling it to detect and classify different animal categories. The animals included in our dataset are:
  * Bird
  * Cat
  * Dog
  * Horse
  * Sheep
  * Cow
  * Elephant
  * Bear
  * Zebra
  * Giraffe

## Transfer Learning with YOLO

Transfer learning is a technique that enables leveraging the knowledge learned from a pre-trained model and applying it to a new task or dataset. In this project, we utilize transfer learning with a pre-trained YOLO model on the COCO dataset. By utilizing the pre-trained weights, we can accelerate the training process and enhance the performance of the animal detection model.

# Dependencies

* [TensorFlow.js](https://www.tensorflow.org/js)
* [Keras](https://keras.io/)
* [npm](https://www.npmjs.com/)
* [React.js](https://reactjs.org/)

# Installation

### Prerequisites

Install Node.js and npm using the link above. Follow instructions on their respective websites. Npm is included with Node.js

### Instructions

Clone the repository
```bash
git clone https://github.com/shreehari-revankar/WildEye.git
```

Install all the dependencies
```bash
cd WildEye
npm install
```

# Usage

Run the project
```bash
cd WildEye
npm start
```

Open a web browser and go to
```bash
http://localhost:3000
```

## License

This project is licensed under the MIT License. Feel free to modify and distribute it according to the terms of the license.

## Acknowledgements

We would like to acknowledge the creators of the COCO dataset and the YOLO algorithm for their valuable contributions to the field of object detection. Their work has been instrumental in making this project possible.

## Contact

For any inquiries or questions, please feel free to contact.

Enjoy exploring the world of animal detection using YOLO on the COCO dataset!

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License Link](https://github.com/shreehari-revankar/WildEye/blob/main/LICENSE)