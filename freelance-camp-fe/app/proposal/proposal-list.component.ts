import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
  styleUrls: ['proposal-list.component.css'],
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'abc company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@de=vcamp.com')
  proposalTwo: Proposal = new Proposal(99, 'xyz company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@de=vcamp.com')
  proposalThree: Proposal = new Proposal(300, 'something company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@de=vcamp.com')    
  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
    ]
}

