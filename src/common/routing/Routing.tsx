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
import { PATS } from '@/common/routing/routesConstants.ts'

export const Routing = () => (
  <Routes>
    <Route element={<Carcass />}>
      <Route path={PATS.Home} element={<HomePage />} />
      <Route path={PATS.About} element={<AboutPage />} />
      <Route path={PATS.Contacts} element={<ContactsPage />} />
      <Route path={PATS.Catalog} element={<CatalogPage />} />
      <Route path={PATS.Distribution} element={<DistributionPage />} />
      <Route path={PATS.Equipment} element={<EquipmentPage />} />
      <Route path={PATS.Basket} element={<BasketPage />} />
      <Route path={PATS.Policy} element={<PolicyPage />} />
      <Route path={PATS.Notfound} element={<NotFoundPage />} />
    </Route>
  </Routes>
)
