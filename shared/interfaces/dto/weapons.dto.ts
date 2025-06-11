import type {WeaponStats, ShopData, Skin} from '@shared/interfaces';

export class WeaponDto {
  uuid!: string;
  displayName!: string;
  category!: string;
  defaultSkinUuid!: string;
  displayIcon!: string;
  killStreamIcon!: string;
  assetPath!: string;
  weaponStats!: WeaponStats;
  shopData!: ShopData;
  skins!: Skin[];
}

export class GetWeaponQueryDto {
  name?: string;
  category?: string;
  priceMin?: number;
  priceMax?: number;
}

export class WeaponSummaryDto {
  uuid!: string;
  displayName!: string;
  category!: string;
  displayIcon!: string;
  price!: number;
}
