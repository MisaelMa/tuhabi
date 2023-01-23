import {
  Address,
  Amenidades,
  Apartament,
  Ascensor,
  Datos,
  Email,
  Imagen,
  Parking,
  Precio,
} from "./show";

import { useSell } from "../common/hooks/useSell";

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
      return <div></div>;
  }
};
export default ShowInfo;
