---
title: 'Kubernetes commands for beginners'
date: '2022-04-10'
tag: 'TIL'
---

Kubernetes is a tool for organising and automating software deployment with multiple containers. A container, such as those created by Docker, is an isolated instance of memory space that can be used to run applications. It is possible to allocate a subset of the computers resources to the container and to bundle in software, libraries and configuration files. These properties make it easy to create portable applications that can run wherever docker is installed without interfering with any of the other software on the platform (provided the underlying OS is the same). The portability of containers make them ideal for cloud based software deployment as they can be built and tested independently of the eventual host (for example in the continuous integration pipeline).

Generally, deployed software applications tend to be composed of several interconnected services, all of which have their own container. Managing the interactions between containers and scaling their capabilities when under stress is the job of container orchestration software like Kubernetes.

Kubernetes is highly configurable and provides many tools and functions for creating customisable workflows. This level of flexibility means that Kubernetes can be applied to most deployment requirements but has a fairly steep learning curve. This post details some useful commands getting started and exploring a deployment.

## Pre-requisites

The main way to interact with a Kubernetes cluster is the `kubectl` command line tool. This can be installed on Debian based Linux distributions with the native package manager.

First install the required packages

```bash
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl
```

Then install the key used to sign the Kubernetes package and add the Kubernetes package repository

```bash
sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
```

Finally, install `kubectl`

```bash
sudo apt-get update
sudo apt-get install -y kubectl
```

Other installation instructions can be found in the `kubectl` [documentation](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/).

## Configuring kubectl

Once the command line tool is installed, it needs to be set up so that it knows which cluster to talk to. This is done by configuring the context.

```bash
kubectl config set-context < cluster name >
kubectl config use-context < cluster name >
```

The cluster is then set to tell `kubectl` which server to talk to.

```bash
kubectl config set-cluster < cluster name > --server=< server name >
```

Then add the credentials required to securely communicate with the cluster.

```bash
kubectl config set clusters.< cluster name >.certificate-authority-data < base64 encoded certificate authority data >
kubectl config set-credentials < cluster name > < base64 encoded credentials >
```

Finally, set the default cluster and user of the context.

```bash
kubectl config set-context < cluster name > --cluster=< cluster name >
kubectl config set-context < cluster name > --user=< cluster name >
```

## General cluster commands

Kubernetes clusters are split into several components. One or more containers are put in pods. Pods specify the storage and network resources that can be used by the containers and the configuration required to run the contrainers. Pods run on nodes which can be physical or virtual machines containing the services required to run them.

The details of a cluster can be viewed with

```bash
kubectl cluster-info
```

The nodes present in the cluster can be viewed with

```bash
kubectl get nodes
```

Groups of resources in a cluster are isolated from each other using namespaces, most `kubectl` commands will only display information for the current default namespace unless explicitly told not to with flags like `--all-namespaces` or `--namespace=< namespace name >`.
The namespaces in the current cluster can be viewed with

```bash
kubectl get namespace
```

## Pods

All of the pods in the current cluster can be viewed with

```bash
kubectl get pods --all-namespaces
```

The containers and images inside the pods can be shown with

```bash
kubectl describe pods --all-namespaces
```

The details of a specific pod can be viewed with

```bash
kubectl describe pod < pod name > --namespace=< namespace name >
```

Often some or all of the configuration of an application running in a container is done via environment variables, the environment variables for a pod (including secrets) can be viewed by executing the `env` command directly in the pod with

```bash
kubectl exec < pod name > -- env
```

In a similar fashion, you can launch a bash session in a pod's container.

```bash
kubectl exec -ti < pod name > bash
```

Pods can be organised with labels, for example, to label a pod and then query pods with a given label you can do

```bash
kubectl label pods < pod name > < label >
kubectl get pods -l < label >
```

## Services

Applications running in a set of Pods can be exposed to the outside world as a service. Pods can be created and destroyed to make efficient use of resources but services provide a consistent way to access the underlying application.

The services running in the cluser can be listed with

```bash
kubectl get services --all-namespaces
```

Like pods, more information about a specific service can be shown by describing them

```bash
kubectl describe services/< service name > --namespace=< namespace name >
```

## Deployments

One of the most useful features of Kubernetes is deployment management which allows you to update a container without downtime. To do this, Kubernetes launches the new container alongside the previous one, while the new container is deploying the traffic will be routed to the previous one. Once the new container is up and running the traffic will be switched over and the previous container will be deleted.

A new deployment can be created with

```bash
kubectl create deployment < name > --image=< container image >
```

For images hosted on docker hub, the full address isn't required, only the image name.

The existing deployments can be listed and further described with

```bash
kubectl get deployments --all-namespaces
kubectl describe deployments/< deployment name > --namespace=< namespace name >
```

The deployment and switching over of a new container is referred to as a rollout, the status of a deployment rollout can be shown with

```bash
kubectl rollout status deployment/< deployment name > --namespace=< namespace name >
```

The rollout history of a rollout can be shown with

```bash
kubectl rollout history deployment/< deployment name > --namespace=< namespace name >
```

If something has gone wrong with the deployment, the current rollout can be undone with

```bash
kubectl rollout undo deployment/< deployment name > --namespace=< namespace name >
```

You can add `--to-revision=< revision no >` to go to a specific revision.

Deployments are usually configured with a yaml configuration file. The deployment can be modified by editing the deployment configuration file and then doing 

```bash
kubectl apply -f < name >.yaml
```

The image used in a deployment can be updated with 

```bash
kubectl set image deployments/< deployment name > < image name >
```

The logs of a deployment can be viewed with

```bash
kubectl logs deployment/< deployment name > --namespace=< namespace name >
```
