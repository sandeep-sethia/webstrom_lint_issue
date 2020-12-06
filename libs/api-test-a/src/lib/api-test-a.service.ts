import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiTestAService {

  string_concat(string1: string, string2: string): string {
    return string1 + string2;
  }
}
