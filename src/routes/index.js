import {HomePage} from "../pages/Main";
import {AboutPage} from "../pages/About";
import {FeaturesPage} from '../pages/Features';
import {ContactsPage} from "../pages/contacts/Contacts";

export const appRoutes = [
    {
        path: '/router',
        exact: true,
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/features',
        component: FeaturesPage
    },
    {
        path: '/contacts',
        component: ContactsPage
    }
];