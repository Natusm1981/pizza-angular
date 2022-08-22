import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';


@Component({
  selector: 'app-app-local',
  templateUrl: './app-local.component.html',
  styleUrls: ['./app-local.component.css']
})
export class AppLocalComponent implements OnInit{

  constructor() {  }

  ngOnInit(): void {

    const loader = new Loader({
      apiKey: "xxXXxx",
      version: "weekly",
    });

    loader.load().then(() => {
        let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -29.187971603779502, lng: -51.20708510585617 },
        zoom: 18

      });

      map.setClickableIcons(false);
      map.setOptions({
        disableDefaultUI: true,
        keyboardShortcuts: false,
        zoomControl: false,
        zoom: 17,

      })
    });

  }


}


