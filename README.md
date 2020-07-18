# Dockerlive User Study Replication Package

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.3951166.svg)](https://doi.org/10.5281/zenodo.3951166)

This repository contains all the artifacts used in the Dockerlive user study.

## Motivation

The main motivation of this user study is to understand if the presence of live dynamic feedback in the development environment positively influences the efficiency of a developer working in a Dockerfile.

## Content List

- `/Instructions`
    - Contains the documents with rules for the user study, a list of all the features available in each environment and the instructions for each task.
- `/Jupyter Notebook`
    - Contains the jupyter notebook used to analyse the data collected in the study.
- `/Questionnaire`
    - Contains the questionnaire answered by the participants.
- `/Responses`
    - Contains all the data collected in the user experiment in the CSV format.
- `/Tasks`
    - Contains the code provided to the participants in each of the tasks. 
    - `/Tasks/DF2_base` contains the code used to create the base image for the `DF2` task.

## Procedure

Participants should be split into two groups: Experimental Group and Control Group. Participants in the experimental group should have access to Visual Studio Code with the [Dockerlive v1.0.17](https://marketplace.visualstudio.com/items?itemName=david-reis.dockerlive) extension and the [Docker v1.2.1](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) extension, while participants in the control group should have access to Visual Studio Code have access to just the Docker extension. Participants should be told to read and follow the instructions located inside the `\Instructions` folder in this repository.

## Main Findings

A run of this user study was performed with 20 (10 ctrl, 10 exp) students and very recent graduates from a Master's degree in Informatics and Computer Engineering. These were the main findings from this run:

- Participants with a live development environment were significantly more efficient at solving the proposed tasks than participants without a live development environment.
- Participants with a live development environment had a more continuous development flow since they did not switch contexts as often as participants without a live development environment.
- Participants with a live development environment, in most cases, did not use a terminal at all and spent less time searching documentation and help in a web browser.
- The live features available to participants with a live development environment were generally highly regarded and perceived as useful and helpful.
- Participants with a live development environment did not feel overwhelmed by the increased live feedback available to them.
- Participants with a live development environment perceived the features available to them as helpful in most Dockerfile development activities, particularly in the ones related to the debugging process of Dockerfiles.
