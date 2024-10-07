import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-locais',
  templateUrl: 'locais.page.html',
  styleUrls: ['locais.page.scss'],
})
export class LocaisPage implements AfterViewInit, OnDestroy {
  map?: L.Map;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeMap();
    }, 100); // Delay de 100 milissegundos
  }

  initializeMap() {
    // Configuração dos ícones do Leaflet
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
      iconUrl: 'assets/leaflet/marker-icon.png',
      shadowUrl: 'assets/leaflet/marker-shadow.png'
    });

    // Inicializa o mapa com a latitude e longitude definidas
    this.map = L.map('map').setView([-22.874011, -43.457357], 13); // Reduza o nível de zoom

    // Adiciona a camada de tiles do OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Marcador
    L.marker([-22.874011, -43.457357]).addTo(this.map)
      .bindPopup('Estádio Moça Bonita.  <br> R. Sul América, 950 - Bangu, Rio de Janeiro - RJ, 21870-102')
      .openPopup();
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }
}



