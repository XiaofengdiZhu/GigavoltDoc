import strings from "./strings.json";
import {useData} from "vitepress";

export default function locale(...args: any[]) {
    try {
        let result = strings;
        args.forEach(arg => {
            result = result[arg];
        });
        result = result[useData().lang.value];
        if (typeof result == "string") {
            return result;
        }
        else {
            return args.join(".");
        }
    }
    catch {
        return args.join(".");
    }
}