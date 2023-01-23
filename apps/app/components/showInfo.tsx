import { Sell } from "../common/hooks/context/sell.context";
import { Interface } from "readline";
import { useSell } from "../common/hooks/useSell";
import { useState, useEffect } from "react";
import { getFile } from "../common/utils/store.window";

interface PropsData {
  data: Sell;
}

const Datos = (props: PropsData) => {
  const { data } = props;
  return <div>nombre: {data.username}</div>;
};

const Email = (props: PropsData) => {
  const { data } = props;
  return <div>Correo: {data.email}</div>;
};
const Address = (props: PropsData) => {
  const { data } = props;
  return <div>nombre: {data.username}</div>;
};

const Apartament = (props: PropsData) => {
  const { data } = props;
  return <div>Piso: {data.floorNumber}</div>;
};

const Amenidades = (props: PropsData) => {
  const { data } = props;
  return <div>Piso: {data.floorNumber}</div>;
};

const Parking = (props: PropsData) => {
  const { data } = props;
  return (
    <div>
      <div> {`${data.hasParking ? "Si" : "No"} `}incluye parqueador</div>
      <div> {`${data.isDeck ? "Si" : "No"} `}esta cubierto</div>
    </div>
  );
};
const Precio = (props: PropsData) => {
  const { data } = props;
  return <div>Precio: {data.price}</div>;
};
const Imagen = (props: PropsData) => {
  const { data } = props;

  const [selectedImage, setSelectedImage] = useState<File>();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.readAsDataURL(file);

      setSelectedImage(file);
    }
  };

  useEffect(() => {
 
    if (data.picture) {
      const file = getFile(data.picture);
      setSelectedImage(file);
    }
  }, [data.picture]);

  return (
    <div>
      {selectedImage && (
        <img style={{ width: 200 }} src={URL.createObjectURL(selectedImage)} />
      )}
    </div>
  );
};

const Ascensor = (props: PropsData) => {
  const { data } = props;
  return <div></div>;
};

const ShowInfo = (props) => {
  const { step } = props;
  const { state } = useSell();
  switch (step) {
    case 0:
      return <Datos data={state} />;
    case 1:
      return <Email data={state} />;
    case 2:
      return <Address data={state} />;
    case 3:
      return <Apartament data={state} />;
    case 4:
      return <Amenidades data={state} />;
    case 5:
      return <Parking data={state} />;
    case 6:
      return <Precio data={state} />;
    case 7:
      return <Imagen data={state} />;
    case 8:
      return <Ascensor data={state} />;

    default:
      return <h1>No project matchss</h1>;
  }
};
export default ShowInfo;
