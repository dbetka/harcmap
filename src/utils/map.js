import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

export function createMap (name) {
  if (!name) {
    console.error('Error: `name` for map is necessary')
    return
  }
  window.map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: name,
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  })
}
