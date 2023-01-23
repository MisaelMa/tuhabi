import { useEffect, useState } from "react";

import { Interface } from "readline";
import { Sell } from "../../common/hooks/context/sell.context";
import { getFile } from "../../common/utils/store.window";

interface PropsData {
    data: Sell;
  }
  
  export const Datos = (props: PropsData) => {
    const { data } = props;
    return <div>nombre: {data.username}</div>;
  };
  
  export const Email = (props: PropsData) => {
    const { data } = props;
    return <div>Correo: {data.email}</div>;
  };
  export const Address = (props: PropsData) => {
    const { data } = props;
    return <div>direccion: {data.address}</div>;
  };
  
  export const Apartament = (props: PropsData) => {
    const { data } = props;
    return <div>Planta: {data.floorNumber}</div>;
  };
  
  export const Amenidades = (props: PropsData) => {
    const { data } = props;
    return (
      <div>
        Incluye:
        <ul>
          {data.amenidades.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export const Parking = (props: PropsData) => {
    const { data } = props;
    return (
      <div>
        <div> {`${data.hasParking ? "Si" : "No"} `}incluye parqueador</div>
        <div> {`${data.isDeck ? "Si" : "No"} `}esta cubierto</div>
      </div>
    );
  };
  export const Precio = (props: PropsData) => {
    const { data } = props;
    return <div>Precio: {data.price}</div>;
  };
  export const Imagen = (props: PropsData) => {
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
  
  export const Ascensor = (props: PropsData) => {
    const { data } = props;
    return <div>
      <div> {`${data.hasLift ? "Si" : "No"} `} tiene elevador</div>
  
    </div>;
  };
  