import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EquipementService } from '../services/fetchEquipement/equipement.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-armes',
  templateUrl: './armes.component.html',
  styleUrls: ['./armes.component.scss']
})
export class ArmesComponent implements OnInit {
  equipments: any[] = [];
  statistics: any[] = [];
  idItem?: string;
  constructor(private equipementService: EquipementService,private router: Router) {
  }

  ngOnInit(): void {
    this.fetchArmes();
  }

  fetchArmes() {
    this.equipementService.getWeaponsFromApi().subscribe(data => {
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
