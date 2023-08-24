import { PlaywrightTestArgs, PlaywrightTestOptions, test as base } from '@playwright/test';

export type WorkerOptions = {
  skipTestCondition: boolean;
}

export type TestOptions = {
  someAnotherTestOption: string
}

export const workerFixtured = base.extend<{key:any, value:unknown},WorkerOptions>({
    skipTestCondition: [true, { scope: 'worker', option: true }]
});

export const test = workerFixtured.extend<TestOptions>({
  someAnotherTestOption : ['someDefaultValue', {option: true}]
})

export const expect = test.expect;
