import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { LoginModule } from 'projects/login/src/public-api';
import { MenuModule } from 'projects/menu/src/public-api';
import { CarouselModule } from 'projects/carousel/src/public-api';
import { FacebookPostsModule } from 'projects/facebook-posts/src/public-api';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { InstitutionComponent } from './components/institution/institution.component';
import { InstitutionResolver } from './components/institution/institution.resolver';
import { BranchComponent } from './components/branch/branch.component';
import { BranchAddComponent } from './components/branch-add/branch-add.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { BatchComponent } from './components/batch/batch.component';
import { TimeModule } from 'projects/time/src/public-api';
import { BatchAddComponent } from './components/batch-add/batch-add.component';
import { StudentComponent } from './components/student/student.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { SquareComponent } from './components/chess/square/square.component';
import { BoardComponent } from './components/chess/board/board.component';
import { PuzzleComponent } from './components/chess/puzzle/puzzle.component';
import { ReversePipe } from './components/chess/reverse.pipe';
import { PieceComponent } from './components/chess/piece/piece.component';
import { SetupBoardComponent } from './components/chess/setup-board/setup-board.component';
import { PuzzleCollectionComponent } from './components/chess/puzzle-collection/puzzle-collection.component';
import { PuzzleCollectionResolver } from './components/chess/puzzle-collection/puzzle-collection-resolver';
import { PuzzleCollectionAddComponent } from './components/chess/puzzle-collection-add/puzzle-collection-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PuzzleSolutionComponent } from './components/chess/puzzle-solution/puzzle-solution.component';
import { PuzzleResolver } from './components/chess/puzzle/puzzle.resolver';
import { NotationComponent } from './components/chess/notation/notation.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoResolver } from './components/videos/videos.resolver';
import { SecurityInterceptor } from './security-interceptor';
import { SolvePuzzleComponent } from './components/chess/solve-puzzle/solve-puzzle.component';
import { PuzzleCategoryLookupResolver } from './components/chess/setup-board/puzzle-category-lookup.resolver';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { FeePaymentHistoryComponent } from './components/fee-payment-history/fee-payment-history.component';
import { FeePaymentComponent } from './components/fee-payment/fee-payment.component';
import { StudentChangePasswordComponent } from './components/student-change-password/student-change-password.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstitutionComponent,
    BranchComponent,
    BranchAddComponent,
    EmployeeListComponent,
    BatchComponent,
    BatchAddComponent,
    StudentComponent,
    StudentAddComponent,
    SquareComponent,
    BoardComponent,
    PuzzleComponent,
    ReversePipe,
    PieceComponent,
    SetupBoardComponent,
    PuzzleCollectionComponent,
    PuzzleCollectionAddComponent,
    PuzzleSolutionComponent,
    NotationComponent,
    VideosComponent,
    SolvePuzzleComponent,
    StudentProfileComponent,
    FeePaymentComponent,
    FeePaymentHistoryComponent,
    StudentChangePasswordComponent,
    UpdateUserComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    TimeModule,
    MenuModule,
    CarouselModule,
    FacebookPostsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [InstitutionResolver, PuzzleCollectionResolver, PuzzleResolver, VideoResolver, PuzzleCategoryLookupResolver,
    { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}