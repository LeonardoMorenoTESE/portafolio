import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: infoPagina ={};
  cargada = false;
  equipo:any[] =[];
  constructor(private http:HttpClient) 
  {
    //console.log("Servicio de info pagina listo"); 
    this.cargarInfo();
    this.cargarEquipo();
  }
private cargarInfo(){
  this.http.get('assets/data/data-pagina.json')
  .subscribe(resp =>{
    this.cargada = true;
    this.info = resp;
    //console.log(resp['twitter']);
    this.cargarInfo;
  });

}
private cargarEquipo(){
  //datos de firebase
  this.http.get("https://angular-html-dd7eb.firebaseio.com/equipo.json")
  .subscribe((resp:any[])=>{
      //console.log(resp);
     this.equipo = resp;
     
  })
}

 }
