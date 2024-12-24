import Image, { ImageProps } from 'next/legacy/image';
import Container from '@mui/material/Container';

export interface PanelRowProps {
  image: ImageProps;
  header: string;
  description: string;
  callToAction: React.ReactNode;
}

function PanelRow({ image, header, description, callToAction }: PanelRowProps) {
  return (
    <div className='tablet:flex block justify-start tablet:h-auto h-full bg-white'>
      <div className='tablet:w-3/4 w-full tablet:h-auto h-[50vh] relative'>
        <Image {...image} className='object-cover' />
      </div>
      <div className='tablet:w-1/4 w-full py-4'>
        <Container maxWidth="xl">
          <h2 className='text-2xl font-bold text-center text-tertiary mb-2'>{header}</h2>
          <p className='text-center text-secondary mb-1'>{description}</p>
          <div className='mt-4 flex justify-center'>{callToAction}</div>
        </Container>
      </div>
    </div>
  );
}

export default PanelRow;