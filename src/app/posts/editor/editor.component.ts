import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  post = new FormGroup({
    title: new FormControl('default title', Validators.required),
    body: new FormControl(null, [
      Validators.required,
      Validators.minLength(10)
    ]),
    tags: new FormArray([
      new FormControl('Angular'),
      new FormControl('HTML'),
      new FormControl('CSS')
    ]),
    seo: new FormGroup({
      meta: new FormControl('angular')
    })
  });

  get tags(): FormArray {
    return this.post.get('tags') as FormArray;
  }

  constructor() {}

  ngOnInit() {}

  addTag(tag) {
    if (tag) {
      this.tags.push(new FormControl(tag));
    }
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  createPost() {
    console.log(this.post.value);
  }
}
