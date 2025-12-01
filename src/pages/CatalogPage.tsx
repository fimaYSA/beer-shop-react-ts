import { TitlePage } from '@/components/title/TitlePage.tsx'
import { Background } from '@/components/containers/Background.tsx'
import { Filter } from '@/components/ui/filter/Filter.tsx'

export function CatalogPage() {
  return (
    <>
      <TitlePage title='Каталог' />
      <Background background={'white'}>
        <Filter />
      </Background>
    </>
  )
}
