import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor() { }

  printData() {
    return [
      { name: 'Varsha', email: 'varsha@gmail.com', phone: ['11111', '00000'] },
      { name: 'Harsha', email: 'Harsha@gmail.com', phone: ['2222', '00000'] },
      { name: 'Geeta', email: 'Geeta@gmail.com', phone: ['3333', '00000'] },
      { name: 'Seeta', email: 'Seeta@gmail.com', phone: ['444', '00000'] },
      { name: 'Neeta', email: 'Naeeta@gmail.com', phone: ['555', '00000'] }
    ]
  }
}
