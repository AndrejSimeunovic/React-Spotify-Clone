export interface ChartList {
  countries: Country[];
  global: Global;
}

export interface Country {
  cities: City[];
  genres: Genre[];
  id: string;
  listid: string;
  momentum_listid?: string;
  name: string;
}

export interface City {
  countryid: string;
  id: string;
  listid: string;
  name: string;
}

export interface Genre {
  count: number;
  countryid?: string;
  id: string;
  listid: string;
  name: string;
  urlPath: string;
}

export interface Global {
  genres: Genre[];
}

export interface Tracks {
  properties: Properties;
  tracks: Track[];
}

export interface Properties {}

export interface Track {
  artists?: Artist[];
  highlightsurls: Highlightsurls;
  hub: Hub;
  images?: Images;
  key: string;
  layout: string;
  properties: Properties;
  share: Share;
  subtitle: string;
  title: string;
  type: TrackType;
  url: string;
}

export interface Artist {
  adamid: string;
  alias: string;
  id: string;
}

export interface Highlightsurls {
  artisthighlightsurl?: string;
  trackhighlighturl?: string;
}

export interface Hub {
  actions?: Action[];
  displayname: Displayname;
  explicit: boolean;
  image: string;
  options: Option[];
  type: HubType;
}

export interface Action {
  id?: string;
  name: Name;
  type: ActionType;
  uri?: string;
}

export enum Name {
  Apple = "apple",
  HubApplemusicDeeplink = "hub:applemusic:deeplink",
  HubApplemusicSubscribe = "hub:applemusic:subscribe",
}

export enum ActionType {
  Applemusicopen = "applemusicopen",
  Applemusicplay = "applemusicplay",
  URI = "uri",
}

export enum Displayname {
  AppleMusic = "APPLE MUSIC",
}

export interface Option {
  actions: Action[];
  beacondata: Beacondata;
  caption: Caption;
  colouroverflowimage: boolean;
  image: string;
  listcaption: Listcaption;
  overflowimage: string;
  providername: Providername;
  type: BeacondataType;
}

export interface Beacondata {
  providername: Providername;
  type: BeacondataType;
}

export enum Providername {
  Applemusic = "applemusic",
}

export enum BeacondataType {
  Open = "open",
}

export enum Caption {
  Open = "OPEN",
}

export enum Listcaption {
  OpenInAppleMusic = "Open in Apple Music",
}

export enum HubType {
  Applemusic = "APPLEMUSIC",
}

export interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

export interface Share {
  avatar?: string;
  href: string;
  html: string;
  image?: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}

export enum TrackType {
  Music = "MUSIC",
}

export interface SongDetails {
  data: RootObjectDatum[];
}

export interface RootObjectDatum {
  attributes: Attributes;
  id: string;
  relationships: Relationships;
  type: string;
}

export interface Attributes {
  albumName: string;
  artistName: string;
  artwork: Artwork;
  audioLocale: string;
  audioTraits: string[];
  composerName?: string;
  discNumber: number;
  durationInMillis: number;
  genreNames: string[];
  hasCredits: boolean;
  hasLyrics: boolean;
  hasTimeSyncedLyrics: boolean;
  isAppleDigitalMaster: boolean;
  isMasteredForItunes: boolean;
  isVocalAttenuationAllowed: boolean;
  isrc: string;
  name: string;
  playParams: PlayParams;
  previews: Preview[];
  releaseDate: Date;
  trackNumber: number;
  url: string;
}

export interface Artwork {
  bgColor: string;
  hasP3: boolean;
  height: number;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  url: string;
  width: number;
}

export interface PlayParams {
  id: string;
  kind: string;
}

export interface Preview {
  url: string;
}

export interface Relationships {
  albums: Albums;
  artists: Albums;
}

export interface Albums {
  data: AlbumsDatum[];
}

export interface AlbumsDatum {
  id: string;
  type: string;
}

export interface ArtistDetails {
  data: RootObjectDatum[];
}

export interface RootObjectDatum {
  attributes: Attributes;
  id: string;
  relationships: Relationships;
  type: string;
}

export interface Attributes {
  artwork: Artwork;
  genreNames: string[];
  name: string;
  url: string;
}

export interface Artwork {
  bgColor: string;
  hasP3: boolean;
  height: number;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  url: string;
  width: number;
}

export interface Relationships {
  albums: Albums;
}

export interface Albums {
  data: AlbumsDatum[];
}

export interface AlbumsDatum {
  id: string;
  type: string;
}

export interface TopSongs {
  data: TopSong[];
}

export interface TopSong {
  attributes: Attributes;
  id: string;
  type: Type;
}

export interface Attributes {
  albumName: string;
  artistName: string;
  artwork: Artwork;
  audioLocale: string;
  audioTraits: string[];
  composerName?: string;
  contentRating?: string;
  discNumber: number;
  durationInMillis: number;
  genreNames: string[];
  hasCredits: boolean;
  hasLyrics: boolean;
  hasTimeSyncedLyrics: boolean;
  isAppleDigitalMaster: boolean;
  isMasteredForItunes: boolean;
  isVocalAttenuationAllowed: boolean;
  isrc: string;
  name: string;
  playParams: PlayParams;
  previews: Preview[];
  releaseDate: Date;
  trackNumber: number;
  url: string;
}

export interface Artwork {
  bgColor: string;
  hasP3: boolean;
  height: number;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  url: string;
  width: number;
}

export interface PlayParams {
  id: string;
  kind: string;
}

export interface Preview {
  url: string;
}

export enum Type {
  Songs = "songs",
}

export interface SearchTrack {
  artists: Artists;
  tracks: Tracks;
}

export interface Artists {
  hits: ArtistsHit[];
}

export interface ArtistsHit {
  artist: HitArtist;
}

export interface HitArtist {
  adamid: string;
  avatar: string;
  name: string;
  verified: boolean;
  weburl: string;
}

export interface Tracks {
  hits: TracksHit[];
}

export interface TracksHit {
  track: Track;
}
