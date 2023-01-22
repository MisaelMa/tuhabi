import { Box, ListItemButton } from "@mui/material";

import styled from "styled-components";
import { url } from "inspector";

interface PropsR {
    src: string
}
export const Background = styled(Box)<PropsR>((props: PropsR) => {
    return {
        backgroundImage: `url(${props.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        'background-size': 'cover',
        width: '100%',
        height: 'auto',
        position: 'fixed',
        top: 0,
        left: 0,
        minHeight: "100vh",
     };
})