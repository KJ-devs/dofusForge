import { Component, OnInit } from '@angular/core';
import { EquipementService } from '../services/fetchEquipement/equipement.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coiffe',
  templateUrl: './coiffe.component.html',
  styleUrls: ['./coiffe.component.scss']
})
export class CoiffeComponent implements OnInit {
  equipments: any[] = [];
  statistics: any[] = [];
  idItem?: string;
  constructor(private equipementService: EquipementService,private router: Router) {

  }

  ngOnInit(): void {
    this.fetchCoiffe();
  }

  fetchCoiffe() {
    this.equipementService.getEquipmentsFromApi('Chapeau').subscribe(data => {
      this.equipments = data;
      this.statistics = data.statistics;
    });
  }
  getEquipementById(equipement : any,items: string | null) {  
    if (equipement != null && items != null) {
      localStorage.setItem(items, JSON.stringify(equipement));
      console.log(JSON.parse(localStorage.getItem(items) || '{}'));
      this.router.navigate(['/creationStuff']).then(() => {
        window.location.reload();
      });
    }
  }
}
