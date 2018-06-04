import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
    'Authorization' : 'Bearer BQDutEpEdoIlk0SLm8Jzmek8NWIQP1mMEXv35p_bhZMOq3e4ARkdwXOQ4cALRT6fJpb9Z0bgsoyaWm7A8no'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}
