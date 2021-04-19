import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-prouct-details',
  templateUrl: './prouct-details.component.html',
  styleUrls: ['./prouct-details.component.scss']
})
export class ProuctDetailsComponent implements OnInit {

  product :any =null;
  isLoad = true;
  constructor(private productService : ProductServiceService,
    private route :ActivatedRoute   ) { }

  ngOnInit(): void {

          this.route.params.subscribe(value =>{
          this.productService.getProductDetails(value.id )
          .subscribe(res =>{this.product = res},
             err =>{console.log (err)}
             , ()=> { this.isLoad  = false;})
          });

      }
    
}
