import Image from 'next/image'

export interface Profile {
  name: string;
  title: string;
  image: string;
  phone: string;
  email: string;
}

export interface OfficialProfileProps {
  profile: Profile;
}

function OfficialProfile({ profile }: OfficialProfileProps) {
  return (
    <div className="text-text">
      <Image
        src={profile.image}
        alt={profile.name}
        width={176}
        height={176}
        className='rounded-full w-44 h-44 mb-4 object-cover mx-auto'
      />
      <h2 className='text-xl font-semibold max-w-fit mx-auto'>{profile.name}</h2>
      <h3 className='text-lg max-w-fit mx-auto'>{profile.title}</h3>
    </div>
  )
}

export default OfficialProfile;