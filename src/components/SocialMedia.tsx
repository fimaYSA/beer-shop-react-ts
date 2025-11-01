import { socialMediaData } from '../../public/data/social-media.ts'

export function SocialMedia() {
  return (
    <div className='flex gap-5'>
      {socialMediaData.map((m, i) => {
        return <img src={m.img} alt={m.name} key={i} />
      })}
    </div>
  )
}
