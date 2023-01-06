import { Component, OnInit } from '@angular/core';
import { StuffService } from '../services/database/Stuff/stuff.service';


@Component({
  selector: 'app-all-stuff',
  templateUrl: './all-stuff.component.html',
  styleUrls: ['./all-stuff.component.scss']
})
export class AllStuffComponent implements OnInit {
  stuffs!: any;
  constructor(private stuff: StuffService) { }

  ngOnInit(): void {
    this.stuff.getAllStuff().subscribe((data: any) => {
      this.stuffs = data;
      console.log(data);
    });
  }
  supprimer(id: string) {
    this.stuff.delete(id);
  }
}
