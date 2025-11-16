import { Route, Routes } from 'react-router'
import { Carcass } from '@/components/containers/Carcass.tsx'
import { HomePage } from '@/pages/HomePage.tsx'
import { AboutPage } from '@/pages/AboutPage.tsx'
import { ContactsPage } from '@/pages/ContactsPage.tsx'
import { CatalogPage } from '@/pages/CatalogPage.tsx'
import { DistributionPage } from '@/pages/DistributionPage.tsx'
import { EquipmentPage } from '@/pages/EquipmentPage.tsx'
import { BasketPage } from '@/pages/BasketPage.tsx'
import { PolicyPage } from '@/pages/PolicyPage.tsx'
import { NotFoundPage } from '@/pages/NotFoundPage.tsx'

export const Pats = {
  Home: '/',
  About: '/about',
  Contacts: '/contacts',
  Catalog: '/catalog',
  Distribution: '/distribution',
  Equipment: '/equipment',
  Basket: '/basket',
  Policy: '/policy',
  Notfound: '*',
} as const

export const Routing = () => (
  <Routes>
    <Route element={<Carcass />}>
      <Route path={Pats.Home} element={<HomePage />} />
      <Route path={Pats.About} element={<AboutPage />} />
      <Route path={Pats.Contacts} element={<ContactsPage />} />
      <Route path={Pats.Catalog} element={<CatalogPage />} />
      <Route path={Pats.Distribution} element={<DistributionPage />} />
      <Route path={Pats.Equipment} element={<EquipmentPage />} />
      <Route path={Pats.Basket} element={<BasketPage />} />
      <Route path={Pats.Policy} element={<PolicyPage />} />
      <Route path={Pats.Notfound} element={<NotFoundPage />} />
    </Route>
  </Routes>
)
