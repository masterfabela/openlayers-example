import { Map, Tile, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import TileSource from 'ol/source/Tile';

export let map;

/**
 * Devuelve el mapa creado
 * @returns {Map} Mapa creado
 */
const createMap = (source) => {
  return new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: source ?? new OSM(),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 0,
    }),
  });
};

/**
 * Obtiene el mapa manejado en la aplicacion
 * @returns {Map} Mapa guardado
 */
export const getMap = () => {
  if (!map) {
    map = createMap();
  }
  return map;
};

/**
 * Change the source of the actual tile
 * @param {TileSource} newSource
 */
export const changeSource = (newSource) => {
  let layer = getMap().getLayers().getArray()[0];
  layer.setSource(newSource);
};
