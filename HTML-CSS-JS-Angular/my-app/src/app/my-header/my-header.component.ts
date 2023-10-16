import { Component,Input ,OnInit} from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  @Input() item1=0;

ngOnInit()
{
  console.log("ng on init called ")
}
}