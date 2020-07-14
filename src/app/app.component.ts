import { RestService } from './rest.service';
import { Component } from '@angular/core';
import { Weather } from './Weather';
import { Results } from './Results';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
  title = 'AngularFlask';
  constructor(private rs: RestService) { }
  headers = ['day', 'temperature', 'windspeed', 'event'];
  headers1 = ['name', 'output'];

  weather: Weather[] = [];
  results: Results[] = [];
  num:string;
  s: string;
  // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
    setInterval(() => {
    }, 1000);
    this.rs.readWeather()
      .subscribe
      (
        (response) => {
          // tslint:disable-next-line:no-string-literal
          console.log('Data in app' + data);
          this.weather = response[0]['data'];
          console.log('Data of Weather' + weather);
        },
        (error) => {
          console.log('No Data Found of Weather' + error);
        }

      );

    setInterval(() => {
    }, 1000);
    this.rs.readResults()
      .subscribe
      (
        (response) => {
          // tslint:disable-next-line:no-string-literal
          this.results = response[0]['data'];
        },
        (error) => {
          console.log('No Data Found of Results' + error);
        }

      );
      this.rs.readMachine()
      .subscribe
      (
        (response) => {
          // tslint:disable-next-line:no-string-literal
          this.num = response;
        },
        (error) => {
          console.log('No Data Found' + error);
        }

      );
      // this.rs.readResults()
      // .subscribe
      // (
      //   (response) => {
      //     // tslint:disable-next-line:no-string-literal
      //     this.s = response;
      //   },
      //   (error) => {
      //     console.log('No Data Found' + error);
      //   }

      // );

  }
}
