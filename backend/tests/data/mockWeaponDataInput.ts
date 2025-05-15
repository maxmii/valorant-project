import {WeaponDto} from '../../src/core/interfaces/dto/weapons.dto';

export const mockWeaponDataInput: WeaponDto[] = [
  {
    uuid: '1234',
    displayName: 'Vandal',
    category: 'EEquippableCategory::Rifle',
    displayIcon:
      'https://media.valorant-api.com/weapons/vandal/displayicon.png',
    killStreamIcon:
      'https://media.valorant-api.com/weapons/vandal/killstreamicon.png',
    defaultSkinUuid: 'vandal-default-uuid',
    assetPath: '/Game/Weapons/Vandal',
    shopData: {
      cost: 2900,
      category: 'Rifles',
      shopOrderPriority: 0,
      categoryText: 'Rifle',
      gridPosition: {
        row: 1,
        column: 2,
      },
      canBeTrashed: false,
      image: null,
      newImage:
        'https://media.valorant-api.com/weapons/vandal/shop/newimage.png',
      newImage2: null,
      assetPath: '/Game/ShopData/Vandal',
    },
    skins: [],
    weaponStats: {
      fireRate: 9.75,
      magazineSize: 25,
      runSpeedMultiplier: 0.85,
      equipTimeSeconds: 1,
      reloadTimeSeconds: 2.5,
      firstBulletAccuracy: 0.25,
      shotgunPelletCount: 1,
      wallPenetration: 'Medium',
      feature: null,
      fireMode: null,
      altFireType: 'ADS',
      adsStats: {
        zoomMultiplier: 1.25,
        fireRate: 8.5,
        runSpeedMultiplier: 0.75,
        burstCount: 1,
        firstBulletAccuracy: 0.15,
      },
      altShotgunStats: null,
      airBurstStats: null,
      damageRanges: [
        {
          rangeStartMeters: 0,
          rangeEndMeters: 30,
          headDamage: 160,
          bodyDamage: 40,
          legDamage: 34,
        },
      ],
    },
  },
  {
    uuid: '5678',
    displayName: 'Operator',
    category: 'EEquippableCategory::Sniper',
    displayIcon:
      'https://media.valorant-api.com/weapons/operator/displayicon.png',
    killStreamIcon:
      'https://media.valorant-api.com/weapons/operator/killstreamicon.png',
    defaultSkinUuid: 'operator-default-uuid',
    assetPath: '/Game/Weapons/Operator',
    shopData: {
      cost: 4700,
      category: 'Snipers',
      shopOrderPriority: 0,
      categoryText: 'Sniper',
      gridPosition: {
        row: 2,
        column: 3,
      },
      canBeTrashed: false,
      image: null,
      newImage:
        'https://media.valorant-api.com/weapons/operator/shop/newimage.png',
      newImage2: null,
      assetPath: '/Game/ShopData/Operator',
    },
    skins: [],
    weaponStats: {
      fireRate: 0.75,
      magazineSize: 5,
      runSpeedMultiplier: 0.76,
      equipTimeSeconds: 1.5,
      reloadTimeSeconds: 3.7,
      firstBulletAccuracy: 0.1,
      shotgunPelletCount: 1,
      wallPenetration: 'High',
      feature: null,
      fireMode: null,
      altFireType: 'ADS',
      adsStats: {
        zoomMultiplier: 2.5,
        fireRate: 0.75,
        runSpeedMultiplier: 0.52,
        burstCount: 1,
        firstBulletAccuracy: 0,
      },
      altShotgunStats: null,
      airBurstStats: null,
      damageRanges: [
        {
          rangeStartMeters: 0,
          rangeEndMeters: 50,
          headDamage: 255,
          bodyDamage: 150,
          legDamage: 127,
        },
      ],
    },
  },
];
