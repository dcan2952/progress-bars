import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
  private endpointUrl = 'http://pb-api.herokuapp.com/bars'; 
  constructor(private http: Http) { }
  get() {
    return this.http.get(this.endpointUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
