import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useLocation } from '@tanstack/react-router';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContentContainer from '../components/ContentContainer';
import PageTitle from '../components/PageTitle';
import { NAV_LINKS } from '../constants/constants';
import type { NavLinks } from '../models';

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <ContentContainer>
        {NAV_LINKS.map((item: NavLinks) => {
          const location = useLocation();
          if (location.pathname === item.to) {
            return <PageTitle title={item.label} />;
          } else {
            return null;
          }
        })}

        <Outlet />
      </ContentContainer>
      <TanStackRouterDevtools />
      <Footer />
    </>
  )
});
