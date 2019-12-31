import { Component, OnInit, OnDestroy } from '@angular/core';

import {GeneratorService} from './../../../core/services/generator.service';
import { EmployeeData } from 'src/app/core/models/employee.model';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

const names = ['nahuel', 'rita', 'nicolas', 'mariza', 'virginia'];
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  saleLists: EmployeeData[] = [];
  bLists: EmployeeData[] = [];
  var;

  value: number;
  value$: Observable<number>;
  sub$: Subscription;

  constructor(
    private generatorService: GeneratorService
  ) {
    this.value$ = this.generatorService.getData()
    .pipe(
      tap( num => console.log(`Number: ${num}`))
    );
    
    this.var = 1;
    this.var = '1';
    
    ;
  }

  ngOnInit() {
    this.saleLists = this.generatorService.generate(names, [ 10, 20], 10);
    this.bLists = this.generatorService.generate(names, [ 10, 20], 10);

    // this.sub$ = this.generatorService.getData().subscribe( value => {
    //   this.value = value;
    //   console.log(this.value);
    // });
  }

  ngOnDestroy() {
    console.log('Destroy');
    // this.sub$.unsubscribe();
  }
  addItem(list: EmployeeData[], label: string) {

    list.unshift({
      label,
      num: this.generatorService.generateNumber([1, 100]),
    });

  }
}
