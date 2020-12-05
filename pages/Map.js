import React from 'react'

const Map = () => {
    return (
        <div className="map">
            <iframe title="google maps" width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2431%20rockdell%20st&t=&z=14&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
            </iframe>

            <style jsx>{`
                .map {
                    height: 500px;
                }
                .map iframe {
                    width: 100%;
                    height: 500px;
                }
            `}</style>
        </div>
    )
}

export default Map
