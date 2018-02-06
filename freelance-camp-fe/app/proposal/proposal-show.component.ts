import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/RX';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css'],
  providers: [ ProposalService ],
})
export class ProposalShowComponent implements OnInit {
  constructor(
    private http: Http,
    private proposalService: ProposalService,
    private route: ActivatedRoute,
    ) {}

  @Input()
  proposal: Proposal;

  ngOnInit(): void {
    let proposalRequest = this.route.params
        .flatMap((params: Params) =>
          this.proposalService.getProposal(+params['id']));
    proposalRequest.subscribe(reponse => this.proposal = reponse.json());
  }
}

// dependency injection - private - value of argument - data type
// want to let component know that as soon as new class has been istantiated (when someone goes to the proposal show page) it will immediately call this constructor, which will call an instance of this activated route and store it in this route argument which we can use throughout the rest of our class

// subcribe - something that gives access to the object you wanna communicate with. 