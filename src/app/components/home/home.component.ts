import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from 'src/app/store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public counter$ : Observable<any>;

  constructor( 
    private store: Store<any>
  ) {    
    this.counter$ = this.store.pipe(
      select('counterReducer')
    )
  }

  ngOnInit(){
  }

  increment(){
    this.store.dispatch(increment())
  }

  decrement(){
    this.store.dispatch(decrement())
  }
}
