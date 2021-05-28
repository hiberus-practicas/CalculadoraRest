import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  private readonly URL  = environment.apiUrl + '/calculadora'
  constructor(private http: HttpClient) { }

  public sumar(num1: number, num2: number): Observable<string> {
    return this.http.get<string>(`${this.URL}/suma/${num1}/${num2}`);
  }
  public restar(num1: number, num2: number): Observable<string> {
    return this.http.get<string>(`${this.URL}/resta/${num1}/${num2}`);
  }
  public multiplicar(num1: number, num2: number): Observable<string> {
    return this.http.get<string>(`${this.URL}/multiplicacion/${num1}/${num2}`);
  }
  public dividir(num1: number, num2: number): Observable<string> {
    return this.http.get<string>(`${this.URL}/division/${num1}/${num2}`);
  }
  public resto(num1: number, num2: number): Observable<string> {
    return this.http.get<string>(`${this.URL}/resto/${num1}/${num2}`);
  }
  public elevar(num1: number, num2: number): Observable<string> {
    return this.http.get<string>(`${this.URL}/elevar/${num1}/${num2}`);
  }

}