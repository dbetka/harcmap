import { ICONS } from 'src/__jscash__/icons-names-list';
import { translator } from 'src/dictionary';

export const ROUTES = {
  welcome: {
    path: '/',
    name: 'welcome',
    label: '',
    shortLabel: '',
    icon: ICONS.sensor_door,
  },
  about: {
    path: '/about',
    name: 'about',
    label: translator.t('title.about'),
    shortLabel: translator.t('title.about'),
    icon: ICONS.emoji_objects,
  },
  signIn: {
    path: '/sign-in',
    name: 'signIn',
    label: translator.t('title.signIn'),
    shortLabel: translator.t('title.signIn'),
    icon: ICONS.login,
  },
  signUp: {
    path: '/sign-up',
    name: 'signUp',
    label: translator.t('title.signUp'),
    shortLabel: translator.t('title.signUp'),
    icon: ICONS.how_to_reg,
  },
  remindPassword: {
    path: '/remind-password',
    name: 'remindPassword',
    label: translator.t('title.remindPassword'),
    shortLabel: translator.t('title.remindPassword'),
    icon: ICONS.vpn_key,
  },
  changePassword: {
    path: '/user/remind/',
    pathWithParam: '/user/remind/:key',
    name: 'changePassword',
    label: translator.t('title.changePassword'),
    shortLabel: translator.t('title.changePassword'),
    icon: ICONS.create,
  },
  start: {
    path: '/start',
    name: 'start',
    label: translator.t('title.start'),
    shortLabel: translator.t('title.start'),
    icon: ICONS.home,
  },
  temporaryPoints: {
    path: '/temporary-points',
    name: 'temporaryPoints',
    label: translator.t('title.temporaryPoints'),
    shortLabel: translator.t('title.short.temporaryPoints'),
    icon: ICONS.watch_later,
  },
  collectPoint: {
    path: '/collect-point',
    name: 'collectPoint',
    label: translator.t('title.collectPoint'),
    shortLabel: translator.t('title.short.collectPoint'),
    icon: ICONS.star,
  },
  collectedPoints: {
    path: '/collected-points',
    name: 'collectedPoints',
    label: translator.t('title.collectedPoints'),
    shortLabel: translator.t('title.short.collectedPoints'),
    icon: ICONS.view_list,
  },
  map: {
    path: '/map',
    name: 'map',
    label: translator.t('title.map'),
    shortLabel: translator.t('title.map'),
    icon: ICONS.map,
  },
  adminPanel: {
    path: '/admin-panel',
    name: 'adminPanel',
    label: translator.t('title.adminPanel'),
    shortLabel: translator.t('title.short.adminPanel'),
    icon: ICONS.settings,
  },
  editEvent: {
    path: '/edit-event',
    name: 'editEvent',
    label: translator.t('title.editEvent'),
    shortLabel: translator.t('title.short.editEvent'),
    icon: ICONS.edit,
  },
  setMapPosition: {
    path: '/set-map-position',
    name: 'setMapPosition',
    label: translator.t('title.setMapPosition'),
    shortLabel: translator.t('title.setMapPosition'),
    icon: ICONS.map,
  },
  setPointPosition: {
    path: '/set-point-position/:pointId',
    name: 'setPointPosition',
    label: translator.t('title.setPointPosition'),
    shortLabel: translator.t('title.setPointPosition'),
    icon: ICONS.map,
  },
  newPoint: {
    path: '/new-point',
    name: 'newPoint',
    label: translator.t('title.newPoint'),
    shortLabel: translator.t('title.newPoint'),
    icon: ICONS.map,
  },
  editPoint: {
    path: '/edit-point/:pointId',
    name: 'editPoint',
    label: translator.t('title.editPoint'),
    shortLabel: translator.t('title.editPoint'),
    icons: ICONS.map,
  },
  scoreboard: {
    path: '/scoreboard',
    name: 'scoreboard',
    label: translator.t('title.scoreboard'),
    shortLabel: translator.t('title.short.scoreboard'),
    icon: ICONS.view_list,
  },
};
