import { Platform, ToastController } from "@ionic/angular";
import { Component } from "@angular/core";
import { Camera } from "@ionic-native/camera/ngx";
import { Geolocation, Geoposition } from "@ionic-native/geolocation/ngx";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  ubicacion = { lat: 0, long: 0 };
  ruta: String;
  //En este proyecto ya tenemos instalado el geolocation
  constructor(
    private plat: Platform,
    private camera: Camera,
    public toast: ToastController,
    private geolocation: Geolocation
  ) {}
  localizar() {
    this.plat
      .ready()
      .then(() => {
        this.geolocation
          .getCurrentPosition()
          .then((info) => {
            this.ubicacion.lat = info.coords.latitude;
            this.ubicacion.long = info.coords.longitude;
          })
          .catch();
      })
      .catch();
  }
  tomarFoto() {
    this.plat
      .ready()
      .then(() => {
        this.camera.getPicture().then((path) => {
          alert(path);
          this.ruta = path;
        });
      })
      .catch(() => {});
  }
}
