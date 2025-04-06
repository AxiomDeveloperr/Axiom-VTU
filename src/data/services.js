// import { delexImg, homeleyImg, webApp } from "../assets/images"

import {
  backend,
  devOps,
  frontend,
  graphic,
  productDesign,
} from "../assets/images";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive web interfaces.",
    body: "We create fast, user-friendly web applications with modern frameworks, ensuring a seamless user experience across devices.",
    image: frontend,
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Powering robust server-side applications.",
    body: "Our backend solutions optimize performance, scalability, and security to handle complex business logic and data processing.",
    image: backend,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing intuitive user experiences.",
    body: "We design engaging, functional user interfaces that prioritize ease of use and create visually appealing digital experiences.",
    image: productDesign,
  },
  {
    id: 4,
    title: "Graphics Design",
    description: "Creating compelling visual content.",
    body: "Our design team brings your brand to life through striking graphics that enhance marketing, communication, and identity.",
    image: graphic,
  },
  {
    id: 5,
    title: "Cloud/DevOps Engineering",
    description: "Optimizing infrastructure for scalability.",
    body: "We streamline deployment and automate workflows, leveraging cloud technologies and DevOps practices to improve system reliability.",
    image: devOps,
  },
];

export default services;
