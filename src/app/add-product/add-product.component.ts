import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
import { Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
 


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  Addproduct : FormGroup;
  data :any;
  

  constructor( private formbuilder : FormBuilder, private ProductService :ProductServiceService ,private router :Router) { }

  ngOnInit(): void {

     this.Addproduct = this.formbuilder.group({
       title_name : ["",Validators.required],
       image_url :["",Validators.required],
       description :["",Validators.required],
     });

  }
  
 
 
  onSubmit(){
    if (this.Addproduct.valid){
      var body ={
        "title": this.Addproduct.value.title_name ,
        "imageUrl": this.Addproduct.value.image_url,
         "description":this.Addproduct.value.description 
      } ;
      // this.ProductService.postProductDetails(body);
      this.ProductService.postProductDetails(this.Addproduct.value).subscribe(res=>{console.log(res)});

      this.router.navigate (['']);
     
      setTimeout(
        function(){ 
        location.reload(); 
        }, 1000);
      
    }

  }

}
