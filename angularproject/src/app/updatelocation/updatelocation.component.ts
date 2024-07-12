import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location/location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../location/location.model';

@Component({
  selector: 'app-updatelocation',
  templateUrl: './updatelocation.component.html',
  styleUrl: './updatelocation.component.css'
})
export class UpdatelocationComponent implements OnInit{
  
  id: string="";
  location:Location = new Location();

  constructor(
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute,
  ){
    
  }


  ngOnInit(): void {
    this.location= new Location();
    this.id= this.route.snapshot.params['id'];
    this.locationService.getById(this.id)
      .subscribe({
          next: (res:any)=>{
            this.location=res;
            console.log(res);
          },

          error: (err:any)=>{
            console.log(err);
          }
      });
  }

}
