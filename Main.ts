import * as readline from "readline";
import { University } from "./University";
import { ProgramFactory } from "./Factory";
import { SoloDecorator, TeamWorkDecorator } from "./Decorator";
import { ExecutionStrategy, CafeStrategy, CorridorStrategy, HomeStrategy } from "./Strategy";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const university = University.getInstance();
university.welcomeStudents();

console.log("Select Program: learning / cheating / cramming");
rl.question("Your choice: ", (programChoice) => {
    try {
        let program = ProgramFactory.createProgram(programChoice);

        console.log("Add Profile: team / solo");
        rl.question("Your choice: ", (profileChoice) => {
            if (profileChoice === "team") {
                program = new TeamWorkDecorator(program);
            } else if (profileChoice === "solo") {
                program = new SoloDecorator(program);
            }

            console.log("Choose Place for Execution: cafe / corridor / home");
            rl.question("Your choice: ", (placeChoice) => {
                let strategy: ExecutionStrategy;
                switch (placeChoice) {
                    case "cafe":
                        strategy = new CafeStrategy();
                        break;
                    case "corridor":
                        strategy = new CorridorStrategy();
                        break;
                    case "home":
                        strategy = new HomeStrategy();
                        break;
                    default:
                        throw new Error("Unknown place");
                }

                console.log("Chosen program:", program.description());
                strategy.execute(program.description());

                rl.close();
            });
        });
    } catch (error: any) {
        console.error(error.message);
        rl.close();
    }
});