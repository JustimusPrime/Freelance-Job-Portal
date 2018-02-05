import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents : Document[] = [
    {
      title: "My First Doc",
      description: 'long and boring description',
      file_url: "http://google.com",
      updated_at: '1/31/18',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My Second Doc",
      description: 'another long and boring description',
      file_url: "http://google.com",
      updated_at: '1/31/18',
      image_url: 'https://c1.staticflickr.com/5/4464/36928767894_eb2ecc151d_b.jpg',
    },
    {
      title: "My Last Doc",
      description: 'yet another long and boring description',
      file_url: "http://google.com",
      updated_at: '1/31/18',
      image_url: 'https://c1.staticflickr.com/3/2849/8843832088_e8bb3f3964_b.jpg',
    },        
  ]
}