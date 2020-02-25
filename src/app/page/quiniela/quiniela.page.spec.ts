import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuinielaPage } from './quiniela.page';

describe('QuinielaPage', () => {
  let component: QuinielaPage;
  let fixture: ComponentFixture<QuinielaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuinielaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuinielaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
