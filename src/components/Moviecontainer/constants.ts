export enum MOVIE_TABS {
  ALL = 'all',
  DOCUMENTARY ='documentary',
  COMEDY = 'comedy',
  HORROR = 'horror',
  CRIME = 'crime'
}

export const TABS = [
  {id: MOVIE_TABS.ALL, label: 'All'},
  {id: MOVIE_TABS.DOCUMENTARY, label: 'Documentary'},
  {id: MOVIE_TABS.COMEDY, label: 'Comendy'},
  {id: MOVIE_TABS.HORROR, label: 'Horror'},
  {id: MOVIE_TABS.CRIME, label: 'Crime'},
]

export enum BUTTON_ACCENT {
  SELECTOR = 'selector',
  MAGENTA = 'magenta',
  GREY = 'grey'
}