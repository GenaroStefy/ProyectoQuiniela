import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarquinielasPage } from './agregarquinielas.page';

describe('AgregarquinielasPage', () => {
  let component: AgregarquinielasPage;
  let fixture: ComponentFixture<AgregarquinielasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarquinielasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarquinielasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
