export class University {
  private static instance: University;
  public name: string;

  private constructor() {
    this.name = "Plovdiv University";
  }

  public static getInstance(): University {
    if (!University.instance) {
      University.instance = new University();
    }
    return University.instance;
  }

  public welcomeStudents(): void {
    console.log(`Welcome to ${this.name}!`);
  }
}