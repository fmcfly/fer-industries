import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  persona:Persona;
  emailstring:string;
  constructor() { 
    this.persona = new Persona();
    this.emailstring = "mailto:ferindustries97@gmail.com?Subject=Curso Programacion&body=Estoy interesado en el curso y quisiera información acerca del mismo";
  }

  ngOnInit() {
  }

  contactar(){
    console.log(this.persona);
  }

}

export class Persona{
  name:string;
  email:string;
  phone:string;
  message:string;
}