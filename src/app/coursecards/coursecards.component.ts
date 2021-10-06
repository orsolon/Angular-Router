import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coursecards',
  templateUrl: './coursecards.component.html',
  styleUrls: ['./coursecards.component.css']
})
export class CoursecardsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  navigate(path: any) {
    this.router.navigate([{outlets: {primary: path, sidemenu:path}}], 
                         {relativeTo: this.route});
}

  ngOnInit(): void {
  }

}
