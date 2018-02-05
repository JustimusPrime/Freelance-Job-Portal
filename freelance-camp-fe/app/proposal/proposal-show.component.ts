import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html'
})
export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  constructor(
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
      params => {
         this.id = +params['id'];
      }
    )
  }
}

// dependency injection - private - value of argument - data type
// want to let component know that as soon as new class has been istantiated (when someone goes to the proposal show page) it will immediately call this constructor, which will call an instance of this activated route and store it in this route argument which we can use throughout the rest of our class

// subcribe - something that gives access to the object you wanna communicate with. 