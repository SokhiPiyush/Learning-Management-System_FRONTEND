import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiurls } from '../auth.url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dummyId:number=52;
  http = inject(HttpClient);

  registerService(registerObj: any){
    return this.http.post<any>(`${apiurls.authServiceApi}/`, registerObj);
  }

  loginService(loginObj: any){
    return this.http.post<any>(`${apiurls.authServiceApi}login`, loginObj);
  }
  
  updateProfileService(ProfileObj: any){
    return this.http.put<any>(`${apiurls.authServiceApi}/${this.dummyId}`,ProfileObj);
  }

  getProfileDataService(){
    return this.http.get<any>(`${apiurls.authServiceApi}/profile/${this.dummyId}`);
  }

}
