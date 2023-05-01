import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FUNZIONI',
    group: true,
  },
  {
    title: 'Prenotazioni',
    icon: 'calendar-outline',
    link: '/pages/',
    children: [
      {
        title: 'Lista',
        link: 'booking/list/active',
        icon: 'list-outline',
      },
      {
        title: 'Nuova prenotazione',
        link: 'user/list/booking',
        icon: 'plus-outline'
      },
      {
        title: 'Modifica prenotazione',
        link: '/pages/smart-table',
        icon: 'edit-outline'
      },
      {
        title: 'Archivio prenotazioni',
        link: 'booking/list/archived',
        icon: 'archive-outline',
      },
    ],
  },
  {
    title: 'Prodotti',
    icon: 'cube-outline',
    link: '/pages/',
    children: [
      {
        title: 'Lista',
        link: 'product/list/active',
        icon: 'list-outline',
      },
      {
        title: 'Nuova prenotazione',
        link: 'user/list/booking',
        icon: 'plus-outline'
      },
      {
        title: 'Modifica prenotazione',
        link: '/pages/smart-table',
        icon: 'edit-outline'
      },
      {
        title: 'Archivio prenotazioni',
        link: 'booking/list/archived',
        icon: 'archive-outline',
      },
    ],
  },
  {
    title: 'Prestazioni',
    icon: 'activity-outline',
    children: [
      {
        title: 'Lista',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Nuova prestazione',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Modifica prestazione',
        link: '/pages/layout/infinite-list',
      },
    ],
  },
  {
    title: 'Utenti',
    icon: 'people-outline',
    children: [
      {
        title: 'Lista',
        link: 'user/list/show',
      },
      {
        title: 'Nuovo utente',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Modifica utente',
        pathMatch: 'prefix',
        link: 'user/list/edit',
      },
    ],
  },
  {
    title: 'Report',
    icon: 'clipboard-outline',
    children: [
      {
        title: 'Lista',
        link: '/pages/layout/stepper',
      }
    ],
  },
  {
    title: 'Personale',
    icon: 'smiling-face-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  // {
  //   title: 'Fatture',
  //   icon: 'archive-outline',
  //   children: [
  //     {
  //       title: 'Lista',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'Nuova fattura',
  //       link: '/pages/layout/list',
  //     },
  //     {
  //       title: 'Modifica fattura',
  //       link: '/pages/layout/infinite-list',
  //     }
  //   ],
  // },
  // {
  //   title: 'Statistiche',
  //   icon: 'pie-chart-outline',
  //   children: [
  //     {
  //       title: 'Stepper',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/pages/layout/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/pages/layout/infinite-list',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/pages/layout/accordion',
  //     },
  //     {
  //       title: 'Tabs',
  //       pathMatch: 'prefix',
  //       link: '/pages/layout/tabs',
  //     },
  //   ],
  // },
  // {
  //   title: 'Magazzino',
  //   icon: 'car-outline',
  //   children: [
  //     {
  //       title: 'Stepper',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/pages/layout/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/pages/layout/infinite-list',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/pages/layout/accordion',
  //     },
  //     {
  //       title: 'Tabs',
  //       pathMatch: 'prefix',
  //       link: '/pages/layout/tabs',
  //     },
  //   ],
  // },
];
