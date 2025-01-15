import { runExecutor, PromiseExecutor } from '@nx/devkit';
import { BrowserBuilderOutput } from '@angular-devkit/build-angular';
import { MyExecutorExecutorSchema } from './schema';

const runMyExecutor: PromiseExecutor<MyExecutorExecutorSchema> = async (
  options,
  context
) => {
  console.log('Executor ran for MyExecutor', options);
  const { projectName, configurationName } = context;

  const buildResults = await runExecutor(
    {
      project: projectName,
      target: 'build',
      configuration: configurationName,
    },
    {},
    context
  );

  for await (const result of buildResults) {
    const { success, baseOutputPath } = result as BrowserBuilderOutput;
    console.log(`Build ${success} to ${baseOutputPath}`);
  }

  return {
    success: true,
  };
};

export default runMyExecutor;
