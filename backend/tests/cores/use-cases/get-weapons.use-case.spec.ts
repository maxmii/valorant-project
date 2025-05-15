import {Test, TestingModule} from '@nestjs/testing';
import {GetWeaponsUseCase} from '../../../src/core/use-cases/get-weapons.use-case';
import {WeaponsMapper} from '../../../src/core/mappers/weapons.mapper';
import {IWeapon} from '../../../src/core/interfaces/weapons.interface';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('GetWeaponsUseCase', () => {
  let useCase: GetWeaponsUseCase;
  let weaponsMapper: WeaponsMapper;

  const mockWeaponApiResponse = {
    data: {
      data: [
        {
          uuid: '1234',
          displayName: 'Vandal',
          category: 'EEquippableCategory::Rifle',
          displayIcon:
            'https://media.valorant-api.com/weapons/vandal/displayicon.png',
          killStreamIcon:
            'https://media.valorant-api.com/weapons/vandal/killstreamicon.png',
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
          displayName: 'Phantom',
          category: 'EEquippableCategory::Rifle',
          displayIcon:
            'https://media.valorant-api.com/weapons/phantom/displayicon.png',
          killStreamIcon:
            'https://media.valorant-api.com/weapons/phantom/killstreamicon.png',
          weaponStats: {
            fireRate: 11,
            magazineSize: 30,
            runSpeedMultiplier: 0.85,
            equipTimeSeconds: 1,
            reloadTimeSeconds: 2.5,
            firstBulletAccuracy: 0.2,
            shotgunPelletCount: 1,
            wallPenetration: 'Medium',
            feature: null,
            fireMode: null,
            altFireType: 'ADS',
            adsStats: {
              zoomMultiplier: 1.25,
              fireRate: 9.9,
              runSpeedMultiplier: 0.75,
              burstCount: 1,
              firstBulletAccuracy: 0.11,
            },
            altShotgunStats: null,
            airBurstStats: null,
            damageRanges: [
              {
                rangeStartMeters: 0,
                rangeEndMeters: 15,
                headDamage: 140,
                bodyDamage: 39,
                legDamage: 33,
              },
            ],
          },
        },
        {
          uuid: '9012',
          displayName: 'Melee',
          category: 'EEquippableCategory::Melee',
          displayIcon:
            'https://media.valorant-api.com/weapons/melee/displayicon.png',
          killStreamIcon:
            'https://media.valorant-api.com/weapons/melee/killstreamicon.png',
          weaponStats: null,
        },
      ],
    },
  };

  const mockMappedWeapons: IWeapon[] = [
    {
      weaponName: 'Vandal',
      weaponType: 'Rifle',
      displayIcon:
        'https://media.valorant-api.com/weapons/vandal/displayicon.png',
      killStreamIcon:
        'https://media.valorant-api.com/weapons/vandal/killstreamicon.png',
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
      weaponName: 'Phantom',
      weaponType: 'Rifle',
      displayIcon:
        'https://media.valorant-api.com/weapons/phantom/displayicon.png',
      killStreamIcon:
        'https://media.valorant-api.com/weapons/phantom/killstreamicon.png',
      weaponStats: {
        fireRate: 11,
        magazineSize: 30,
        runSpeedMultiplier: 0.85,
        equipTimeSeconds: 1,
        reloadTimeSeconds: 2.5,
        firstBulletAccuracy: 0.2,
        shotgunPelletCount: 1,
        wallPenetration: 'Medium',
        feature: null,
        fireMode: null,
        altFireType: 'ADS',
        adsStats: {
          zoomMultiplier: 1.25,
          fireRate: 9.9,
          runSpeedMultiplier: 0.75,
          burstCount: 1,
          firstBulletAccuracy: 0.11,
        },
        altShotgunStats: null,
        airBurstStats: null,
        damageRanges: [
          {
            rangeStartMeters: 0,
            rangeEndMeters: 15,
            headDamage: 140,
            bodyDamage: 39,
            legDamage: 33,
          },
        ],
      },
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetWeaponsUseCase,
        {
          provide: WeaponsMapper,
          useValue: {
            mapWeapons: jest.fn(),
          },
        },
      ],
    }).compile();

    useCase = module.get<GetWeaponsUseCase>(GetWeaponsUseCase);
    weaponsMapper = module.get<WeaponsMapper>(WeaponsMapper);

    // Set environment variable for tests
    process.env.API_URL = 'https://valorant-api.com';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('execute', () => {
    it('should fetch weapons, filter out melee, and map them correctly', async () => {
      mockedAxios.get.mockResolvedValue(mockWeaponApiResponse);
      jest
        .spyOn(weaponsMapper, 'mapWeapons')
        .mockReturnValue(mockMappedWeapons);

      const result = await useCase.execute({});

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://valorant-api.com/weapons',
      );
      expect(weaponsMapper.mapWeapons).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({displayName: 'Vandal'}),
          expect.objectContaining({displayName: 'Phantom'}),
        ]),
        undefined,
        undefined,
      );
      expect(result).toEqual(mockMappedWeapons);
    });

    it('should filter out melee weapons before passing to mapper', async () => {
      mockedAxios.get.mockResolvedValue(mockWeaponApiResponse);
      jest
        .spyOn(weaponsMapper, 'mapWeapons')
        .mockReturnValue(mockMappedWeapons);

      await useCase.execute({});

      // Check that Melee was filtered out
      const passedToMapper = (weaponsMapper.mapWeapons as jest.Mock).mock
        .calls[0][0];
      const hasMelee = passedToMapper.some(
        (weapon) => weapon.displayName === 'Melee',
      );
      expect(hasMelee).toBeFalsy();
    });

    it('should pass weapon name to mapper when provided', async () => {
      mockedAxios.get.mockResolvedValue(mockWeaponApiResponse);
      jest
        .spyOn(weaponsMapper, 'mapWeapons')
        .mockReturnValue([mockMappedWeapons[0]]);

      const result = await useCase.execute({weaponName: 'Vandal'});

      expect(weaponsMapper.mapWeapons).toHaveBeenCalledWith(
        expect.any(Array),
        'Vandal',
        undefined,
      );
      expect(result).toEqual([mockMappedWeapons[0]]);
    });

    it('should pass weapon type to mapper when provided', async () => {
      mockedAxios.get.mockResolvedValue(mockWeaponApiResponse);
      jest
        .spyOn(weaponsMapper, 'mapWeapons')
        .mockReturnValue(mockMappedWeapons);

      const result = await useCase.execute({weaponType: 'Rifle'});

      expect(weaponsMapper.mapWeapons).toHaveBeenCalledWith(
        expect.any(Array),
        undefined,
        'Rifle',
      );
      expect(result).toEqual(mockMappedWeapons);
    });

    it('should handle API errors gracefully', async () => {
      const error = new Error('API Error');
      mockedAxios.get.mockRejectedValue(error);

      await expect(useCase.execute({})).rejects.toThrow('API Error');
    });
  });
});
