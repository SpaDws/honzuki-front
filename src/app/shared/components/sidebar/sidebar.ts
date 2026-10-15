import { Component } from '@angular/core';
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
  imports: [MatSlideToggle],
  selector: 'app-sidebar',
  styleUrl: './sidebar.scss',
  templateUrl: './sidebar.html',
})
export class Sidebar {}
