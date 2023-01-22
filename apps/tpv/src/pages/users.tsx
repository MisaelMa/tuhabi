import * as React from "react";
import Container from "@mui/material/Container";
import { getUser } from "../common/service/use.service";
export default function Users() {
  const [user, setUser] = React.useState([])
  React.useEffect(()=>{
    getUsers()
  },[])
  const getUsers = async ()=> {
    const data = await getUser();
    setUser(data)
  }
  return (<Container maxWidth="lg">
    {JSON.stringify(user,null,2)}

  </Container>);
}
