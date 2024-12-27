import Container from "@mui/material/Container";
import { ReactNode } from "react";

interface OverlayProps {
  title: string;
  aside?: {
    title: string;
    icon: ReactNode;
  }
}

function Overlay({ title, aside }: OverlayProps) {
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background'>
      <Container maxWidth="md" className='relative h-full w-full flex justify-start items-end py-8'>
        <div className="tablet2:flex block justify-between items-start w-full">
          <h1 className='tablet2:text-7xl text-5xl text-primary font-bold'>{title}</h1>
          {aside && (
            <div className="flex justify-start items-center bg-primary p-2 rounded text-text max-w-fit mt-4 tablet2:mt-0">
              {aside.icon}
              <p className='text-lg'>{aside.title}</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Overlay;