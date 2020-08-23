import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstitutionComponent } from './components/institution/institution.component';
import { InstitutionResolver } from './components/institution/institution.resolver';
import { BranchComponent } from './components/branch/branch.component';
import { BranchAddComponent } from './components/branch-add/branch-add.component';
import { BatchComponent } from './components/batch/batch.component';
import { BatchAddComponent } from './components/batch-add/batch-add.component';
import { StudentComponent } from './components/student/student.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { PuzzleComponent } from './components/chess/puzzle/puzzle.component';
import { SetupBoardComponent } from './components/chess/setup-board/setup-board.component';
import { PuzzleCollectionComponent } from './components/chess/puzzle-collection/puzzle-collection.component';
import { PuzzleCollectionAddComponent } from './components/chess/puzzle-collection-add/puzzle-collection-add.component';
import { PuzzleSolutionComponent } from './components/chess/puzzle-solution/puzzle-solution.component';
import { PuzzleResolver } from './components/chess/puzzle/puzzle.resolver';
import { VideosComponent } from './components/videos/videos.component';
import { VideoResolver } from './components/videos/videos.resolver';
import { SolvePuzzleComponent } from './components/chess/solve-puzzle/solve-puzzle.component';
import { PuzzleCategoryLookupResolver } from './components/chess/setup-board/puzzle-category-lookup.resolver';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { FeePaymentComponent } from './components/fee-payment/fee-payment.component';
import { FeePaymentHistoryComponent } from './components/fee-payment-history/fee-payment-history.component';
import { StudentChangePasswordComponent } from './components/student-change-password/student-change-password.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: "/home", pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'institution', component: InstitutionComponent, resolve: { list: InstitutionResolver } },
    { path: 'branch', component: BranchComponent, resolve: { institutionList: InstitutionResolver } },
    { path: 'branch-add', component: BranchAddComponent, resolve: { institutionList: InstitutionResolver } },
    { path: 'batch', component: BatchComponent, resolve: { institutionList: InstitutionResolver } },
    { path: 'batch-add', component: BatchAddComponent, resolve: { institutionList: InstitutionResolver } },
    { path: 'student', component: StudentComponent, resolve: { institutionList: InstitutionResolver } },
    { path: 'student-add', component: StudentAddComponent, resolve: { institutionList: InstitutionResolver } },
    { path: 'student-profile', component: StudentProfileComponent },
    {
        path: 'puzzle-collection', component: PuzzleCollectionComponent,
        resolve: {
            institutionList: InstitutionResolver
        }
    },
    {
        path: 'puzzle-collection-add', component: PuzzleCollectionAddComponent,
        resolve: { institutionList: InstitutionResolver }
    },
    { path: 'puzzleCollection/:collectionId', component: PuzzleComponent, resolve: { puzzleCategoryLookup: PuzzleCategoryLookupResolver } },
    { path: 'setup-board/:collectionId', component: SetupBoardComponent, resolve: { puzzleCategoryLookup: PuzzleCategoryLookupResolver } },
    { path: 'puzzle-solution/:puzzleId', component: PuzzleSolutionComponent, resolve: { puzzle: PuzzleResolver } },
    { path: 'solve-puzzle/:puzzleId', component: SolvePuzzleComponent, resolve: { puzzle: PuzzleResolver } },
    { path: 'videos', component: VideosComponent, resolve: { videos: VideoResolver } },

    { path: 'fee-payment', component: FeePaymentComponent },
    { path: 'fee-payment-history', component: FeePaymentHistoryComponent },

    { path: 'student-change-password', component: StudentChangePasswordComponent},
];
