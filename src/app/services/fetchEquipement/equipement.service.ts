import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  constructor(private http:HttpClient) { }

  getEquipmentsFromApi(data:string) {
    return this.http.get<any>('https://fr.dofus.dofapi.fr/equipments?filter[where][type]='+data+'&filter[where][level]=200');
  }
  getWeaponsFromApi() {
    return this.http.get<any>('https://fr.dofus.dofapi.fr/weapons?filter[where][level]=200');
  }
  getPetsFromApi() {
    return this.http.get<any>('https://fr.dofus.dofapi.fr/pets');
  }

 
}

