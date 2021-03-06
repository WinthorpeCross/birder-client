import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { fakeIObservationCount, fakeIObservationCountIsZero } from 'src/app/testing/analysis-helpers';
import { findComponent } from 'src/app/testing/element.spec-helper';

import { ObservationCountComponent } from './observation-count.component';
import { ObservationCountService } from './observation-count.service';

describe('ObservationCountComponent unit tests', () => {

  describe('ObservationCountComponent - opens loading placeholder by default', () => {
      let fixture: ComponentFixture<ObservationCountComponent>;
      let debugElement: DebugElement;
      let fakeObservationCountService: ObservationCountService;

      beforeEach(async () => {

          fakeObservationCountService = jasmine.createSpyObj<ObservationCountService>(
              'ObservationCountService',
              {
                  getData: undefined,
              },
              {
                  isLoading: of(false),
                  isError: of(false),
                  getCount: undefined
              }
          );

          await TestBed.configureTestingModule({
              declarations: [
                  ObservationCountComponent
              ],
              schemas: [NO_ERRORS_SCHEMA],
              providers: [
                  { provide: ObservationCountService, useValue: fakeObservationCountService }
              ]
          }).compileComponents();

          fixture = TestBed.createComponent(ObservationCountComponent);
          //fixture.detectChanges();
          debugElement = fixture.debugElement;
      });


      it('should create the app', () => {
          const component = fixture.componentInstance;
          expect(component).toBeTruthy();
      });


      it('should show loading child component', () => {
          fixture.detectChanges();

          // Test without the helper
          const { debugElement } = fixture;
          const loading = debugElement.query(By.css('app-loading'));
          expect(loading).toBeTruthy();

          // Test using the spec-helper function
          const loading1 = findComponent(fixture, 'app-loading');
          expect(loading1).toBeTruthy();
      });
  });

  describe('ObservationCountComponent service is called successfully with count > 0', () => {

      // beforeEach(() => {
      //   fixture.detectChanges();
      // });

      let fixture: ComponentFixture<ObservationCountComponent>;
      let debugElement: DebugElement;
      let fakeObservationCountService: ObservationCountService;

      beforeEach(async () => {

          fakeObservationCountService = jasmine.createSpyObj<ObservationCountService>(
              'ObservationCountService',
              {
                  getData: undefined,
              },
              {
                  isLoading: of(false),
                  isError: of(false),
                  getCount: of(fakeIObservationCount)
              }
          );

          await TestBed.configureTestingModule({
              declarations: [
                  ObservationCountComponent
              ],
              schemas: [NO_ERRORS_SCHEMA],
              providers: [
                  { provide: ObservationCountService, useValue: fakeObservationCountService }
              ]
          }).compileComponents();

          fixture = TestBed.createComponent(ObservationCountComponent);
          fixture.detectChanges();
          debugElement = fixture.debugElement;
      });

      it('should call getData on init', () => {
          expect(fakeObservationCountService.getData).toHaveBeenCalled();
          expect(fakeObservationCountService.getData).toHaveBeenCalledTimes(1);
      });

      it('should render the analysis section for count >1', fakeAsync(() => {
          const compiled = fixture.nativeElement as HTMLElement;
          tick();

          expect(compiled.querySelector('[data-testid="analysis-count-more-than-one"]')?.textContent).toBeDefined();
          expect(compiled.querySelector('[data-testid="analysis-text"]')?.textContent).toContain('You have spotted 57');

          expect(compiled.querySelector('[data-testid="analysis-count-zero"]')?.textContent).toBeUndefined();
      }));


      it('should not show loading child component', () => {
          const { debugElement } = fixture;
          const loading = debugElement.query(By.css('app-loading'));
          expect(loading).toBeFalsy();
      });

      it('should not show error content', () => {
          const compiled = fixture.nativeElement as HTMLElement;
          expect(compiled.querySelector('[data-testid="error-content"]')?.textContent).toBeUndefined();
      });
  });

  describe('ObservationCountComponent service is called successfully with count = 0', () => {

    let fixture: ComponentFixture<ObservationCountComponent>;
    let debugElement: DebugElement;
    let fakeObservationCountService: ObservationCountService;

    beforeEach(async () => {

        fakeObservationCountService = jasmine.createSpyObj<ObservationCountService>(
            'ObservationCountService',
            {
                getData: undefined,
            },
            {
                isLoading: of(false),
                isError: of(false),
                getCount: of(fakeIObservationCountIsZero)
            }
        );

        await TestBed.configureTestingModule({
            declarations: [
                ObservationCountComponent
            ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: ObservationCountService, useValue: fakeObservationCountService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ObservationCountComponent);
        fixture.detectChanges();
        debugElement = fixture.debugElement;
    });

    it('should call getData on init', () => {
        expect(fakeObservationCountService.getData).toHaveBeenCalled();
        expect(fakeObservationCountService.getData).toHaveBeenCalledTimes(1);
    });

    it('should render the analysis section for count = 0', fakeAsync(() => {
        const compiled = fixture.nativeElement as HTMLElement;
        tick();

        expect(compiled.querySelector('[data-testid="analysis-count-zero"]')?.textContent).toBeDefined();
        expect(compiled.querySelector('[data-testid="analysis-zero-text"]')?.textContent).toContain('You have not yet logged any observations');

        expect(compiled.querySelector('[data-testid="analysis-count-more-than-one"]')?.textContent).toBeUndefined();
    }));


    it('should not show loading child component', () => {
        const { debugElement } = fixture;
        const loading = debugElement.query(By.css('app-loading'));
        expect(loading).toBeFalsy();
    });

    it('should not show error content', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('[data-testid="error-content"]')?.textContent).toBeUndefined();
    });
});


  describe('ObservationCountComponent - test when error', () => {
      let fixture: ComponentFixture<ObservationCountComponent>;
      let debugElement: DebugElement;
      let fakeObservationCountService: ObservationCountService;

      beforeEach(async () => {

          fakeObservationCountService = jasmine.createSpyObj<ObservationCountService>(
              'ObservationCountService',
              {
                  getData: undefined,
              },
              {
                  isLoading: of(false),
                  isError: of(true),
                  getCount: undefined //of(fakeITweet)
              }
          );

          await TestBed.configureTestingModule({
              declarations: [
                  ObservationCountComponent
              ],
              schemas: [NO_ERRORS_SCHEMA],
              providers: [
                  { provide: ObservationCountService, useValue: fakeObservationCountService }
              ]
          }).compileComponents();

          fixture = TestBed.createComponent(ObservationCountComponent);
          fixture.detectChanges();
          debugElement = fixture.debugElement;
      });

      it('hides loading content', () => {
          const { debugElement } = fixture;
          const loading = debugElement.query(By.css('app-loading'));
          expect(loading).toBeFalsy();
      });

      it('hides main content', () => {
          const compiled = fixture.nativeElement as HTMLElement;
          expect(compiled.querySelector('[data-testid="main-title"]')?.textContent).toBeUndefined();
      });

      it('shows error content', () => {
          const compiled = fixture.nativeElement as HTMLElement;
          expect(compiled.querySelector('[data-testid="error-content"]')?.textContent).toBeDefined();
          expect(compiled.querySelector('[data-testid="reload-button"]')?.textContent).toBeDefined();
          expect(compiled.querySelector('[data-testid="error-content"]')?.textContent).toContain('Whoops');
      });

      // 
      it('error reload button on click calls reload()', fakeAsync(() => {
          // Arrange
          const component = fixture.componentInstance;
          const reloadMethod = spyOn(component, 'reload');
          const incrementButton = debugElement.query(
              By.css('[data-testid="reload-button"]')
          );

          // Act
          incrementButton.triggerEventHandler('click', null);

          tick();

          // Assert
          expect(reloadMethod).toHaveBeenCalled();
      }));
  });


  describe('ObservationCountComponent - test loading placeholder', () => {
      let fixture: ComponentFixture<ObservationCountComponent>;
      let debugElement: DebugElement;
      let fakeObservationCountService: ObservationCountService;

      beforeEach(async () => {

          fakeObservationCountService = jasmine.createSpyObj<ObservationCountService>(
              'ObservationCountService',
              {
                  getData: undefined,
              },
              {
                  isLoading: of(true),
                  isError: of(false),
                  getCount: undefined //of(fakeITweet)
              }
          );

          await TestBed.configureTestingModule({
              declarations: [
                  ObservationCountComponent
              ],
              schemas: [NO_ERRORS_SCHEMA],
              providers: [
                  { provide: ObservationCountService, useValue: fakeObservationCountService }
              ]
          }).compileComponents();

          fixture = TestBed.createComponent(ObservationCountComponent);
          fixture.detectChanges();
          debugElement = fixture.debugElement;
      });


      it('shows loading content', () => {
          const loading = findComponent(fixture, 'app-loading');
          expect(loading).toBeTruthy();
      });

      it('should not show main content', () => {
          const compiled = fixture.nativeElement as HTMLElement;
          expect(compiled.querySelector('[data-testid="main-title"]')?.textContent).toBeUndefined();
      });

      it('should not show error content', () => {
          const compiled = fixture.nativeElement as HTMLElement;
          expect(compiled.querySelector('[data-testid="error-content"]')?.textContent).toBeUndefined();
      });
  });
});