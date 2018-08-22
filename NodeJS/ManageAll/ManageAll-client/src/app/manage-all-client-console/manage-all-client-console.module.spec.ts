import { ManageAllClientConsoleModule } from './manage-all-client-console.module';

describe('ManageAllClientConsoleModule', () => {
  let manageAllClientConsoleModule: ManageAllClientConsoleModule;

  beforeEach(() => {
    manageAllClientConsoleModule = new ManageAllClientConsoleModule();
  });

  it('should create an instance', () => {
    expect(manageAllClientConsoleModule).toBeTruthy();
  });
});
