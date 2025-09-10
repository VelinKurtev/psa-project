export abstract class Program {
  constructor(public name?: string) {}
  abstract description(): string;
}

class LearningWithUnderstanding extends Program {
  description(): string {
    return "Study with understanding";
  }
}

class AdvancedCheating extends Program {
  description(): string {
    return "Advanced cheating";
  }
}

class HardcoreCramming extends Program {
  description(): string {
    return "Hardcore cramming";
  }
}

export class ProgramFactory {
  static createProgram(type: string | null): Program {
    switch (type) {
      case "learning":
        return new LearningWithUnderstanding();
      case "cheating":
        return new AdvancedCheating();
      case "cramming":
        return new HardcoreCramming();
      default:
        throw new Error("Unknown program");
    }
  }
}