import axios from 'axios';
import { fetchApiResource } from '../../../src/infrastructure/services/fetch-api.service';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchApiResource', () => {
  const apiUrl = 'http://test-api';
  const oldEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...oldEnv, API_URL: apiUrl };
  });

  afterEach(() => {
    process.env = oldEnv;
    jest.clearAllMocks();
  });

  it('should fetch data and return the response data', async () => {
    const mockData = { foo: 'bar' };
    mockedAxios.get.mockResolvedValueOnce({ data: { data: mockData } });

    const result = await fetchApiResource<typeof mockData>('test-path');
    expect(mockedAxios.get).toHaveBeenCalledWith(`${apiUrl}/test-path`);
    expect(result).toEqual(mockData);
  });

  it('should throw if axios throws', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));
    await expect(fetchApiResource('fail-path')).rejects.toThrow('Network error');
  });
});
