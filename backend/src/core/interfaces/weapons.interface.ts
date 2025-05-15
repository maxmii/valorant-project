export interface IWeapon {
  weaponName: string;
  weaponType: string;
  displayIcon: string;
  killStreamIcon: string;
  weaponStats: WeaponStats;
}

export interface WeaponStats {
  fireRate: number;
  magazineSize: number;
  runSpeedMultiplier: number;
  equipTimeSeconds: number;
  reloadTimeSeconds: number;
  firstBulletAccuracy: number;
  shotgunPelletCount: number;
  wallPenetration: string;
  feature: string;
  fireMode: string | null;
  altFireType: string;
  adsStats: AdsStats;
  altShotgunStats: any;
  airBurstStats: any;
  damageRanges: DamageRange[];
}

export interface AdsStats {
  zoomMultiplier: number;
  fireRate: number;
  runSpeedMultiplier: number;
  burstCount: number;
  firstBulletAccuracy: number;
}

export interface DamageRange {
  rangeStartMeters: number;
  rangeEndMeters: number;
  headDamage: number;
  bodyDamage: number;
  legDamage: number;
}

export interface ShopData {
  cost: number;
  category: string;
  shopOrderPriority: number;
  categoryText: string;
  gridPosition: GridPosition;
  canBeTrashed: boolean;
  image: string | null;
  newImage: string;
  newImage2: string | null;
  assetPath: string;
}

export interface GridPosition {
  row: number;
  column: number;
}

export interface Skin {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: string | null;
  displayIcon: string | null;
  wallpaper: string | null;
  assetPath: string;
  chromas: Chroma[];
  levels: Level[];
}

export interface Chroma {
  uuid: string;
  displayName: string;
  displayIcon: string | null;
  fullRender: string;
  swatch: string | null;
  streamedVideo: string | null;
  assetPath: string;
}

export interface Level {
  uuid: string;
  displayName: string;
  levelItem: string | null;
  displayIcon: string | null;
  streamedVideo: string | null;
  assetPath: string;
}
