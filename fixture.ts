import { PlaywrightTestArgs, PlaywrightTestOptions, test as base } from '@playwright/test';

export type TestOptions = {
  skipTestCondition: boolean;
}



export const test = base.extend<TestOptions>({
    skipTestCondition: [true, { option: true }]
});

export const expect = test.expect;
