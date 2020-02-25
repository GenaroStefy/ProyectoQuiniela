import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JornadasPage } from './jornadas.page';

describe('JornadasPage', () => {
  let component: JornadasPage;
  let fixture: ComponentFixture<JornadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JornadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JornadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
