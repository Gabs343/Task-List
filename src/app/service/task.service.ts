import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Task} from "../Task";
import { environment } from '../../../env';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = environment.SERVER;

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    
    return this.http.get<Task[]>(this.apiUrl);
  }
}
