import React from 'react';
import 'leaflet/dist/leaflet.css';
import './map.style.scss';
import * as utils from '../../utils/utils';

class MapComponent extends React.Component {
    render() {
        console.log("MC: ", this.props.map_center);
        console.log("MZ: ", this.props.map_zoom);

        let map = utils.map(this.props.map_center, this.props.map_zoom, this.props.countries, "cases");


        return(
            <div className={'map'}>
                {map}
            </div>
        )
    }
}

export default MapComponent;