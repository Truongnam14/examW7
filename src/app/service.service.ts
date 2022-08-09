import { Injectable } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { collectionData, collection, Firestore, setDoc, doc, deleteDoc } from '@angular/fire/firestore';
import{addDoc} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private fs: Firestore) { 
 
  }

  getALl(){
    return collectionData(collection(this.fs, "tasks"), { idField: 'id' });
  }

  async createTask(
    title: string
  ){
    await addDoc(collection(this.fs, "tasks"), { title: title })

  }

  delete(task: string){
    return deleteDoc(doc(this.fs,'tasks/'+task))
  }


}

