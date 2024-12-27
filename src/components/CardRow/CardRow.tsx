import { CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export interface CardRowItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CardRowProps {
  items: CardRowItem[];
  title?: string;
}

export default function CardRow({ items, title }: CardRowProps) {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, marginTop: 12, marginBottom: 12 }}>
        {title && <h2 className='text-2xl font-bold text-center text-tertiary mb-4'>{title}</h2>}
        <Grid container justifyContent="space-between">
          {items.map((item) => (
            <Grid key={item.id} xs={12} sm={3.5}>
              <Card className='sm:mb-0 mb-12'>
                <CardContent>
                  <div className='flex justify-center items-center mb-2'>{item.icon}</div>
                  <div>
                    <h3 className='text-tertiary text-center mb-1 text-lg font-bold'>{item.title}</h3>
                    <p className='text-secondary text-center text-base text-pretty'>{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
