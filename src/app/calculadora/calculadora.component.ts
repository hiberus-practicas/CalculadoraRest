import { Component, Input, OnInit, SystemJsNgModuleLoader } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  salida:string =" ";
  salida2:string ="";

  ngOnInit(): void {
  }

  anadir1():void{
    this.salida= this.salida+ '1';
  }
  anadir2():void{
    this.salida= this.salida+ '2';
  }
  anadir3():void{
    this.salida= this.salida+ '3';
  }
  anadir4():void{
    this.salida= this.salida+ '4';
  }
  anadir5():void{
    this.salida= this.salida+ '5';
  }
  anadir6():void{
    this.salida= this.salida+ '6';
  }
  anadir7():void{
    this.salida= this.salida+ '7';
  }
  anadir8():void{
    this.salida= this.salida+ '8';
  }
  anadir9():void{
    this.salida= this.salida+ '9';
  }
  anadir0():void{
    this.salida= this.salida+ '0';
  }
  anadirMas():void{
    this.salida2=this.salida + "+";
    this.salida= "";
  }
  anadirMenos():void{
    this.salida2=this.salida + "-";
    this.salida= "";
  }
  anadirProducto():void{
    this.salida2=this.salida + "*";
    this.salida= "";
  }
  anadirDivision():void{
    this.salida2=this.salida + "/";
    this.salida= "";
  }
  resultado():void{
    switch(this.salida2.substring(this.salida2.length-1)){
      case "+":
        this.suma();
        break;
      case "-":
        this.resta();
        break;
      case "*":
        this.producto();
        break;
      case "/":
        this.division();
        break;
      default:
        alert("MAAAAAAAAAAAAL");
        break;
    }

  }
  borrar():void{
  this.salida="";

  }
  borrartodo():void{
    this.salida="";
    this.salida2="";

  }
  private suma():void{
    let numero1:number=Number(this.salida);
    let numero2:number=Number(this.salida2.substring(0,this.salida2.length-1));
    console.log(numero2);
    
    this.salida=""+(numero1+numero2);
    this.salida2 = numero2 + "+" + numero1 + "=" + (numero1 + numero2);
  }
  private resta():void{
    let numero1:number=Number(this.salida);
    let numero2:number=Number(this.salida2.substring(0,this.salida2.length-1));
    this.salida=""+ (numero2-numero1);
    this.salida2 = numero2 + "-" + numero1 + "=" + (numero2 - numero1);
  }
  private producto():void{
    let numero1:number=Number(this.salida);
    let numero2:number=Number(this.salida2.substring(0,this.salida2.length-1));
    this.salida=""+(numero1*numero2);
    this.salida2 = numero2 + "*" + numero1 + "=" + (numero1 * numero2);
  }
  private division():void{
    let numero1:number=Number(this.salida);
    let numero2:number=Number(this.salida2.substring(0,this.salida2.length-1));
    this.salida=""+(numero2/numero1);
    this.salida2 = numero2 + "/" + numero1 + "=" + (numero2 / numero1);
  }
  

}
