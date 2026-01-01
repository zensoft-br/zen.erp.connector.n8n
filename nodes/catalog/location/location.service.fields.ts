import type { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    { name: 'CityCreate', value: 'cityCreate' },
    { name: 'CityDelete', value: 'cityDelete' },
    { name: 'CityOpFind', value: 'cityOpFind' },
    { name: 'CityRead', value: 'cityRead' },
    { name: 'CityReadById', value: 'cityReadById' },
    { name: 'CityUpdate', value: 'cityUpdate' },
    { name: 'CountryCreate', value: 'countryCreate' },
    { name: 'CountryDelete', value: 'countryDelete' },
    { name: 'CountryRead', value: 'countryRead' },
    { name: 'CountryReadById', value: 'countryReadById' },
    { name: 'CountryUpdate', value: 'countryUpdate' },
    { name: 'GeocodeRead', value: 'geocodeRead' },
    { name: 'StateCreate', value: 'stateCreate' },
    { name: 'StateDelete', value: 'stateDelete' },
    { name: 'StateRead', value: 'stateRead' },
    { name: 'StateReadById', value: 'stateReadById' },
    { name: 'StateUpdate', value: 'stateUpdate' },
    { name: 'ZipcodeRead', value: 'zipcodeRead' }
  ],
  default: 'cityCreate',
}];

export const fields: INodeProperties[] = [
  {
    displayName: 'ID',
    name: 'id',
    type: 'number',
    default: null,
  },
  {
    displayName: 'Body',
    name: 'body',
    type: 'json',
    default: {},
  },
];
