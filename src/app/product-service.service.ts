import { Injectable } from '@angular/core';
import {HttpClient } from'@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
   
status;
errorMessage
  private baseurl = "https://sheltered-springs-67444.herokuapp.com/"
  constructor(private http :HttpClient) { }
  getProducts(){
    return this.http.get(this.baseurl + 'product'  )
  }

  getProductDetails(id){
    return this.http.get(this.baseurl  + 'product/' +id ) ; 
  }

  postProductDetails(strdata){
   // return this.http.post( this.baseurl + 'product/',strdata);
      return this.http.post(this.baseurl + 'product/',strdata).toPromise().then(data =>{
       console.log(data);
     });
  }
  deleteProduct(id){
    console.log("value",id)
    return  this.http.delete(this.baseurl+ 'product/'+id);
  }
}
   