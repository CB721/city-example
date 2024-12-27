import Container from '@mui/material/Container';
import OfficialProfile, { Profile } from './OfficialProfile/OfficialProfile';

function OfficialProfiles() {
  const officialProfiles: Profile[] = [
    {
      name: 'Lando Calrissian',
      title: 'Mayor',
      image: '/images/profiles/lando.jpg',
      phone: '555-123-4321',
      email: 'l.calrissian2@cloudcity.org',
    },
    {
      name: 'Georgette Washington',
      title: 'City Attorney',
      image: '/images/profiles/1.jpg',
      phone: '555-321-3213',
      email: 'g.washington@cloudcity.org',
    },
    {
      name: 'Josh Tosh',
      title: 'City Controller',
      image: '/images/profiles/2.jpg',
      phone: '555-456-3213',
      email: 'j.tosh@cloudcity.org',
    },
    {
      name: 'Gims Trois',
      title: 'Councilmember District 1',
      image: '/images/profiles/3.jpg',
      phone: '555-475-5479',
      email: 'g.trois@cloudcity.org',
    },
    {
      name: 'Samantha Smith',
      title: 'Councilmember District 1',
      image: '/images/profiles/4.jpg',
      phone: '555-654-3213',
      email: 's.smith@cloudcity.org',
    },
    {
      name: 'Joseph Trumpeter',
      title: 'Councilmember District 2',
      image: '/images/profiles/5.jpg',
      phone: '555-783-3001',
      email: 'j.trumpeter@cloudcity.org',
    },
    {
      name: 'Blake Turner',
      title: 'Councilmember District 2',
      image: '/images/profiles/6.jpg',
      phone: '555-321-3213',
      email: 'b.turner@cloudcity.org',
    },
    {
      name: 'Linda Lando',
      title: 'Councilmember District 3',
      image: '/images/profiles/7.jpg',
      phone: '555-321-3213',
      email: 'l.lando@cloudcity.org',
    },
    {
      name: 'Mayasia Zamora',
      title: 'Councilmember District 4',
      image: '/images/profiles/8.jpg',
      phone: '555-321-3213',
      email: 'm.zamora@cloudcity.org',
    },
    {
      name: 'Jessica Zo',
      title: 'Councilmember District 5',
      image: '/images/profiles/9.jpg',
      phone: '555-327-3541',
      email: 'j.zo@cloudcity.org',
    },
    {
      name: 'Calvin Rahm',
      title: 'Councilmember District 5',
      image: '/images/profiles/10.jpg',
      phone: '555-321-3213',
      email: 'c.rahm@cloudcity.org',
    },
    {
      name: 'Jude Jackson',
      title: 'Councilmember District 6',
      image: '/images/profiles/11.jpg',
      phone: '555-321-3213',
      email: 'j.jackson@cloudcity.org',
    },
    {
      name: 'Hugo Smith',
      title: 'Councilmember District 7',
      image: '/images/profiles/12.jpg',
      phone: '555-372-8731',
      email: 'h.smith@cloudcity.org',
    },
    {
      name: 'Derrick Zoolander',
      title: 'Councilmember District 7',
      image: '/images/profiles/13.jpg',
      phone: '505-463-0000',
      email: 'd.zoolander@cloudcity.org',
    },
    {
      name: 'Melissa O\'Neil',
      title: 'Councilmember District 8',
      image: '/images/profiles/14.jpg',
      phone: '555-321-3213',
      email: 'm.oneil@cloudcity.org',
    },
    {
      name: 'Travis Jones',
      title: 'Councilmember District 8',
      image: '/images/profiles/15.jpg',
      phone: '555-474-8736',
      email: 't.jones@cloudcity.org',
    },
    {
      name: 'Poppy Hobkins',
      title: 'Councilmember District 9',
      image: '/images/profiles/16.jpg',
      phone: '555-372-8731',
      email: 'p.hobkins@cloudcity.org',
    },
    {
      name: 'Tom Faleck',
      title: 'Councilmember District 10',
      image: '/images/profiles/17.jpg',
      phone: '505-451-0030',
      email: 't.faleck@cloudcity.org',
    },
    {
      name: 'Francesca Stone',
      title: 'Councilmember District 10',
      image: '/images/profiles/18.jpg',
      phone: '555-321-3821',
      email: 'f.stone@cloudcity.org',
    },
    {
      name: 'Cuddles',
      title: 'Pet Ambassador',
      image: '/images/profiles/19.jpg',
      phone: '',
      email: '',
    },
    {
      name: 'Watch Bun',
      title: 'Councilmember District 9',
      image: '/images/profiles/20.jpg',
      phone: '',
      email: '',
    },
    {
      name: 'Inspector Hop-It',
      title: 'Councilmember District 9',
      image: '/images/profiles/21.jpg',
      phone: '',
      email: '',
    },
  ]
  return (
    <Container maxWidth="md" className="bg-primary mb-12">
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 py-8">
        {officialProfiles.map((profile) => (
          <OfficialProfile key={profile.name} profile={profile} />
        ))}
      </div>
    </Container>
  )
}

export default OfficialProfiles;