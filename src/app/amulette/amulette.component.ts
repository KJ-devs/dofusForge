import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EquipementService } from '../services/fetchEquipement/equipement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amulette',
  templateUrl: './amulette.component.html',
  styleUrls: ['./amulette.component.scss']
})
export class AmuletteComponent implements OnInit {
  equipments: any[] = [];
  statistics: any[] = [];

  constructor(private equipementService: EquipementService,private router: Router) {
  }

  ngOnInit(): void {
    this.fetchAmulettes();
  }

  fetchAmulettes() {
    this.equipementService.getEquipmentsFromApi('Amulette').subscribe(data => {
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