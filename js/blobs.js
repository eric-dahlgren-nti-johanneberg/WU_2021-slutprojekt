"use strict";
import * as THREE from "https://unpkg.com/three@0.126.0/build/three.module.js";

class Plane {
  constructor(height, width, x, y) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;

    this.geometry = new THREE.PlaneGeometry(this.width, this.height);
    this.material = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      side: THREE.DoubleSide,
    });
  }

  get mesh() {
    return new THREE.Mesh(this.geometry, this.material);
  }

  animate() {}
}

var scene = new THREE.Scene();
const width = 10;
const height = 8;

var camera = new THREE.OrthographicCamera(
  width / -2,
  width / 2,
  height / 2,
  height / -2,
  1,
  1000
);

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const plane1 = new Plane(20, 20, 10, 10);
scene.add(plane1.mesh);

camera.position.z = 5;
