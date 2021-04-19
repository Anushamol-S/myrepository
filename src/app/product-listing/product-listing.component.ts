import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products :any= [];
  isDelete =[];
  product; status;errorMessage
  isLoading = true;
  constructor(private ProductService : ProductServiceService,private router :Router) { }

  ngOnInit():void{
    this.ProductService.getProducts()
    .subscribe(res=>
    {console.log("res",res)
    this.products = res},

    err =>{console.log (err)},
    ()=> { this.isLoading  = false;}
    );

   
  
    }
    delete(id) {
      var a= confirm("Do You really want to delete");
      
       if( a== true){ 
              this.isDelete[id]  = true;
               this.ProductService.deleteProduct(id)
                                .subscribe({
                                  next: data => {
                                      this.status = 'Delete successful';
                                  },
                                  error: error => {
                                      this.errorMessage = error.message;
                                      console.error('There was an error!', error);
                                  }
                              });
               setTimeout(()=>{location.reload()}, 1000);
               
              
              
   
       }
       
       else{
        this.router.navigate(['']);
       
       }
       
   }
   
}

 
