import {Test, TestingModule} from '@nestjs/testing';
import {WeaponsMapper} from '../../../src/core/mappers/weapons.mapper';
import {mockWeaponDataInput} from 'tests/data/mockWeaponDataInput';

describe('WeaponsMapper', () => {
  let mapper: WeaponsMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeaponsMapper],
    }).compile();

    mapper = module.get<WeaponsMapper>(WeaponsMapper);
  });

  it('should be defined', () => {
    expect(mapper).toBeDefined();
  });

  describe('mapWeapons', () => {
    it('should map weapon data correctly', () => {
      const result = mapper.mapWeapons(mockWeaponDataInput);

      expect(result).toHaveLength(2);

      // Check first weapon
      expect(result[0]).toEqual({
        weaponName: 'Vandal',
        weaponType: 'Rifle',
        displayIcon:
          'https://media.valorant-api.com/weapons/vandal/displayicon.png',
        killStreamIcon:
          'https://media.valorant-api.com/weapons/vandal/killstreamicon.png',
        weaponStats: mockWeaponDataInput[0].weaponStats,
      });
    });

    it('should filter weapons by name when provided', () => {
      const result = mapper.mapWeapons(mockWeaponDataInput, 'Vandal');

      expect(result).toHaveLength(1);
      expect(result[0].weaponName).toBe('Vandal');
    });

    it('should filter weapons by type when provided', () => {
      const result = mapper.mapWeapons(mockWeaponDataInput, null, 'Rifle');

      expect(result).toHaveLength(1);
      expect(result[0].weaponName).toBe('Vandal');
      expect(result[0].weaponType).toBe('Rifle');
    });

    it('should handle case insensitive filtering for name', () => {
      const result = mapper.mapWeapons(mockWeaponDataInput, 'vandal');

      expect(result).toHaveLength(1);
      expect(result[0].weaponName).toBe('Vandal');
    });

    it('should handle case insensitive filtering for type', () => {
      const result = mapper.mapWeapons(mockWeaponDataInput, null, 'rifle');

      expect(result).toHaveLength(1);
      expect(result[0].weaponType).toBe('Rifle');
    });

    it('should return empty array when no weapons match filters', () => {
      const result = mapper.mapWeapons(
        mockWeaponDataInput,
        'NonExistentWeapon',
      );

      expect(result).toHaveLength(0);
    });

    it('should throw error when input data is empty', () => {
      expect(() => mapper.mapWeapons([])).toThrow('Unable to retrieve weapon');
    });
  });

  describe('getCategory', () => {
    it('should remove EEquippableCategory:: prefix', () => {
      const result = (mapper as any).getCategory('EEquippableCategory::Rifle');

      expect(result).toBe('Rifle');
    });

    it('should return the same string if prefix is not present', () => {
      const result = (mapper as any).getCategory('Rifle');

      expect(result).toBe('Rifle');
    });
  });
});
