import { Program } from "./Factory";

abstract class ProgramDecorator extends Program {
  protected program: Program;

  constructor(program: Program) {
    super(program.name);
    this.program = program;
  }

  abstract description(): string;
}

export class TeamWorkDecorator extends ProgramDecorator {
  description(): string {
    return `${this.program.description()} + Team work`;
  }
}

export class SoloDecorator extends ProgramDecorator {
  description(): string {
    return `${this.program.description()} + Solo performer`;
  }
}