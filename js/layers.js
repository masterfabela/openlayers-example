import { XYZ, OSM } from 'ol/source';

export const terrainLayer = new XYZ({
  url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
});

export const openStreetMap = new OSM();
