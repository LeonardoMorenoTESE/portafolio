import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos : Producto[] =[];
  id : String;
  constructor(private http: HttpClient, private route: ActivatedRoute) { 
    this.cargarProductos();
    
    
   
    
  }
  
  private cargarProductos(){
    this.http.get('https://angular-html-dd7eb.firebaseio.com/productos_idx.json')
    .subscribe((resp: Producto[]) =>{
      console.log(resp);
      this.productos = resp;
      setTimeout(() => {
        this.cargando = false;
    },1000);
    });

  }
  public getProducto(id:String){
    return this.http.get(`https://angular-html-dd7eb.firebaseio.com/productos/${id}.json`);
    /*console.log(`https://angular-html-dd7eb.firebaseio.com/productos/${id}'.json`);*/

  }
}
