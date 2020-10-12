import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarker from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanegeMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="logo"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Santos</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

           <Map 
                center={[-23.9720619,-46.3551055]}
                zoom={15}
                style={
                    {
                        width: '100%',
                        height: '100%'
                    }
                }
           >
               <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
           </Map>    

            <Link to="" className="createOrphanage">
                <FiPlus  size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanegeMap;