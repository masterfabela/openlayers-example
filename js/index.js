import { changeSource, getMap } from './map';
import { terrainLayer } from './layers';
import { Map, Overlay } from 'ol';

let map = getMap();
/**
 * @type {HTMLElement}
 */
let tooltip;
let tooltipOverlay = addTooltipOverlay(map);

document.getElementById('changeSource').onclick = () => {
  changeSource(terrainLayer);
};

/**
 *
 * @param {Map} map
 */
function addTooltipOverlay(map) {
  tooltip = document.getElementById('tooltip');
  let overlay = new Overlay({
    element: tooltip,
    offset: [10, 0],
    positioning: 'bottom-left',
  });
  map.addOverlay(overlay);
  return overlay;
}

function displayTooltip(evt) {
  let pixel = evt.pixel;
  tooltipOverlay.setPosition(evt.coordinate);
  let elementoAntiguo = document.getElementById('pixelData');
  elementoAntiguo?.remove();
  let elementoNuevo = document.createElement('p');
  elementoNuevo.id = 'pixelData';
  elementoNuevo.innerHTML = pixel;
  tooltip.appendChild(elementoNuevo);
  tooltip.style.display = evt.pixel ? '' : 'none';
}

map.on('pointermove', displayTooltip);
