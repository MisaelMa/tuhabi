import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
} from "../../components";
export const steps = [
  {
    path: "datos",
    label: "Datos",
    description: `datos.`,
    component: Step1,
  },
  {
    path: "correo",
    label: "Correo",
    description: "Correo",
    component: Step2,
  },
  {
    path: "direccion",
    label: "Direccion",
    description: `direccion`,
    component: Step3,
  },
  {
    path: "datos-apartamento",
    label: "Datos Apartamento",
    description: `datos-apartamento`,
    component: Step4,
  },
  {
    path: "amenidades",
    label: "Amenidades",
    description: `amenidades`,
    component: Step5,
  },
  {
    path: "parqueadero",
    label: "Parqueadero",
    description: `Parqueadero`,
    component: Step6,
  },
  {
    path: "precio",
    label: "Precio",
    description: `precio`,
    component: Step7,
  },
  {
    path: "imagen",
    label: "Imagen",
    description: `ascensor`,
    component: Step8,
  },
  {
    path: "ascensor",
    label: "Ascensor",
    description: `show`,
    component: Step9,
  },
];
