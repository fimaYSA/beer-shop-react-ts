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
import { PATHS } from '@/common/routing/routesConstants.ts'

export const Routing = () => (
  <Routes>
    <Route element={<Carcass />}>
      <Route path={PATHS.Home} element={<HomePage />} />
      <Route path={PATHS.About} element={<AboutPage />} />
      <Route path={PATHS.Contacts} element={<ContactsPage />} />
      <Route path={PATHS.Catalog} element={<CatalogPage />} />
      <Route path={PATHS.Distribution} element={<DistributionPage />} />
      <Route path={PATHS.Equipment} element={<EquipmentPage />} />
      <Route path={PATHS.Basket} element={<BasketPage />} />
      <Route path={PATHS.Policy} element={<PolicyPage />} />
      <Route path={PATHS.Notfound} element={<NotFoundPage />} />
    </Route>
  </Routes>
)
