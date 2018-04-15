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

    constructor() { }

    ngOnInit() {
        var mapProp = {
            center: new google.maps.LatLng(18.5793, 73.8143),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    }

}
