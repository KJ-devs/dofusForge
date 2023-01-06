import { Component, OnInit } from '@angular/core';
import { EquipementService } from '../services/fetchEquipement/equipement.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-familier',
  templateUrl: './familier.component.html',
  styleUrls: ['./familier.component.scss']
})
export class FamilierComponent implements OnInit {
  pets: any[] = [];
  statistics: any[] = [];
  idItem?: string;
  constructor(private equipementService: EquipementService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchPets();
  }

  fetchPets() {
    this.equipementService.getPetsFromApi().subscribe(data => {
      this.pets = data;
      this.statistics = data.statistics;
    });
  }
  getEquipementById(equipement: any, items: string | null) {
    if (equipement != null && items != null) {
      localStorage.setItem(items, JSON.stringify(equipement));
      console.log(JSON.parse(localStorage.getItem(items) || '{}'));
      this.router.navigate(['/creationStuff']).then(() => {
        window.location.reload();
      });
    }
  }
}