import Container from "@mui/material/Container";
import { ReactNode } from "react";

interface OverlayProps {
  title: string;
  icon?: ReactNode;
  subTitle?: string;
}

function Overlay({ title, icon, subTitle }: OverlayProps) {
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background'>
      <Container maxWidth="md" className='relative h-full w-full flex justify-start items-end py-8'>
        <div className="flex justify-between items-start w-full">
          <h1 className='text-7xl text-primary font-bold'>{title}</h1>
          <div className="flex justify-center items-center bg-primary p-2 rounded text-text">
            {icon}
            <p className='text-lg'>{subTitle}</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Overlay;