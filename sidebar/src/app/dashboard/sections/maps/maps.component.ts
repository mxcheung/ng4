import { Component, ViewChild, OnInit } from '@angular/core';
import { } from '@types/googlemaps';

declare var google: any;

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
    @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;
    latitude: any;
    longitude: any;

    constructor() { }

    ngOnInit() {
        var mapProp = {
            center: new google.maps.LatLng(-33.94292, 151.2393999),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }

    setMapType(mapTypeId: string) {
        this.map.setMapTypeId(mapTypeId)
    }

    setCenter() {
        this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

        let location = new google.maps.LatLng(this.latitude, this.longitude);

        let marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: 'Got you!'
        });

        marker.addListener('click', this.simpleMarkerHandler);

        marker.addListener('click', () => {
            this.markerHandler(marker);
        });
    }

    simpleMarkerHandler() {
        alert('Simple Component\'s function...');
    }

    markerHandler(marker: google.maps.Marker) {
        alert('Marker\'s Title: ' + marker.getTitle());
    }
}
