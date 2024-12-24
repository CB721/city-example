import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socials = [
  {
    icon: FacebookIcon,
    href: '#',
    name: 'Facebook',
  },
  {
    icon: XIcon,
    href: '#',
    name: 'X/Twitter',
  },
  {
    icon: InstagramIcon,
    href: '#',
    name: 'Instagram',
  },
  {
    icon: LinkedInIcon,
    href: '#',
    name: 'LinkedIn',
  },
]

export default function Footer() {
  return (
    <footer className='bg-background text-white'>
      <Container maxWidth="xl" >
        <div className='flex flex-start py-8'>
          <div className='flex flex-col md:w-1/3 w-full'>
            <h3 className='text-2xl font-bold mb-4'>Cloud City</h3>
            <p className='mb-4'>1234 Main St.</p>
            <p className='mb-4'>Cloud City, CA 12345</p>
            <p className='mb-4'>Call 311 or 206-488-3956</p>
            <p className='mb-4'>TDD Service Call 7-1-1</p>
            <p>
              <a href='mailto:inquires@querytechnologies.org'>
                Email Us
              </a>
            </p>
          </div>
          <div className='flex flex-col md:w-1/3 w-full'>
            <h3 className='text-2xl font-bold mb-4'>Quick Links</h3>
            <p className='mb-4'>
              <a href='#'>Support for Residents</a>
            </p>
            <p className='mb-4'>
              <a href='#'>Tools for Business</a>
            </p>
            <p className='mb-4'>
              <a href='#'>Tips for Visitors</a>
            </p>
            <p>
              <a href='#'>Search fo Jobs</a>
            </p>
            <p>
              <a href='#'>Meet Your Government</a>
            </p>
          </div>
          <div className='flex flex-col md:w-1/3 w-full'>
            <h3 className='text-2xl font-bold mb-4'>Connect With Us</h3>
   
            {socials.map((social) => (
              <div key={social.name} className='flex justify-start items-center mb-4'>
                <social.icon sx={{ fill: "vars(--primary)", marginRight: "8px" }} />
                <a href={social.href}>{social.name}</a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}