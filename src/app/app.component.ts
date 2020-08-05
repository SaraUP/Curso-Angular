import { Component, OnInit } from '@angular/core';
import { from, fromEvent} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';

  ngOnInit(){
  
  /* const aux = [7, 5, 3, 1, 9, 6, 7, 8];
  const index = aux.findIndex(s => s === 3);
  console.log(index)

  const aux2 = aux.filter(s => s % 2 === 0);
  console.log('pares: ', aux2)

  const aux3 = aux.map(s => s * 2)
  console.log('map: ', aux3)
  //console.log('sort: ', aux3.sort())

  //Spread operator --> Recorrer un array
  const aux5 = [1000, 2000, ...aux];
  console.log('spread: ', aux5)

  const aux6 = {
    name: 'Sara',
    lastName: 'Uriarte'
  }

  const aux7 = {address: 'Auquisamaña', ...aux6}
  console.log('spread 2: ', aux7)

  //Destructuring --> Desestructuración
  const persona = {
    data: {
      name: 'Sara',
      response: []
    },
    address: {
      n: 101,
      extra: 'Calle'
    }
  }

  const {data, address} = persona;
  console.log('data: ', data)
  console.log('address', address)

  for(let index=0; index<aux.length; index++){
    console.log('FOR: ', index)
  }

  if(2 > 1) {
    return 'YES'
  } else {
    return 'NO'
  }

  2 > 1 ? 'SI' : 'CLARO QUE NO'; */

  const array = from([1,2,3,4,5,6]);

  array.subscribe(s => console.log('items', s))

  const auux = fromEvent(document, 'mousemove');

  auux.subscribe((a:any) => console.log('event: ', a.clientX + ', ' + a.clientY));
  }

}