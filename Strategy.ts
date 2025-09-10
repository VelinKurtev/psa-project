export interface ExecutionStrategy {
  execute(programName: string): void;
}

export class CafeStrategy implements ExecutionStrategy {
  execute(programName: string): void {
    console.log(`${programName} is executed in the cafe.`);
  }
}

export class CorridorStrategy implements ExecutionStrategy {
  execute(programName: string): void {
    console.log(`${programName} is executed in the corridor.`);
  }
}

export class HomeStrategy implements ExecutionStrategy {
  execute(programName: string): void {
    console.log(`${programName} is executed at home.`);
  }
}