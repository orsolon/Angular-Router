import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SideMenuComponent } from './categories-menu/categories-menu.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { CoursecardsComponent } from './coursecards/coursecards.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'courses',
      component: CoursesComponent,
        children: [
          {
              path: '',
              component: CoursecardsComponent
          },
          {
            path: ':id',
            component: CourseCategoryComponent
          },
          {
            path: '',
            outlet: 'sidemenu',
            component: SideMenuComponent
          },
          {
            path: ':id',
            outlet: 'sidemenu',
            component: SideMenuComponent
        }
      ]
    },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
