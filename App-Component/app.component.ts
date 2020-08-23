import { Component, OnInit } from '@angular/core';
import { Menu } from 'projects/menu/src/lib/menu';
import { Slider } from 'projects/carousel/src/lib/slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Menu[] = [
    {
      name: 'Home',
      url: '/home',
      roles: ["*"]
    },
    {
      name: 'Administration',
      url: undefined,
      roles: ['ADMIN'],
      subItems: [
        {
          name: "Institution",
          url: "/institution",
          roles: ['ADMIN']
        },
        {
          name: "Branch",
          url: "/branch",
          roles: ['ADMIN']
        },
        {
          name: "Batch",
          url: "/batch",
          roles: ['ADMIN']
        },
        {
          name: "Student",
          url: "/student",
          roles: ['ADMIN']
        }
      ]
    },
    {
      name: "Learn",
      url: undefined,
      roles: ['ADMIN', 'COACH', 'STUDENT'],
      subItems: [{
        name: "videos",
        url: "/videos",
        roles: ['ADMIN', 'COACH', 'STUDENT']
      }]
    },
    {
      name: "Puzzles",
      url: undefined,
      roles: ['ADMIN', 'COACH', 'STUDENT'],
      subItems: [
        {
          name: "Collection",
          url: "/puzzle-collection",
          roles: ['ADMIN', 'COACH', 'STUDENT']
        }]
    },
    {
      name: "Fee",
      url: undefined,
      roles: ['STUDENT'],
      subItems: [
        {
          name: "Payment",
          url: "/fee-payment-history",
          roles: ['STUDENT']
        }]
    },
    {
      name: "My Profile",
      url: "/student-profile",
      roles: ['STUDENT']
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public doLogout(user: string) {
    this.router.navigate(['/home']);
  }
}