import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export  interface Category {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient,
              private fireStore: AngularFirestore) {
    this.getCategories().subscribe(data => {
      if (!data || data.length === 0) {
        this.createCategories();
      }
    });
  }

  public getCategories(): Observable<Category[]> {
    return this.fireStore
      .collection<Category>('categories')
      .valueChanges();
  }

  private createCategories() {
    this.httpClient
      .get<any[]>('assets/categories.json')
      .subscribe(data => {
      data.forEach(c => {
        for (const key of Object.keys(c)) {
          const category: Category = {id: key, name: c[key].name};
          this.fireStore
            .collection('categories')
            .doc(key)
            .set(category);
        }
      });
    });
  }
}
