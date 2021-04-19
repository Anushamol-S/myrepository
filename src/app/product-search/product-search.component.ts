import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
search :any;
products :any;
  constructor(private ProductService : ProductServiceService,
    private route :ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
      console.log(this.search);
      this.ProductService.getProducts()
    .subscribe(res=>
        {console.log("res",res)
        this.products = res});
      
       console.log(this.products[1].id);
        
        
      }
      
}
