import type { Section } from "./Section";
import type { WebMetas } from "./WebMetas";

export interface VideoResponse {
  angtime: number;
  status: string;
  version: string;
  webplayer: number;
  web_metas: WebMetas;
  responsetype: string;
  nofollow: boolean;
  id: string;
  title: string;
  album: string;
  albumID: string;
  artist: string;
  artistID: string;
  track: number;
  year: string;
  duration: string;
  coverArt: string;
  ArtistArt: string;
  ArtistGender: number;
  allowoffline: number;
  genre: string;
  AlbumArt: string;
  keywords: string[];
  languageid: number;
  bitrates: string;
  nouservideo: string;
  verified: number;
  cleardetails: number;
  bitrate: number;
  size: string;
  releasedate: Date;
  arabictext: number;
  explicit: string;
  single: string;
  lyrics: number;
  lyricsupdatedon: Date;
  videoid: string;
  thumbnailid: string;
  videoreleasedate: Date;
  CoverArtFallback_Artist: string;
  videoduration: string;
  subtitles: any[];
  vibes: number[];
  locked_content_partner_ids: any[];
  hasKaraoke: boolean;
  isAutoMixable: boolean;
  likes: string;
  plays: string;
  sections: Section[];
}
