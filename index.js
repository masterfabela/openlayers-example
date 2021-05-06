import { changeSource, getMap } from './map';
import { XYZ } from 'ol/source';

getMap();

document.getElementById('changeSource').onclick = () => {
  changeSource(
    new XYZ({
      url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
    })
  );
};
