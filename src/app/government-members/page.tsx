import Carousel from "@/components/Carousel/Carousel";
import Overlay from "@/components/Carousel/Overlay/Overlay";
import News from "@/components/News/News";
import OfficialProfiles from "@/components/OfficialProfiles/OfficialProfiles";

export default function Jobs() {
  return (
    <div>
      <Carousel
        images={[
          {
            src: '/images/profiles/main.jpg',
            alt: 'Government Building',
            layout: 'fill',
            priority: true,
          }
        ]}
        hideSearch
        overlay={
          <Overlay
            title='Meet Your Government'
          />
        }
      />
      <OfficialProfiles />
      <News
        news={[
          {
            thumbnail: {
              src: '/images/splashImages/traffic.jpg',
              alt: 'Traffic',
              layout: 'fill',
            },
            title: 'Traffic update',
            videoId: '4pSkeZ_afnk'
          },
          {
            thumbnail: {
              src: '/images/splashImages/animal-crossing.jpg',
              alt: 'New animals at local zoo',
              layout: 'fill',
            },
            title: 'New animals at local zoo',
            videoId: 'oRDRfikj2z8'
          },
          {
            thumbnail: {
              src: '/images/splashImages/rain.jpg',
              alt: 'Weather',
              layout: 'fill',
            },
            title: 'Weather News',
            videoId: 'Z_XWw_E0FWs'
          },
          {
            thumbnail: {
              src: '/images/splashImages/speech.jpg',
              alt: 'Mayor speech',
              layout: 'fill',
            },
            title: 'Mayor speaks on supporting local children',
            videoId: 'Yp5KDg6mx_Q'
          },
        ]}
      />
    </div>
  )
}