import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IAuthUser } from './i-auth-user.dto';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private _jwtHelper: JwtHelperService) { }

  public isTokenValid(): boolean {
    return this._isValidToken();
  }

  private _isValidToken(): boolean {
    const token = this._getToken();

    if (token && !this._jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      this._removeToken();
      return false;
    }
  }

  public getToken(): string | null {
    return this._getToken();
  }

  private _getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  public removeToken(): void {
    this._removeToken();
  }

  private _removeToken(): void {
    localStorage.removeItem('jwt');
  }

  // ToDo: if token is invalid?
  public addToken(token: string): void { // maybe boolean true (valid token) or false (invalid token)
    if (token && !this._jwtHelper.isTokenExpired(token)) {
      localStorage.setItem('jwt', token);
    }
  }

  public getUser(): IAuthUser | null {
    const token = this._getToken();

    if (token && !this._jwtHelper.isTokenExpired(token)) {

      const tokenDecoded = this._jwtHelper.decodeToken(token);

      return <IAuthUser>{
        userName: tokenDecoded.unique_name, //
        avatar: tokenDecoded.ImageUrl,
        defaultLocationLatitude: Number(tokenDecoded.Lat),
        defaultLocationLongitude: Number(tokenDecoded.Lng)
      };

    } else {
      return null;
    }
  }


  // public getFlikrKey(): string {
  //   const token = this._getToken();

  //   if (token && !this._jwtHelper.isTokenExpired(token)) {
  //     const tokenDecoded = this._jwtHelper.decodeToken(token);
  //     return tokenDecoded.FlickrKey;
  //   } else {
  //     return 'null';
  //   }
  // }
}

  // public checkIsRecordOwner(username: string): boolean {
  //   const token = this._getToken();

  //   if (token && !this._jwtHelper.isTokenExpired(token)) {
  //     const tokenDecoded = this._jwtHelper.decodeToken(token);

  //     if (tokenDecoded.unique_name === username) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     this._removeToken();
  //     return false;
  //   }
  // }

  // public GetAuthenticatedUserDetails() {
  //   const token = localStorage.getItem('jwt');
  //   if (token && !this._jwtHelper.isTokenExpired(token)) {
  //     const tokenDecoded = this._jwtHelper.decodeToken(token);

  //     const user = <UserViewModel>{
  //       userName: tokenDecoded.unique_name,
  //       avatar: tokenDecoded.ImageUrl,
  //       defaultLocationLatitude: Number(tokenDecoded.DefaultLatitude),
  //       defaultLocationLongitude: Number(tokenDecoded.DefaultLongitude)
  //     };
  //     return user;
  //   } else {
  //     this._service.logout();
  //     return;
  //   }
  // }

  // public GetUsername(): string {
  //   const token = localStorage.getItem('jwt');

  //   if (token && !this._jwtHelper.isTokenExpired(token)) {
  //     const tokenDecoded = this._jwtHelper.decodeToken(token);
  //     return tokenDecoded.unique_name;
  //   } else {
  //     this._service.logout();
  //     return 'null';
  //   }
  // }

// setToken(token: string) {
//   if (token) {
//     this.jwtToken = token;
//   }
// }

// ************* jwtHlper does this....
// decodeToken() {
//   if (this.jwtToken) {
//   this.decodedToken = jwt_decode(this.jwtToken);
//   }
// }

// getDecodeToken() {
//   return jwt_decode(this.jwtToken);
// }

// getUser() {
//   this.decodeToken();
//   return this.decodedToken ? this.decodedToken.displayname : null;
// }

// getEmailId() {
//   this.decodeToken();
//   return this.decodedToken ? this.decodedToken.email : null;
// }

// getExpiryTime() {
//   this.decodeToken();
//   return this.decodedToken ? this.decodedToken.exp : null;
// }

// isTokenExpired(): boolean {
//   const expiryTime: number = this.getExpiryTime();
//   if (expiryTime) {
//     return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
//   } else {
//     return false;
//   }
// }