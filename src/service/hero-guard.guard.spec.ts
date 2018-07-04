import { TestBed, async, inject } from '@angular/core/testing';

import { HeroGuardGuard } from './hero-guard.guard';

describe('HeroGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroGuardGuard]
    });
  });

  it('should ...', inject([HeroGuardGuard], (guard: HeroGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
