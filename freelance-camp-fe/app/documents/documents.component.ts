import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents : Document[] = [
    {
      title: "My First Doc",
      description: 'long and boring description',
      file_url: "http://google.com",
      updated_at: '1/31/18',
      image_url: 'http://google.com',
    },
    {
      title: "My Second Doc",
      description: 'long and boring description',
      file_url: "http://google.com",
      updated_at: '1/31/18',
      image_url: 'http://google.com',
    },
    {
      title: "My Last Doc",
      description: 'long and boring description',
      file_url: "http://google.com",
      updated_at: '1/31/18',
      image_url: 'http://google.com',
    },        
  ]
}